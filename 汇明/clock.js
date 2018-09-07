$(document).ready(function(){
    function displayTime() {
        var elt = document.getElementById("clock"); // 通过id= "clock"找到元素
        var now = new Date(); // 得到当前时间
        elt.innerHTML = now.toLocaleTimeString(); //让elt来显示它
        setTimeout(displayTime,1000); //在1秒后再次执行
    }

    function displayDay() {
        var now = new Date(); // 得到当前时间
        document.getElementById("day").innerHTML = now.toLocaleDateString();
        setTimeout(displayDay,1000); //在1秒后再次执行
    }

    window.onload = displayTime; //当onload事件发生时开始显示时间
    displayDay();
});