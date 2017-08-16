window.onload = function () {
    var checkAllBox = document.getElementById("checkAllBox");
    //获取多选框
    var items = document.getElementsByName("items");
    //单击响应函数
    function myOnclick(idStr, fun) {
        var element = document.getElementById(idStr);
        element.onclick = fun;
    }
    function checkIfAllChecked() {
        checkAllBox.checked = true;
        for(var i =0; i < items.length; i++){
            if(!items[i].checked){
                checkAllBox.checked = false;
                break;
            }
        }
    }

    //1、全选按钮
    myOnclick("checkAllBtn", function () {
        for(var i =0; i < items.length; i++){
            items[i].checked = true;
        }
        checkAllBox.checked = true;
    });
    //2、全不选按钮
    myOnclick("checkNoBtn", function () {
        for(var i =0; i < items.length; i++){
            items[i].checked = false;
        }
        checkAllBox.checked =false;
    });
    //3、反选
    myOnclick("checkRevBtn",function () {
        checkAllBox.checked = true;
        for(var i =0; i < items.length; i++){
            items[i].checked = !items[i].checked;
            if(!items[i].checked){
                checkAllBox.checked = false;
            }
        }
    });
    //4、提交
    myOnclick("sendBtn", function () {
        for(var i =0; i < items.length; i++){
            if(items[i].checked){
                alert(items[i].value)
            }
        }
    });
    //5、全选/全不选多选框
    myOnclick("checkAllBox", function () {
        for(var i =0; i < items.length; i++){
            items[i].checked = this.checked;
        }
    });
    //6、items
    for(var i =0; i < items.length; i++){
        items[i].onclick = checkIfAllChecked;
    }

    document.getElementById("all").onclick = function () {
        alert(document.all.length);
        for(var i = 0; i < document.all.length; i++){
            alert(document.all[i].innerHTML);
        }
    };
    document.getElementById("box").onclick = function () {
        var box = document.querySelectorAll(".box");
        alert(box.length);
        for(var i = 0; i < box.length; i++){
            alert(box[i].innerHTML);
        }
    };
};
