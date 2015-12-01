---
layout: post
title: Finding Duplicates in SQL
date: '2012-01-10T10:59:00-06:00'
categories:
- Dev
tags:
- SQL
---

I often need to check for duplicates in SQL and find myself coming back to [Pete Freitag's post](http://www.petefreitag.com/item/169.cfm) on the subject.

## Example
```sql
SELECT email, COUNT(email) AS NumOccurrences
FROM users
GROUP BY email
HAVING ( COUNT(email) > 1 )
```

To find near duplicates check out [Sql Remove Almost Duplicate Rows](http://stackoverflow.com/questions/4566591/sql-remove-almost-duplicate-rows) on Stackoverflow. 
There are three different approaches to finding rows that only slightly different, where the data only varies in a few columns.
