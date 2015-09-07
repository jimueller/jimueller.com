---
layout: post
title: Set Git Http Proxy
date: '2013-09-12T09:15:39-05:00'
tags: [git]
tumblr_url: http://blog.jimueller.com/post/61023104212/set-git-http-proxy
---
Quick reminder of how to set tell Git to use an HTTP proxy.  This overrides the `http_proxy` environment variable that Git will look to first.

{% highlight bash %}
git config --global http.proxy http://host:port
{% endhighlight %}
