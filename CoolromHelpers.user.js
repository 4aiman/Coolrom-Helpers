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
            div.href = "javascript:void(window.open('/dlpop.php?id="+sublink+"', 'filedownload', 'height=560,width=700,status=no,scrollbars=no,toolbar=no,menubar=no,location=no,resizable=no'));"
        }
    }

})();
