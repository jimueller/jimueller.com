+++
date = "2015-11-22T11:21:41-06:00"
title = "clean websphere portal temp directories"
categories = ["dev"]
tags = ["websphere-portal"]
+++

WebSphere and WebSphere Portal create temporary directories for managing publish state, session state, and other data that can accumulate, degrading performance and causing publishing synchronization issues, especially on a development machine.  If you begin to experience slow startup times or have publishing errors from RAD, cleaning temp folders can often resolve these issues.

## On Windows, use Robocopy to delete long file paths
Note: On Windows, long directory paths can sometimes cause problems when trying to delete files in the WebSphere directory.  [Robocopy.exe](https://technet.microsoft.com/en-us/library/cc733145%28WS.10%29.aspx) is a bundled utility that has support for long file paths.  Robocopy can be used to all files in a directory by mirroring an empty directory.

1. Create an empty directory.  `C:\>mkdir temp/empty`
2. Using the empty directory as the **source** directory, you can use Robocopy's `/MIR` switch to mirror the empty directory, effectivly deleteing all files in the **destination** directory.
3. `>robocopy.exe C:\temp\empty C:\folder\to\delete\ /MIR`


1. Stop the server.
2. 

profile_root/wstemp
profile_root/temp
profile_root/logs
profile_root/tranlog