window.onload = function(){
  var oWrap = document.getElementById("wrap"),
      oImgs = oWrap.getElementsByTagName("img");

  document.onmousemove = function(ev){
    var ev = ev||window.event;
    for (var i = 0; i < oImgs.length; i++) {
      var x = oImgs[i].offsetLeft+oImgs[i].offsetWidth/2+oWrap.offsetLeft;
      var y = oImgs[i].offsetTop+oImgs[i].offsetHeight/2+oWrap.offsetTop;
      var a = ev.clientX - x,
          b = ev.clientY - y,
          c = Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
      var scale = 1-c/300;
      if(scale<0.6){
        scale = 0.6;
      }

      oImgs[i].style.width = scale*100 + 'px';
      oImgs[i].style.height = scale*100 + 'px';
    }
  }
}
