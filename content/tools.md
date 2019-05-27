---
title: "Tools"
date: 2019-05-27T14:21:56-05:00
draft: true
---

# The Lineup

## MacMini (2018)

Decided to give MacOS a shot and a MacMini was the cheapest way to do it. I upgraded the RAM to 32 GB using ifixit's guide and tools. Was not nearly as difficult as I expected. The process took about 20 minutes, if that.  MacOS has given me an appreciation for Windows and Linux.  I got Apple'd within the first 20 minutes when I realized that MacOS doesn't support DisplayPort 1.2 chaining, nice. I do like MacOS, it has a well designed consistency that just isn't there with Gnome and Windows 10.

## NUC (Ubuntu 19.04 / Gnome)

Main linux dev machine, I spend most of my time on this box.  I originally got this when I got tired of trying to make Ruby work under Windows.  I originally used VM Ware with Xubuntu, but decided that I wanted a true Linux dev machine.

## Windows 10 Pro

For Windows development and any time I want to do some Powershelling. Useful to get familiar with tools I use at work on a Windows env. I have to give Microsoft credit, the hardware support is just refreshing compared to MacOS and Linux. Things actually do just work, most of the time.

## NUC (Server)

Headless Intel NUC running Ubuntu 18.04 LTS server.  This is the "lab" machine to check out new apps and devops type infrastructure.

- HAProxy does the routing
- Gitlab for source code and CI
- Docker Swarm fronted with Portainer
- Nexus as a Maven and Docker repository

## Dual Monitor KVM (Aten)

I purchased a 4-port dual monitor DisplayPort KVM to connect two Dell U2415 monitors to the Windows box, Macmini, and Ubuntu 19.04 NUC, and my work laptop.  Turns out, a lot has to go right for this to work, and it's been about a year long battle to get this setup to work somewhat consistenly.  It's nice when it works, but sometimes it just doesn't work, for no apparent reason.  The KVM is really the only one on the market that supports DisplayPort 1.2 Multi-Stream Transport (MST), meaning you can daisy chain multiple monitors through once DisplayPort connection to the machine.  There is also an IOGear-branded KVM that does the same, but it's actually made by Aten, so I suspect it has the same guts.  Maybe someday Blackbox will come out with a reliable dual head MST KVM.