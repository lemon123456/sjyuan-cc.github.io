## System Requirements

The following is the recommended server specs when deploying a new EUMS instance into production:

* Operating System: Ubuntu 14.04.2 LTS (trusty)
* RAM: 4GB
* CPU: 2VCPU
* Storage: 50GB

## Scaling considerations

Scaling will be determined by the usage of the system over time. Note that for Phase II, we are going to be deploying separate instances for separate countries, so there is no need at this time to scale for multi-tenancy. However, should there be a need to scale EUMS for even particular instances, this should focus on both the RAM usage at peak times, as well as overall storage capacity.

Note that scaling each EUMS instance will need to be done vertically. Before provisioning a new EUMS instance for a particular country, if you feel that your user base will be exponentially larger than a normal EUMS instance, then consider adding more resources. However, note that at the time of this writing, the recommended specs should be sufficient for the EUMS system completed for Phase II. Also, before adding resources to the machine to improve performance, make sure that the lack of these resources is in fact the reason for bad performance.

From a database perspective, the number of entities needed within the EUMS system will not be high enough to consider going above and beyond the normal database configuration. Please see the database configuration section below for more details. However, do note that as with any production system, backups are essential to any recovery needed, so the space needed for this should be taken into account by the support team.

## Monitoring


Before the end of Phase II, basic monitoring will be put in place for all processes running under Supervisor. These include:

* The EUMS application (uWSGI)
* The EUMS main database (PostgreSQL)
* The Contacts application
* The Contacts database (MongoDB)
* The celery process
* The celery broker (Redis)
* The ElasticSearch process
* The web server (nginx)

When one of these applications or processes goes down, basic notifications will be sent to appropriate administrators for that EUMS instance. Within the appropriate Supervisor logs, an administrator can then diagnose the issue and fix accordingly. Note that by the end of Phase II, we do not foresee frequent issues to come up that need resolving. However, when issues do arise, this monitoring will be the mechanism for notification and subsequent fixing.    

And we are currently using Sentry to collect any logs above error level. Sentry will send the email to administrators once it receives an error message. Sentry will also provide reports and analytics, please refer to [Sentry](https://getsentry.com/welcome/) for more details.

## Performance

The recommended system requirements should provide sufficient resources to make sure performance is not hindered by the server specs (RAM, CPU, and storage capacity). However, it is important to note that as the application grows, there are some application-specific performance areas that should be noted.

The web pages devoted to the home page (dashboard with the map) and the report screens, are two areas that will see response time increase as more users create distributions / use the system. Although performance could be better on these screens, we do make sure to give the user an indication that the page is loading (via a spinner) so they don't get the impression that nothing is happening. Moving forward, we will try to utilize what we've done for the Supply Efficiency Report screen, which uses ElasticSearch. ElasticSearch provides us a way to not worry about complicated joins in our data model, but rather have an appropriate structure to the data upfront before a user goes to one of these web pages. By the end of Phase II, not all screens will be using ElasticSearch, but some important ones will be, which will improve performance for those screens. For those web pages that will not be using ElasticSearch by the time Phase II is done, the setup of ElasticSearch can be leveraged down the line in future phases.

## Process configurations

Note that these processes are managed by [Supervisor](http://supervisord.org/).

#### Postgres

Although the number of deliveries and VISION imported data will increase over time, there is not a need to overly complicate the setup of the PostgreSQL database. Currently, the following settings are important to note, along with their current value (these would both require a restart of the database if changed):

* **Max Connections**: 100 - this refers to the number of client connections allowed to the database.
* **Shared Buffers**: 128MB - this refers to the amount of shared memory that can be used by the database server.

#### NGINX

The NGINX configuration depends on the expected amount of traffic on the EUMS site. Out of the box, the NGINX configuration is fairly optimized compared to other web servers. With each EUMS instance having its own set of resources for each country, the number of requests per second hitting the site should not reach the level of what can be considered high traffic sites. The following configuration settings are some of the more important and are set currently upon deployment of the EUMS system:

* **worker_processes** - 4
* **worker_connections** - 1024 - b/c of the way browsers communicate with web servers, this usually means ~500 requests can be handled per worker process.
* **keepalive_timeout** - 65
* **client_body_buffer_size** - 32k
* **client_max_body_size** - currently EUMS uploads files, but they are no bigger than 1M, so as long as this setting is sufficient for that.

#### uWSGI

The uWSGI server is configured to allows quick communication between the web server (NGINX) and the Django application. The configuration uses a basic production configuration. Using a master process, it has 2 workers (synonymous with processes) running at all times by default. If the amount of workers needs to be increased, then a simple ini configuration file change is needed. Just add the line 'workers = \<# of workers>' to the ini file, which is currently located in the /etc/uwsgi/sites/ directory.

If you are trying to troubleshoot issues that seem to be coming from the uWSGI server, then you can quickly install a utility called 'uwsgitop' (via pip) on your production server. This will give you top like statistics on your uWSGI server / workers.

#### Celery

Celery is used for handling background processes within the EUMS app. This allows the user to continue using the system without waiting for tasks that either take a long time or tasks that do not need to be completed immediately. The types of tasks that Celery handles includes the following (among others):

* Syncing data from VISION
* Syncing ElasticSearch
* Handling communication between EUMS and RapidPro (e.g. delivery creation)
* Exporting reports in CSV

The Celery configuration needs to both handle normal tasks, as well as periodic tasks. For the periodic tasks, a Celery beat schedule is used, and only one instance of this beat worker should be running or else you will have multiple workers handling the same task. For the normal tasks, the default configuration is sufficient, which creates a concurrent number of workers depending on the number of CPUs available on the machine. **Based on the minimum system requirements, you should have at least 2 celery workers running for normal tasks, and one more running for periodic tasks.**


#### ElasticSearch

The configuration of ElasticSearch is highly dependent on the fact that it is deployed on the same machine as the EUMS application. By doing this, it makes the configuration very simple, as well as the deployment. There are no changes needed to the ElasticSearch default configuration values since it is deployed as a single cluster with one node process. The flip side of this deployment is that memory needs to be watched as its usage may impact the amount of memory available for EUMs and other processes on the deployment box.

For the purposes of the initial release of EUMS, ElasticSearch is being piloted on just a few report pages to gauge its usage and effectiveness. Therefore, after completion of Phase II, its memory usage should not have any discernible impact on the main EUMS application. In the future, the expectation is that it will become the de facto search application for EUMS across all its reporting pages and other pages that can utilize its speed. As it is more widely used by the EUMS application, consideration for using a separate machine or increasing the memory on the machine hosting the main EUMS application will need to be taken into consideration.  
eptance criterion of that story. 

**Note:** To ensure the stability for ElasticSearch, searchable fields are bound to the request body for efficient query. As a trade-off, fuzzy search is not supported for PO/Waybill filter on Supply Efficiency Report.

## Notes
：
### When creating a delivery for the same consignee
The current design is that a new run has to queue behind an existing scheduled run.

That's to say:   
1. If there already exists a delivery which sent to a specific contact, and its shipment date is set for a couple days ago, e.g. 3 days ago. Then you send another delivery to the same contact, even you set the shipment date to a month ago. The second SMS won't be sent until the first one' SMS send 4 days later.   
2. A delivery's shipment date is set for a couple days from now, and then a delivery is created that is shipped today, so the one set with shipment for today will wait to send SMS until the one that is sent a couple days from now.   

So we recommend that the delivery should be created in chronological order at the moment.




