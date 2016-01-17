/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            /* Check allFeeds array is defined */
            expect(allFeeds).toBeDefined();
            /* Check allFeeds array length is not 0*/
            expect(allFeeds.length).not.toBe(0);
        });
        /* Test loops through each feed in the allFeeds object
         * and ensures it has a URL defined and that the URL is not empty.
         */
        it('all feeds have a URL', function() {
            for (var i = 0; i < allFeeds.length; ++i) {
                /* Check the url in allFeeds array is defined for all feeds*/
                expect(allFeeds[i].url).toBeDefined();
                /* Check the url in allFeeds array is not empty string for all feeds*/
                expect(allFeeds[i].url).not.toEqual('');
            }
        });


        /* Test loops through each feed in the allFeeds object and
         * ensures it has a name defined and that the name is not empty.
         */

        it('all feeds have a Name', function() {
            for (var i = 0; i < allFeeds.length; ++i) {
                /*Check all the feeds in the allFeeds array have a name */
                expect(allFeeds[i].name).toBeDefined();
                /*Check all the feeds in the allFeeds array have a name that is not empty string */
                expect(allFeeds[i].name).not.toEqual('');
            }
        });
    });


    /* Test suite named "The menu" */
    describe('The menu', function() {

        /* Test below ensures the menu element is
         * hidden by default.
         */
        it('Menu is hidden by default', function() {
            /* Check the body has the menu-hidden div class which hides the menu */
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });
         /* Test below ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * has two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('Menu visibility toggles when clicked on the menu icon', function() {
            /* Trigger a menu icon click*/
            $('.menu-icon-link').trigger('click');
            /* Check the body does not have div classes */
            expect($('body').hasClass('menu-hidden')).toBeFalsy();

            /* Trigger a menu icon click*/
            $('.menu-icon-link').trigger('click');
            /* Check the body contains the menu-hidden div class */
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });
    });
    /* A new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
 
        /* Invoke the loadFeed function to load the feed list of Udacity Blog */
        beforeEach( function(done) {
            loadFeed(0, done);
        });

        /* Below test ensures when the loadFeed function is called 
         * and completes its work, there is at least
         * a single .entry element within the .feed container.
        */
        it('loadFeed should result in atleast one entry', function(){
            /* Determine the number of .entry-link DOM elements */
            var entryLinksLength = $(".entry-link").length;

            /* Check the above length is not 0*/
            expect(entryLinksLength).toBeGreaterThan(0);
        });
    });

    /* A new test suite named "New Feed Selection"*/
    describe('New Feed Selection', function() {
        var feedText1;
        var feedText2;

        /* Invoke the loadFeed function to load the feed list of CSS Tricks, save the href links for
         * .entry-link DOM elements  followed by that invoke the loadFeed function to load the feed 
         * list for HTML5 Rocks*/
        beforeEach(function(done) {
            loadFeed(1, function() {
                feedText1 = $('.feed').text(); 
                loadFeed(2, function() {
                   /* Now that feed for HTML5 rocks is loaded, obtain all the href links 
                   * for .entry-link DOM elements 
                   */
                   feedText2 = $('.feed').text();;
                   done();
                });
            });
        });

        /* Test ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        it('New feed is loaded when loadFeed is called with a different feed source', function() {
            /* check the two href links should not match*/
            expect(feedText2).not.toEqual(feedText1);
        });
    });

    /* Additional Tests */
    /* A new test suite named "Header Title"*/
    describe('Header Title', function() {
        var headerTitle;

        /* Invoke the loadFeed function to load data for Linear Digressions*/
        beforeEach( function(done) {
            loadFeed(3, function() {
                /* Obtain the header title shown on the page*/
                headerTitle = $('.header-title').text();
                done();              
            });

        });

        it('Header Title Changes when menu item is selected', function() {
           /* Ensure the header title displayed matches the name in the allFeeds array */
           expect(headerTitle).toEqual(allFeeds[3].name);
        });
    });

    describe('Menu items', function() {

        it('Menu selection shows all the four feeds', function() {
            /* click on the menu icon */
            $('.menu-icon-link').trigger('click');

            /* check the names shown for menu selection match the names in the all Feeds array */
            for (var i = 0; i < $('.feed-list a').length; ++i) {
               var menuItem = $('.feed-list a').eq(i).text();
               expect(menuItem).toEqual(allFeeds[i].name);
            }
            /* This step is only for the purpose of hiding the menu list */
            /* This is not needed for the test to pass */
            $('.menu-icon-link').trigger('click');
        });
    });
}());

