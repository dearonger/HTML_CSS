$(function() {
  /*初始化fullpage组件*/
  /*1.设置每一个屏幕的背景颜色*/
  /*2.设置屏幕内容的对齐方式  默认是垂直居中的  改成顶部对齐*/
  /*3.设置导航 设置指示器 点容器*/
  /*4.监听进入某一屏的时候 回调*/
  $(".container").fullpage({
    /*配置参数*/
    sectionsColor: [
      "#fadd67",
      "#84a2d4",
      "#ef674d",
      "#ffeedd",
      "#d04759",
      "#84d9ed",
      "#8ac060"
    ],
    scrollingSpeed: 1000,
    verticalCentered: false,
    navigation: true,
    afterLoad: function(link, index) {
      /*index 序号 1开始  当前屏的序号*/
      $(".section")
        .eq(index - 1)
        .addClass("now");
    },
    onLeave: function(index, nextindex, direction) {
      if (index === 2 && nextindex == 3) {
        $(".section")
          .eq(index - 1)
          .addClass("leaved");
      }
      if (index === 3 && nextindex == 4) {
        $(".section")
          .eq(index - 1)
          .addClass("leaved");
      }
    },
    /*jquery插件初始的时候封装这个方法*/
    /*1.回想jquery插件的封装 $.fn.fullpage = function(){} */
    /*2.jquery本身没有的方法通过$.fn的方式追加方法  认为是插件方法*/
    /*3.例如：$.fn.src = function(){ return this.attr('src') } this 你选择谁this（jquery对象）指向谁 */
    /*点击更多切换下一页*/
    afterRender: function() {
      $(".move").on("click", function() {
        $.fn.fullpage.moveSectionDown = function() {};
      });
    }
  });
});
