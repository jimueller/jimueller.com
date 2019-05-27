+++
categories = ["dev"]
tags = ["extjs","sencha"]
date = "2017-03-03T08:02:21-06:00"
title = "ExtJS Learning Resources"
+++

Learning ExtJS can be a bit of a challange since, although it is well documented, there seems to be less "real world" examples available.  Since ExtJS has become more focused on the enterprise, there is less activity on typical Q&A platforms like Stack Overflow.  Finally, ExtJS has made major changes in its last few releases which leaves many of the examples available badly outdated.

The good news is that there some great resources available for learning ExtJS, in addition to Sencha's documentation.  Some are free, but those that aren't free are still pretty cheap for what you get.

# Books

**Sencha Ext JS 6 Bootcamp in a Book: Classic Toolkit Edition** [Amazon](http://a.co/29HVuqp) by Steve Drucker of [Fig Leaf](https://www.figleaf.com/) is in my opinion the best, most cost-effective resource available for learning ExtJS.  The book is about $60 and is basically the student guide for a weeklong course on ExtJS.  The previous version of the book, covering ExtJS 5 is [still available for on $25](http://a.co/41zr5y4), and for learning ExtJS fundamentals there is no major differences.  I consider this book to be the equivelent of classes provided by Sencha, which can cost more than a $1000.

The book covers everything you need to build ExtJS applications if you have no ExtJS experience.  There are no gaps for a beginner and even if you have ExtJS experience it is a great way to get the complete picture of building and app and filling in any gaps you may have.  The book does have some examples of creating custom components, but it does not go in depth on more advanced ExtJS topics.  If you are strictly looking for advanced ExtJS, this is not the best book for you.

# ExtJS Documentation


The **Sencha ExtJS documentation** is really good but in many cases you really have to know what you are looking for.  Like most SDK/API documentation, it is not going always tell you how to accomplish your goal. I've used the following practices to get the most out of the ExtJS docs.

- Skim through all of the docs files to get an idea of what is available
- Use the search functionality and look for synonyms when trying to find specific events, methods, or properties
- View the source to view JSDuck comments that may be missing from the new docs site

To learn ExtJS, I spend a significant amount of time reading the docs to understand what classes were available and their purpose.  I try to take a "when in Rome" approach when using frameworks, so in an ExtJS project, I will try to find the ExtJS way of doing things.  By browsing the docs, I was able to have an idea of what framework classes could be used to accomplish a goal without resorting to using another framework like jQuery or writing my own function.  Ext has many utility classes and methods on the Ext object that can do just about anything jQuery can do, and has functions for formatting or manipulating  text.  ExtJS is a large framework and there are no shortcuts for understanding what it provides.

When looking for a specific method, event, or property, it's useful to use the search/filter tool.  Ext is pretty consistent on naming, but often it's necessary to search for synonyms.  For example, if you are looking for the control of a component's visibility, try searching for "visible, hidden, hide, show" so that you don't overlook one of the class's members.

When Sencha switched the docs site in late 2016, the new version has had trouble parsing out the JSDuck comments used in ExtJS source code.  This seems to be expecially true for inherited docs.  To 
