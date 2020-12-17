//封装一个选择器的方法
function $(selector) {
    return selector.substring(0, 1) == '.' ?
        document.getElementsByClassName(selector.substring(1)) :
        document.getElementById(selector.substring(1));
}
// 歌曲的信息
var musics = [
    {
        name: "Smile Like You Used To",
        author: "Tim Walker",
        path: "/music/Tim Walker - Smile Like You Used To.mp3",
        img: "http://p3.music.126.net/m9CkDd3lfcR4IFSbBGKq4w==/2542070883708394.jpg?param=34y34"
        
    },
    {
        name: "海阔天空",
        author: "beyond",
        path: "/music/海阔天空 (网络电影《九五2班》插曲)-Beyond.mp3",
        img: "https://p2.music.126.net/ghmbmEQS-IJfZPjdA3KGxg==/82463372084291.jpg?param=34y34"
    },
    {
        name: "光辉岁月",
        author: "beyond",
        path: "/music/光辉岁月 (电影《摆渡人》插曲)-Beyond.mp3",
        img: "https://p1.music.126.net/g4HWPlA6pqYixCw6pFZuLg==/109951165460311280.jpg?param=34y34"
    },
    {
        name: "真的爱你",
        author: "beyond",
        path: "/music/真的爱你 (电影《摆渡人》插曲)-Beyond.mp3",
        img: "https://p2.music.126.net/ghmbmEQS-IJfZPjdA3KGxg==/82463372084291.jpg?param=34y34"
    },
    {
        name: "后来的我们",
        author: "五月天",
        path: "/music/后来的我们-五月天.mp3",
        img: "http://p1.music.126.net/_B1Fn_Z1WxHzqGLzLZDf-w==/109951163263882447.jpg?param=34y34"
    },  {
        name: "Smile Like You Used To",
        author: "Tim Walker",
        path: "/music/Tim Walker - Smile Like You Used To.mp3",
        img: "http://p3.music.126.net/m9CkDd3lfcR4IFSbBGKq4w==/2542070883708394.jpg?param=34y34"
        
    },
    {
        name: "海阔天空",
        author: "beyond",
        path: "/music/海阔天空 (网络电影《九五2班》插曲)-Beyond.mp3",
        img: "https://p2.music.126.net/ghmbmEQS-IJfZPjdA3KGxg==/82463372084291.jpg?param=34y34"
    },
    {
        name: "光辉岁月",
        author: "beyond",
        path: "/music/光辉岁月 (电影《摆渡人》插曲)-Beyond.mp3",
        img: "https://p1.music.126.net/g4HWPlA6pqYixCw6pFZuLg==/109951165460311280.jpg?param=34y34"
    },
    {
        name: "真的爱你",
        author: "beyond",
        path: "/music/真的爱你 (电影《摆渡人》插曲)-Beyond.mp3",
        img: "https://p2.music.126.net/ghmbmEQS-IJfZPjdA3KGxg==/82463372084291.jpg?param=34y34"
    },
    {
        name: "后来的我们",
        author: "五月天",
        path: "/music/后来的我们-五月天.mp3",
        img: "http://p1.music.126.net/_B1Fn_Z1WxHzqGLzLZDf-w==/109951163263882447.jpg?param=34y34"
    },  {
        name: "Smile Like You Used To",
        author: "Tim Walker",
        path: "/music/Tim Walker - Smile Like You Used To.mp3",
        img: "http://p3.music.126.net/m9CkDd3lfcR4IFSbBGKq4w==/2542070883708394.jpg?param=34y34"
        
    },
    {
        name: "海阔天空",
        author: "beyond",
        path: "/music/海阔天空 (网络电影《九五2班》插曲)-Beyond.mp3",
        img: "https://p2.music.126.net/ghmbmEQS-IJfZPjdA3KGxg==/82463372084291.jpg?param=34y34"
    },
    {
        name: "光辉岁月",
        author: "beyond",
        path: "/music/光辉岁月 (电影《摆渡人》插曲)-Beyond.mp3",
        img: "https://p1.music.126.net/g4HWPlA6pqYixCw6pFZuLg==/109951165460311280.jpg?param=34y34"
    },
    {
        name: "真的爱你",
        author: "beyond",
        path: "/music/真的爱你 (电影《摆渡人》插曲)-Beyond.mp3",
        img: "https://p2.music.126.net/ghmbmEQS-IJfZPjdA3KGxg==/82463372084291.jpg?param=34y34"
    },
    {
        name: "后来的我们",
        author: "五月天",
        path: "/music/后来的我们-五月天.mp3",
        img: "http://p1.music.126.net/_B1Fn_Z1WxHzqGLzLZDf-w==/109951163263882447.jpg?param=34y34"
    }
]
//默认的设置
var musicindex = 0;
$("#palyer").src = musics[musicindex].path;
$(".m_name")[0].innerText = musics[musicindex].name;
$(".m-author")[0].innerText = musics[musicindex].author;
$(".music-num")[0].innerText=musics.length
$(".music-num-1")[0].innerText=musics.length
var totaltime = 0;
// $(".m-totaltime").innerText = "00:00";
var isplay = false;//给定一个默认的播放状态
//将时间转化为需要的格式
function contime(second) {
    var date = new Date(second * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    minu = ("0" + date.getMinutes()).slice(-2),
    sec = ("0" + date.getSeconds()).slice(-2);
    return minu + ":" + sec;
}
$(".palyer-paly")[0].onclick = function () { 
    totaltime = $("#palyer").duration;
    $(".m-totaltime")[0].innerText = contime(totaltime)
    if (!isplay) {
        $("#palyer").play();
        setInterval(() => {
            setBarCur();
        }, 500);
        isplay = true;
    } else {
        isplay = false;
        $("#palyer").pause();
    }
    changeplaystatus();
}
//修改播放按钮的状态
function changeplaystatus() {
    $("#palyer").oncanplay = function () {
        totaltime = $("#palyer").duration;
        $(".m-totaltime")[0].innerText = contime(totaltime)
    }
    $(".m-totaltime")[0].innerText = contime(totaltime)
    if (isplay) {
        $(".palyer-paly")[0].classList.add("palyer-paly-true");
    } else {
        $(".palyer-paly")[0].classList.remove("palyer-paly-true");
    }
}
// 切换音乐的方法
function switch_music(m_index) {
    $("#palyer").src = musics[m_index].path;
    $(".music-img")[0].src = musics[m_index].img;
    $("#palyer").oncanplay = function () {
        totaltime = $("#palyer").duration;
        $(".m-totaltime")[0].innerText = contime(totaltime)
    }
    $(".m_name")[0].innerText = musics[m_index].name;
    $(".m-author")[0].innerText = musics[m_index].author;
    $("#palyer").play();
    isplay = true;
    changeplaystatus();
}
// 上一首按钮
$(".palyer-pre")[0].onclick = function () {
    $("#palyer").currentTime=0;
    setBarCur()
    musicindex = --musicindex < 0 ? musics.length - 1 : musicindex;
    switch_music(musicindex);
}
// 下一首按钮
$(".palyer-next")[0].onclick = function () {
    musicmode();
}

// 上一首
function premusic() {
    musicindex = --musicindex < 0 ? musics.length - 1 : musicindex;
    switch_music(musicindex)
}
// 顺序下一首
function nextmusic() {
    musicindex = ++musicindex > musics.length - 1 ? 0 : musicindex;
    switch_music(musicindex)
}
// 随机下一首
function randommusic() {
    musicindex = Math.floor(Math.random() * (musics.length));
    switch_music(musicindex);
}
// 单曲循环
function singlemusic() {
    switch_music(musicindex)
}
var musicmode = randommusic;

// 进度条跟随
/*
首先获取进度条的长度
获取当前音乐播放的时长
总长
进度条的位置 = 获取当前音乐播放的时长/总长 *首先获取进度条的长度
*/
function setBarCur() {
    var prop = $("#palyer").currentTime / totaltime;
    var maxlength = $(".m-bar")[0].offsetWidth - 2;
    var musiccur = (prop).toFixed(4) * 100 + "%"
    $(".m-thistime")[0].innerText = contime($("#palyer").currentTime)
    $(".f-btn")[0].style.marginLeft = (prop * maxlength).toFixed(4) + "px";
    $(".music-cur")[0].style.width = musiccur;
    if ($("#palyer").currentTime == totaltime) {
        musicmode();
    }
}
// 点击指定位置，进度条跟随
$(".f-btn")[0].onmousedown = function (e) {
    // 拖拽音乐直接播放
    $("#palyer").play();
    isplay = true;
    changeplaystatus();
    // 获取总时间
    totaltime = $("#palyer").duration;
    // 鼠标按下并拖拽
    document.onmousemove = function (e) {
        var clickbar;
        if (e.screenX - $(".music-bar")[0].offsetLeft < 0) {
            clickbar = 0;
        } else if (e.screenX - $(".music-bar")[0].offsetLeft > $(".m-bar")[0].offsetWidth) {
            clickbar = $(".m-bar")[0].offsetWidth - 2;
        } else {
            clickbar = e.screenX - $(".music-bar")[0].offsetLeft;
        }
        // 设置小圆圈的位置
        $(".f-btn")[0].style.marginLeft = clickbar + "px";
        // 设置进度条的位置
        $(".music-cur")[0].style.width = clickbar + "px";
        // 设置音乐的当前播放时间
        $("#palyer").currentTime = clickbar / $(".m-bar")[0].offsetWidth * totaltime;
        //让进度条跳转
        setInterval(() => {
            setBarCur();
        }, 500);
    }
    document.onmouseup = function () {
        this.onmousedown = null;
        this.onmousemove = null;
    }
}
// 点击进度条音乐跳转指定位置
$(".m-bar")[0].onclick = function (e) {
    // 点击音乐直接播放
    $("#palyer").play();
    isplay = true;
    changeplaystatus();
    // 获取总时间
    totaltime = $("#palyer").duration;
    var clickbar;
    if (e.screenX - $(".music-bar")[0].offsetLeft < 0) {
        clickbar = 0;
    } else if (e.screenX - $(".music-bar")[0].offsetLeft > $(".m-bar")[0].offsetWidth) {
        clickbar = $(".m-bar")[0].offsetWidth - 2;
    } else {
        clickbar = e.screenX - $(".music-bar")[0].offsetLeft;
    }
    // 设置小圆圈的位置
    $(".f-btn")[0].style.marginLeft = clickbar + "px";
    // 设置进度条的位置
    $(".music-cur")[0].style.width = clickbar + "px";
    // 设置音乐的当前播放时间
    $("#palyer").currentTime = clickbar / $(".m-bar")[0].offsetWidth * totaltime;
    //让进度条跳转

    setInterval(() => {
        setBarCur();
    }, 500);
}
// 获取点击次数
var modeclick = 0;
$(".palyer-mode")[0].onclick = function () {
    modeclick++;
    // 循环播放
    if (modeclick % 3 == 1) {
        $(".palyer-mode")[0].classList.remove("palyer-mode-default");
        $(".palyer-mode")[0].classList.add("palyer-mode-cycle");
        musicmode = nextmusic;
    }
    //单曲循环
    else if (modeclick % 3 == 2) {
        $(".palyer-mode")[0].classList.remove("palyer-mode-cycle");
        $(".palyer-mode")[0].classList.add("palyer-mode-single");
        musicmode = singlemusic;

    }//随机播放
    else {
        $(".palyer-mode")[0].classList.remove("palyer-mode-single");
        $(".palyer-mode")[0].classList.add("palyer-mode-default");
        musicmode = randommusic;
    }

}
// 音量调节
$("#palyer").volume=0.5;
$(".volume-input")[0].oninput=function volumechange(){
    var aaaa = $(".volume-input")[0].value;
    $(".volume-input")[0].style.backgroundSize= aaaa+"%"+" 100%";
    $("#palyer").volume=(aaaa/100).toFixed(2);
}
var volumeclick=1;
$(".palyer-volume")[0].onclick = function hs(){
    if(volumeclick++%2==1){
        $(".volume-bar-bg")[0].style.visibility="visible";
    }else{
        $(".volume-bar-bg")[0].style.visibility="hidden";
    }
}
// 给音乐列表添加元素
for(var i = 0;i<musics.length;i++){
   var lis= document.createElement("li")
    $(".music-list-name")[0].appendChild(lis)
    for(var j =0;j<3;j++){
        var divs = document.createElement("div")
        document.querySelectorAll(".music-list-name li")[i].appendChild(divs)
    }
    document.querySelectorAll(".music-list-name li")[i].getElementsByTagName("div")[0].innerText=musics[i].name;
    document.querySelectorAll(".music-list-name li")[i].getElementsByTagName("div")[1].innerText=musics[i].author;
    // document.querySelectorAll(".music-list-name li")[i].getElementsByTagName("div")[2].innerText=musics[i].name;
}
// 给列表显示绑定点击事件
var listclick=1;
$(".music-num")[0].onclick = function hs(){
    if(listclick++%2==1){
        $(".music-list")[0].style.visibility="visible";
        $(".bg")[0].classList.add("bg-1");
    }else{
        $(".music-list")[0].style.visibility="hidden";
    }
}
for(var o = 0;o<musics.length;o++){
    (function(o){
    document.querySelectorAll(".music-list-name li")[o].onclick=function (){
    switch_music(o);
    }
    }(o));
}
// 给锁定按钮绑定事件
var lockclick=1;
$(".lock-btn")[0].onclick =function(){
    if(lockclick++%2==1){
        $(".bg")[0].classList.add("bg-1");
        $(".lock-btn")[0].style.backgroundPosition="-100px -400px";
    }else{
        $(".bg")[0].classList.remove("bg-1");
        $(".lock-btn")[0].style.backgroundPosition="-80px -380px";
    } 
}