---
layout: post
title: "Allowing Sench Cmd to Serve on Port 80 on Linux"
date: 2016-08-06T16:26:20-05:00
publish: true
categories: dev
tags: sencha linux authbind
---

If you've tried to serve files with Sencha Cmd on port 80, you'll probably see an error like this.

```
user@localhost ~/dev/extjs/extjsapp $ sencha web -p 80 start
Sencha Cmd v6.1.3.42
[INF] Starting server on port : 80
[INF] Mapping http://localhost:80/ to ....
[WRN] FAILED SelectChannelConnector@0.0.0.0:80: java.net.SocketException: Permission denied
[WRN] FAILED org.eclipse.jetty.server.Server@5d25ad3: java.net.SocketException: Permission denied
Exception in thread "Thread-5" com.sencha.exceptions.BasicException: Permission denied
	at com.sencha.exceptions.BasicException.wrap(BasicException.java:54)
	at com.sencha.exceptions.BasicException.stealthify(BasicException.java:43)
	at com.sencha.exceptions.BasicException.raise(BasicException.java:35)
	at com.sencha.util.http.Server.start(Server.java:265)
	at com.sencha.util.JettyServer.start(JettyServer.java:102)
	at com.sencha.command.filesystem.StartCommand$1.run(StartCommand.java:72)
	at com.sencha.util.ThreadUtil$1.run(ThreadUtil.java:65)
	at com.sencha.util.ThreadUtil$2.run(ThreadUtil.java:162)
	at java.lang.Thread.run(Thread.java:745)
Caused by: java.net.SocketException: Permission denied
	at sun.nio.ch.Net.bind0(Native Method)
	at sun.nio.ch.Net.bind(Net.java:433)
	at sun.nio.ch.Net.bind(Net.java:425)
	at sun.nio.ch.ServerSocketChannelImpl.bind(ServerSocketChannelImpl.java:223)
	at sun.nio.ch.ServerSocketAdaptor.bind(ServerSocketAdaptor.java:74)
	at org.eclipse.jetty.server.nio.SelectChannelConnector.open(SelectChannelConnector.java:187)
	at org.eclipse.jetty.server.AbstractConnector.doStart(AbstractConnector.java:316)
	at org.eclipse.jetty.server.nio.SelectChannelConnector.doStart(SelectChannelConnector.java:265)
	at org.eclipse.jetty.util.component.AbstractLifeCycle.start(AbstractLifeCycle.java:64)
	at org.eclipse.jetty.server.Server.doStart(Server.java:288)
	at org.eclipse.jetty.util.component.AbstractLifeCycle.start(AbstractLifeCycle.java:64)
	at com.sencha.util.http.Server.start(Server.java:263)
	... 5 more
```

Sencha Cmd defaults to serving files port 1841, but sometimes there is a need to serve on port 80.
On reason is if you are setting 'localhost' as an allowed cross-origin domain.

On Linux, only root is allowed to bind processes to reserved ports - those up to 1023.  There are a few methods to get
around this, such as configuring port routing or authbind. I prefer allowing java processes to bind to port 80
by granting the `CAP_NET_BIND_SERVICE` permission permenantly to java.  Authbind can be used for
one time access, and may be more appropriate if there are security concerns.

The following steps will demonstrate how to use **setcap** to allow java to bind on port 80. I would prefer
to only grant Sencha Cmd with the permission, but was unable to determine how to do this.

First, determine where java is installed, by following the symbolic links.

`> whereis java`

The output will be similar to:
`java: /usr/bin/java /usr/share/java /usr/share/man/man1/java.1.gz`

and we see that java is in `/usr/bin/java`.

Let's take a look at that.

```bat
> ls -l /usr/bin/java
lrwxrwxrwx 1 root root 22 Jul 24 19:41 /usr/bin/java -> /etc/alternatives/java
```

We can see that `/usr/bin/java` is a symbolic link to `/etc/alternatives/java`, let's take a look at that.

```bat
> ls -l /etc/alternatives/java
lrwxrwxrwx 1 root root 46 Jul 24 19:41 /etc/alternatives/java -> /usr/lib/jvm/java-8-openjdk-amd64/jre/bin/java
```

We can now see that the actual location of java is `/usr/lib/jvm/java-8-openjdk-amd64/jre/bin/java`.
Now that we know where java is, we can grant permission to bind to low-numbered ports.

```
sudo setcap CAP_NET_BIND_SERVICE=+eip /usr/lib/jvm/java-8-openjdk-amd64/jre/bin/java
```

Here we are granting with the following permissions.

- e:Effictive activates the capability
- p:Permitted allows the capability
- i:Inherites the capability is inherited by child processes.

Now that the `CAP_NET_BIND_SERVICE` capability has been granted, let's try serving on port 80.

```
user@localhost ~/dev/extjs/extjsapp $ sencha web -p 80 start
Sencha Cmd v6.1.3.42
[INF] Starting server on port : 80
[INF] Mapping http://localhost:80/ to ....
```

That looks much better.