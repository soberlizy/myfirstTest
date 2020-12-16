 //   创建图片和背景的数组
 var imglist=[
     ["http://p1.music.126.net/kTrKiEURddarIEoDKYOwWA==/109951165528290386.jpg?imageView&quality=89"],
     ["http://p1.music.126.net/vofJSatUOm88E2NHtSnovQ==/109951165537605415.jpg?imageView&quality=89"],
     ["http://p1.music.126.net/AaeF99qPWALAr4y_Y11TfQ==/109951165539819938.jpg?imageView&quality=89"],
     ["http://p1.music.126.net/TAIZcsxsP4_woeriwMNR4Q==/109951165539975878.jpg?imageView&quality=89"],
     ["http://p1.music.126.net/stZxwKU7X5FBcmB2uJXuaA==/109951165540888053.jpg?imageView&quality=89"],
     ["http://p1.music.126.net/7AQR8rnStD5Hgu6_n12sqA==/109951165540302472.jpg?imageView&quality=89"],
     ["http://p1.music.126.net/AaeF99qPWALAr4y_Y11TfQ==/109951165539819938.jpg?imageView&quality=89"],
     ["http://p1.music.126.net/dAL7PsAhV85t0Uwk63hrDw==/109951165539765762.jpg?imageView&quality=89"],
     ["http://p1.music.126.net/kTrKiEURddarIEoDKYOwWA==/109951165528290386.jpg?imageView&quality=89"],
     ["http://p1.music.126.net/8tI6FrHD51T1kw90BapSwQ==/109951165540314347.jpg?imageView&quality=89"],
 ]
 var imgsbg=[
     ["http://p1.music.126.net/kTrKiEURddarIEoDKYOwWA==/109951165528290386.jpg?imageView&blur=40x20"],
     ["http://p1.music.126.net/vofJSatUOm88E2NHtSnovQ==/109951165537605415.jpg?imageView&blur=40x20"],
     ["http://p1.music.126.net/AaeF99qPWALAr4y_Y11TfQ==/109951165539819938.jpg?imageView&blur=40x20"],
     ["http://p1.music.126.net/TAIZcsxsP4_woeriwMNR4Q==/109951165539975878.jpg?imageView&blur=40x20"],
     ["http://p1.music.126.net/stZxwKU7X5FBcmB2uJXuaA==/109951165540888053.jpg?imageView&blur=40x20"],
     ["http://p1.music.126.net/7AQR8rnStD5Hgu6_n12sqA==/109951165540302472.jpg?imageView&blur=40x20"],
     ["http://p1.music.126.net/AaeF99qPWALAr4y_Y11TfQ==/109951165539819938.jpg?imageView&blur=40x20"],
     ["http://p1.music.126.net/dAL7PsAhV85t0Uwk63hrDw==/109951165539765762.jpg?imageView&blur=40x20"],
     ["http://p1.music.126.net/kTrKiEURddarIEoDKYOwWA==/109951165528290386.jpg?imageView&blur=40x20"],
     ["http://p1.music.126.net/8tI6FrHD51T1kw90BapSwQ==/109951165540314347.jpg?imageView&blur=40x20"],
 ]
 //获取标签
 var imgs = document.querySelector(".rotation-img")
 var imgsbackground=document.querySelector(".banner")
 var icons = document.querySelectorAll(".rotation-icon")
 // 设置一个计时器
var timer;
var m = 0;
//默认的第一张图
imgs.src=imglist[m]
imgsbackground.style.backgroundImage="url("+imgsbg[m]+")"
run();
function run(){
    timer = setInterval(() => {
    m = m == 10?0:m;
    changeimg(m);
    changeicon(m);
    m++;
}, 2000);
}
//改变图片以及背景
function changeimg(m) {
    imgs.src = imglist[m];
    imgsbackground.style.backgroundImage="url("+imgsbg[m]+")"
}
//更改图标
function changeicon(m) {
    for (var i = 0; i < icons.length; i++) {
        icons[i].classList.remove("icons-this");
    }
    icons[m].classList.add("icons-this")
}
 ///给图片绑定鼠标移入事件
 imgs.onmouseover=function (){
    clearInterval(timer);
}
imgs.onmouseout=function(){
    run();
};
 //给小图标鼠标移出移出事件
 for (var i = 0; i < icons.length; i++) {
     //闭包解决i的问题
   (function (i) {
    icons[i].onmouseover = function () {
        clearInterval(timer);
        changeimg(i);
        changeicon(i);
      };
      icons[i].onmouseout = function () {
        run();
      };
   })(i);
 }
//上一张和下一张按钮绑定事件
var prebtn = document.querySelector(".click-l");
var nextbtn = document.querySelector(".click-r");

//鼠标移入按钮范围 就停止轮播，移出继续
prebtn.onmouseover=function (){
    clearInterval(timer);
}
prebtn.onmouseout=function(){
    run();
};
nextbtn.onmouseover=function (){
    clearInterval(timer);
}
nextbtn.onmouseout=function(){
    run();
};
//点击事件
prebtn.onclick=function pre(){
    m--;
    m = m==-1?9:m
    changeimg(m)
    changeicon(m)
}
nextbtn.onclick=function next(){
    m++;
    m = m==10?0:m
    changeimg(m)
    changeicon(m)
}
/*轮播图的js完结 */


