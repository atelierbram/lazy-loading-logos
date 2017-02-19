/*
 * http://blog.simonwillison.net/post/57956760515/addloadevent
 * http://www.sitepoint.com/closures-and-executing-javascript-on-page-load/
 */
function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
}
