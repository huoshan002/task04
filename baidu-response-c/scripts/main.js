"use strict";

var morebtn = document.getElementById("more_btn");
var sidebar = document.getElementById("sidebar");
if (morebtn.addEventListener) {
    morebtn.addEventListener('mouseover', function () {
        sidebar.style.display = 'block';
    });
    sidebar.addEventListener('mouseleave', function () {
        sidebar.style.display = 'none';
    });
} else {
    morebtn.attachEvent('onmouseover', function () {
        sidebar.style.display = 'block';
    });
    sidebar.attachEvent('onmouseleave', function () {
        sidebar.style.display = 'none';
    });
}