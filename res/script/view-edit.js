var viewandeditbtn = document.querySelector(".header__item-button-edit")
var Skilladdbtn = document.querySelector(".skills-edit")
var EXPaddbtn = document.querySelector(".EXP-edit")
var EXPDelete = document.querySelectorAll(".Ex-remove")
var EXPlist = document.querySelector(".Exp__list")


for (var i = 0;i < EXPDelete.length; i++){
    EXPDelete[i].setAttribute("onclick","xoa(this)")
}

function xoa(x){
    var lay = x.parentElement.parentElement
    lay.remove()
}

function edittrue(){ /*khi o che do edit*/
    var usname = document.querySelector(".User-name")
    var usinfo = document.querySelector(".User-name-info")
    var uslocation = document.querySelector(".User-name-loation")
    var Userinfo = document.querySelector(".User-infos")
    Userinfo.setAttribute("contenteditable","true")
    usname.setAttribute("contenteditable","true")
    usinfo.setAttribute("contenteditable","true")
    uslocation.setAttribute("contenteditable","true")
    Skilladdbtn.style.display = "block"
    EXPaddbtn.style.display = "block"
}


function editfalse(){ /*khi o che do view*/
    var usname = document.querySelector(".User-name")
    var usinfo = document.querySelector(".User-name-info")
    var uslocation = document.querySelector(".User-name-loation")
    var Userinfo = document.querySelector(".User-infos")
    Userinfo.setAttribute("contenteditable","false")
    usname.setAttribute("contenteditable","false")
    usinfo.setAttribute("contenteditable","false")
    uslocation.setAttribute("contenteditable","false")
    Skilladdbtn.style.display = "none"
    EXPaddbtn.style.display = "none"

}

viewandeditbtn.onclick = function(){ /*xu ly chuyen doi giua 2 che do*/
    viewandeditbtn.classList.toggle("header__item-button-thisedit")
    if (viewandeditbtn.classList.contains("header__item-button-edit" && "header__item-button-thisedit")) {
        viewandeditbtn.innerHTML = "Edit mode"
        edittrue()
    }
    else if (!viewandeditbtn.classList.contains("header__item-button-edit" && "header__item-button-thisedit")){
        viewandeditbtn.innerHTML = "View mode"
        editfalse()

        /*khi ấn đổi chế độ thì sẽ đóng tắt cả cửa sổ phụ*/

        document.querySelector(".skills-edit-windows").style.display = "none"
        Skilladdbtn.classList.remove("skills-add")

        document.querySelector(".EXP-edit-windows").style.display = "none"
        EXPaddbtn.classList.remove("EXP-edit-on-add")

    }
}






Skilladdbtn.onclick = function(){ /*bật cửa sổ edit skills*/
    var Skilldad = document.querySelector(".profile__skills__item__list")
    
    Skilladdbtn.classList.toggle("skills-add")

    if(Skilladdbtn.classList.contains("skills-edit" && "skills-add")){
        document.querySelector(".skills-edit-windows").style.display = "flex"

        document.querySelector(".EXP-edit-windows").style.display = "none"
        EXPaddbtn.classList.remove("EXP-edit-on-add")
        
    }
    else if(!Skilladdbtn.classList.contains("skills-edit" && "skills-add")){
        document.querySelector(".skills-edit-windows").style.display = "none"
    }
}
EXPaddbtn.onclick = function(){ 
    /*bật cửa sổ edit EXP*/

    EXPaddbtn.classList.toggle("EXP-edit-on-add")

    if (EXPaddbtn.classList.contains("EXP-edit" && "EXP-edit-on-add")) {
        document.querySelector(".EXP-edit-windows").style.display = "flex"

        document.querySelector(".skills-edit-windows").style.display = "none"
        Skilladdbtn.classList.remove("skills-add")
    }
    else if (!EXPaddbtn.classList.contains("EXP-edit" && "EXP-edit-on-add")){
        document.querySelector(".EXP-edit-windows").style.display = "none"
    }

}

var inputEXPadd = document.querySelectorAll(".input__EXPadd")
var inputEXPbutton = document.querySelector(".EXP_edit-addbutton")

inputEXPbutton.onclick = function() { /*Xử lý thêm dữ liệu cho EXP */

    var html = ''
    html += `    <li class="Exp_list_item">
    <div style="display:flex;justify-content:space-between">
        <h2 style="display:inline">
            ${inputEXPadd[0].value}
        </h2>
        <div style="cursor:pointer;display:inline;font-size: 1.4rem; color:red" class="Ex-remove" onclick = "xoa(this)">Xóa</div>
    </div>
    
    <div>
        <h3>
            ${inputEXPadd[1].value}
        </h3>
        <h3>
            ${inputEXPadd[2].value}
        </h3>
    </div>
</li>`

    EXPlist.innerHTML = EXPlist.innerHTML += html

    
}


var a = 1
var b = 1
for (var i = 0; i < 100;i++){
console.log( b + "+" + a + "=" + `${b += a}`)
}