window.onload = function () {
    //1、点击delete删除
    var allA = document.getElementsByTagName("a");
    for(var i = 0; i < allA.length; i++){
        allA[i].onclick = function () {
            var thisGrand = this.parentNode.parentNode;
            var name = thisGrand.getElementsByTagName("td")[0].innerHTML;
            if(confirm("确认要删除" + name + "吗？"))
                thisGrand.parentNode.removeChild(thisGrand);
            }
        }

    //2、点击submit后添加员工信息到表格
    //①单击按钮响应函数
    var submit = document.getElementById("addEmpButton");
    submit.onclick = function () {
        //②获取文本框内容
        var newName = document.getElementById("empName").value;
        var newEmail = document.getElementById("empEmail").value;
        var newSalary = document.getElementById("empSalary").value;

        if(newName === ""){
            alert("姓名不能为空");
        }
        if(newName === ""){
            alert("邮箱不能为空")
        }
        if(newName === ""){
            alert("薪水不能为空")
        }
        if(!(newName === ""&&newName === ""&&newName === "")){
            //③创建tr
            var tr = document.createElement("tr");
            //④创建四个td
            var nameTd = document.createElement("td");
            var emailTd = document.createElement("td");
            var salaryTd = document.createElement("td");
            var delTd = document.createElement("td");
            //⑥创建A
            var a = document.createElement("a");
            a.innerHTML = "delete";
            a.href = "javascript:";
            a.onclick = function () {
                var thisGrand = this.parentNode.parentNode;
                var name = thisGrand.getElementsByTagName("td")[0].innerHTML;
                if(confirm("确认要删除" + name + "吗？"))
                    thisGrand.parentNode.removeChild(thisGrand);
            };
            nameTd.innerHTML = newName;
            emailTd.innerHTML = newEmail;
            salaryTd.innerHTML = newSalary;
            //⑦把a添加到delTd
            delTd.appendChild(a);
            tr.appendChild(nameTd);
            tr.appendChild(emailTd);
            tr.appendChild(salaryTd);
            tr.appendChild(delTd);

            var employeeTable = document.getElementById("employeeTable");
            var tbody = employeeTable.getElementsByTagName("tbody")[0];
            tbody.appendChild(tr);
        }
    }
};