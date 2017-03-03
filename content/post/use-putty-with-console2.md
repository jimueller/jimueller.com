+++
date = "2012-08-18T20:49:34-06:00"
title = "use putty with console2"
categories = ["dev","tools"]
tags = ["console2","ansicon", "console", "putty"]
+++

[Console2](http://sourceforge.net/projects/console/files/) is a great
frontend on Windows for cmd.exe and PowerShell.  It
provides re-sizable windows, a tabbed interface, and transparent
windows.

It can also be used with
[PuTTY](http://www.chiark.greenend.org.uk/~sgtatham/putty/), but it
takes a little bit of work.  The issue is apparently with ANSI escape
codes. Thankfully David A. Sjøen
([@dasjoen](https://twitter.com/dasjoen/)) commented on [Scott
Hanselman’s Console2
article](http://www.hanselman.com/blog/Console2ABetterWindowsCommandPrompt.aspx)
with the solution using ANSICON.

From the [ANSICON ReadMe](https://github.com/adoxa/ansicon#readme)

> ANSICON provides ANSI escape sequences for Windows console programs.
> It provides much the same functionality as \`ANSI.SYS’ does for
> MS-DOS. 

* * * * *


### Instructions

1.  Download ANSICON ([Github](https://github.com/adoxa/ansicon/downloads)) and extract the
    contents from the `x86` or `x64` folders to your Console2 installation
    folder.

    I now have the following files in my `C:\Program Files\Console2\`
    directory:

    -   ANSI32.dll
    -   ANSI64.dll
    -   ansicon.exe
    -   ANSI-LLW.exe

2.  Open Console2 and create a new tab with the command line, replacing `aPuttyProfileName` with the [name of a saved PuTTY profile](http://the.earth.li/~sgtatham/putty/0.63/htmldoc/Chapter7.html#plink):
    ``` bat
    C:\Program Files\Console2\ansicon.exe "C:\Program Files (x86)\PuTTY\plink.exe"
    -load aPuttyProfileName
    ```
