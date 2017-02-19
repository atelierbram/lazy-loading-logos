function loadImg(){
  var imgDefer = document.querySelectorAll('[data-src]')
    for (var i=0; i<imgDefer.length; i++) {
      if(imgDefer[i].getAttribute('data-src')){imgDefer[i].setAttribute('src',imgDefer[i].getAttribute('data-src'));
      }
    }
}
addLoadEvent(loadImg);
