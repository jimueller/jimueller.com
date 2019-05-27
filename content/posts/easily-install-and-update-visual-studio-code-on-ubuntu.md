+++
date = "2015-11-22T11:22:05-06:00"
title = "easily install and update visual studio code on ubuntu"
categories = ["tools"]
tags = ["VSCode", "Ubuntu-Make", "linux"]
aliases = [
    "/tools/2015/11/21/easily-install-and-update-visual-studio-code-on-ubuntu/"
]
+++

# Update: 2019-01-01
*Note: This method is pretty out of date now that Microsoft supports [deb and rpm packages](https://code.visualstudio.com/docs/?dv=linux64_deb) for Visual Studio Code.*

[Visual Studio Code](https://code.visualstudio.com/), my current go-to editor on Windows and Linux. I prefer Xubuntu for it's combination of speed, configurability, and Git integration. It's just a really nice editor.

As a relativly new product in Beta status, it's getting fairly frequent updates. This isn't really a problem on Windows since it has an installer to take care of updates.  This is probably true for Mac as well, but on Linux VSCode is provided as a .zip archive.

The official installation instructions for Linux are to extract this .zip file to a directory and open the
**code** executable.  Honestly, as a relativly novice Linux user, this method for installation isn't very hard.  However, there is an arguably easier way, by using [Ubuntu Make](https://wiki.ubuntu.com/ubuntu-make), which I came across on from an [answer to a question about this topic on AskUbuntu](http://askubuntu.com/a/616363).

I wasn't previously aware of Ubuntu Make, here's the definition from the Ubuntu Wiki.

> Ubuntu Make is a command line tool which allows you to download the latest version of popular developer tools on your installation, installing it longside all the required dependencies (which will only ask for root access if you don't  have all the required dependencies installed already), enable multi-arch on your system if you are on a 64 bit machine, integrate it with the Unity launcher… Basically, one command to get your system ready to develop with!

Sounds great, and it is. Installing with Ubuntu Make gives the added benefits of making upgrading a one step process and making the Code icon available in menus and launchers.

<!--more-->

#### Installation

1. Install Ubuntu Make

```
sudo add-apt-repository ppa:ubuntu-desktop/ubuntu-make
sudo apt-get update
sudo apt-get install ubuntu-make
```

2. Install Visual Studio Code with Make

```
umake web visual-studio-code
```

When you're done, a Visual Studio Code icon will be automatically added to your launcher, and will now be available
in the Applications menu, likely under the **Develeopment** folder.

#### Upgrade

When Visual Studio Code notifies me that a newer version is available, I just run the `umake` command again and
VS Code is updated seamlessly.

```
umake web visual-studio-code
```

#### References:
[How to install Visual Studio Code on Ubuntu?](http://askubuntu.com/a/616363)