---
layout: post
title: A Simple Function to Get a WebClient (with proxy) in PowerShell | David Mohundro
date: '2012-07-19T08:18:00-05:00'
tags:
- powershell
- proxy
- Dev
tumblr_url: http://blog.jimueller.com/post/27552058511/a-simple-function-to-get-a-webclient-with-proxy-in
---
## [A simple function to get a WebClient (with proxy) in PowerShell | David Mohundro](http://mohundro.com/blog/2007/06/28/a-simple-function-to-get-a-webclient-with-proxy-in-powershell/)

A nice function from David Mohundro to create a WebClient that authenticates with a proxy.

{% highlight powershell %}
function Get-ProxyWebClient {
  $webclient = New-Object System.Net.WebClient
  $proxy = New-Object System.Net.WebProxy($global:proxyHost, $global:proxyPort)
  $proxy.Credentials = (Get-Credential).GetNetworkCredential()
  $webclient.Proxy = $proxy
  return $webclient
}	
{% endhighlight %}
