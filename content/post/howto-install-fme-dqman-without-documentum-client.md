+++
date = "2013-09-06T11:22:46-06:00"
title = "howto install fme dqman without documentum client"
categories = ["dev"]
tags = ["dqman", "documentum"]
+++

During a development project, I needed to run fme's dqMan to query Documentum, but didn't want to install the Documentum client as well.  The following procedure shows how to get the required Documentum files off of an existing install so dqMan can run.

_The following procedure is for Documentum 6.5, it may be applicable for other versions_

1. Download [dqMan](http://www.fme-us.com/technologies/ecm/emc-documentum/dqman/) from the [fme](http://www.fme-us.com/) website.  You will receive the license file in an email.
2. Extract and install dqMan
3. From the content server, copy the `dmcl.dll` file from the `Documentum\product\6.5\bin` directory to a location on your system Path.
4. Create a dmcl.ini file and place the following section.
	
	```ini
	[DOCBROKER_PRIMARY]
	host=yourContentServer #IP or Hostname
	```

5. Create and Environmental Variable named `DCML_CONFIG` that points to the `dmcl.ini` file.  E.g. `C:\dmcl.ini`