window.onload = function () {
    //单击响应函数
    function myOnclick(idStr, fun) {
        var element = document.getElementById(idStr);
        element.onclick = fun;
    }

    var city = document.getElementById("city");
    //1、创建一个“广州”节点，添加到#city下
    myOnclick("btn1", function () {

        //创建gz节点
        var gzLi = document.createElement("li");
        //创建广州文本
        var gzText = document.createTextNode("广州");
        //gzLi.innerHTML = "广州";
        gzLi.appendChild(gzText);
        city.appendChild(gzLi);
    });
    //2、将广州节点插入到#bj前面
    myOnclick("btn2", function () {
        //创建gz节点
        var gzLi = document.createElement("li");
        //创建广州文本
        var gzText = document.createTextNode("广州");
        gzLi.appendChild(gzText);
        var bj = document.getElementById("bj");
        city.insertBefore(gzLi, bj);
    });
    //3、使用“广州”节点替代#bj节点
    myOnclick("btn3", function () {
        //创建gz节点
        var gzLi = document.createElement("li");
        //创建广州文本
        var gzText = document.createTextNode("广州");
        gzLi.appendChild(gzText);
        var bj = document.getElementById("bj");
        city.replaceChild(gzLi, bj);
    });
    //4、删除#bj节点
    myOnclick("btn4", function () {
        var bj = document.getElementById("bj");
        bj.parentNode.removeChild(bj);
    });
    //5、读取#city内的HTML代码
    myOnclick("btn5", function () {
        alert(city.innerHTML);
    });
    //6、设置#bj内的HTML代码
    myOnclick("btn6", function () {
        var bj = document.getElementById("bj");
        bj.innerHTML = "燕京";
    })
};
