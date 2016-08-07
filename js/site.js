//
// Bourbon Refills Navigation (http://refills.bourbon.io/#er-toc-id-13)
//
/*
The MIT License (MIT)

Copyright © 2014–2015 thoughtbot, inc.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
*/

$(window).resize(function () {
    var more = document.getElementById("js-navigation-more");
    if ($(more).length > 0) {
        var windowWidth = $(window).width();
        var moreLeftSideToPageLeftSide = $(more).offset().left;
        var moreLeftSideToPageRightSide = windowWidth - moreLeftSideToPageLeftSide;

        if (moreLeftSideToPageRightSide < 330) {
            $("#js-navigation-more .submenu .submenu").removeClass("fly-out-right");
            $("#js-navigation-more .submenu .submenu").addClass("fly-out-left");
        }

        if (moreLeftSideToPageRightSide > 330) {
            $("#js-navigation-more .submenu .submenu").removeClass("fly-out-left");
            $("#js-navigation-more .submenu .submenu").addClass("fly-out-right");
        }
    }
});

$(document).ready(function () {
    var menuToggle = $("#js-mobile-menu").unbind();
    $("#js-navigation-menu").removeClass("show");

    menuToggle.on("click", function (e) {
        e.preventDefault();
        $("#js-navigation-menu").slideToggle(function () {
            if ($("#js-navigation-menu").is(":hidden")) {
                $("#js-navigation-menu").removeAttr("style");
            }
        });
    });
}); 