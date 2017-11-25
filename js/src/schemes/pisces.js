$(document).ready(function () {
  var $headerInner = $('.header-inner');
  var $sidebar = $('#sidebar');
  var getSidebarTop = function(){
    return $headerInner.height() + CONFIG.sidebar.offset;
  };
  var setSidebarMarginTop = function(sidebarTop){
    return $sidebar.css({ 'margin-top': sidebarTop });
  };
  var mql = window.matchMedia('(min-width: 991px)');
  setSidebarMarginTop(getSidebarTop()).show();
  mql.addListener(function(e){
    if(e.matches){
      setSidebarMarginTop(getSidebarTop());
    }
  });

  $(document).ready(function(){
    $('.tag-cloud-tags a').each(function(){
      var rn =Math.floor(Math.random()*180);
      var rdcolor = `rgb(${rn},${rn},${rn})`;
      var rdsize =Math.floor(12 + Math.random()*20);
      this.style.fontSize = rdsize+'px';
      this.style.color = rdcolor;
      this.style.borderBottomColor = rdcolor;
    })
  })

});
