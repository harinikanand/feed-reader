Project Name: Feed reader testing

Author: Harini Anand

Date: 01/11/2016

Prerequisites:
==============
1. Download this project (Feed reader) from github
URL: https://github.com/harinikanand/feed-reader.git

Instructions to view the Neighborhood Map:
=========================================
1. Open the folder containing the project
2. Locate the index.html file in the folder
3. Double click on the index.html 
4. Alternately, you could also open a google chrome browser 
and drag and drop the index.html in the folder on to it.

The page in addition to displaying the UdaciFeed html page
would also run 9 jasmine specs.

The Jasmine tests run are:
=========================

Test suite name: RSS Feeds
  1. are defined
  2. all feeds have a URL
  3. all feeds have a Name

Test suite name: The menu
  4. Menu is hidden by default
  5. Menu visibility toggles when clicked on the menu icon

Test suite name: Initial Entries
  6. loadFeed should result in atleast one entry

Test suite name: New Feed Selection
  7. New feed is loaded when loadFeed is called with a different feed source

Additional Tests:  
================
I. Test suite name: Header Title
================================
Test name: Header Title Changes when menu item is selected

Description: The purpose of this test is to check that when user selects a particular feed in the menu, the header title changes to match the corresponding name in the allFeeds array.

The test is run using "Linear Digressions" (index 3 in allFeeds array)

II. Test suite name: Menu items
===============================
Test name: Menu selection shows all the four feeds

Description: The purpose of this test is to check that when user selects the menu icon to open the menu side bar , all the four feed selection names are shown.
