// ==UserScript==
// @name         Coolrom Helpers
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://coolrom.com.au/roms/*
// @include      http://coolrom.com.au/dlpop.php*
// @grant        none
// ==/UserScript==


(function() {
    'use strict';
    console.log("Working with "+window.location.href);
    if (typeof time !== 'undefined') {
        time = 0;
    }
    // Your code here...

    var divs = document.getElementsByClassName("download_link");
    var i;
    var swap1;
    for (i = 0; i < divs.length; i++) {
        var div = divs[i];
        var link = div.href;
        var sub = "downloader.php?";
        if (link.indexOf(sub) !== -1){
            var sublink = link.substr(link.indexOf('=')+1);
            var href = "/dlpop.php?id="+sublink;
            div.href="javascript:void();"
            div.onclick = function(){
                var element = document.createElement("iframe");
                element.setAttribute('id', 'myframe');
                element.src = href;
                document.body.appendChild(element);
                element.style.display="none";
                element.style.position="absolute";
            };

        }
    }

    function download2() {
        var selectForm = document.forms[0];
        if (window.location.href.indexOf("dlpop.php") !== -1) {
            var link = window.location.href;
            var sublink = link.substr(link.indexOf('=')+1);
            var url = "http://coolrom.com.au/downloader.php?id="+sublink;
            if (typeof selectForm !== 'undefined') {
                selectForm.submit();
                console.log("downloading...");
            } else {
                setTimeout(download2,1000);
                console.log("waiting...");
            }
        }
	}

    download2();
})();
