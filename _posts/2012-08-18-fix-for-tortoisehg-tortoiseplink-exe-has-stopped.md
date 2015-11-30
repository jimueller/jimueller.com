---
layout: post
title: 'Fix for TortoiseHg: TortoisePlink.exe has stopped working'
date: '2012-08-18T19:11:00-05:00'
categories:
- Tools
tags:
- Pageant
- TortoiseHg
- hg
- utils
- ssh
---
If trying to use hg push with SSH and receiving the error **TortoisePlink.exe has stopped working**, make sure that the Pageant.exe that is running is the one from the TortoiseHg install directory.

I have PuTTY installed in C:\Program Files(x86)\PuTTY\ and a copy was installed with TortoiseHg.

The error was caused when I started the Pageant.exe from the PuTTY installation directory, and not the Pageant from the TortoiseHg installation directory.
