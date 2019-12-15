console.log(1);
function gettingOffSpaces(){
    var txtValid = document.getElementById('controllingTextArea').value;
    if (/\S/.test(txtValid)) {
        var testText = document.getElementById('userLogin');
        console.log(controllingTextArea);
        console.log(userLogin);
        var date = new Date();
        var hline = document.createElement("div");
        hline.classList.add('hline');
        var div = document.createElement("div");
        div.classList.add('block');
        var divUser = document.createElement("div");
        divUser.classList.add('col-lg-2');
        var pred = document.createElement("div");
        pred.classList.add('pred');
        var mainText = document.createElement("div");
        mainText.classList.add('col-lg-10');
        var bottom = document.createElement("div");
        bottom.classList.add('bottom');
        var pUser = document.createElement("p");
        var pUserTime = document.createElement("p");
        var pUserDate = document.createElement("p");

        var pLogin = document.createTextNode("User");
        var pTime = document.createTextNode(date.getHours()+":"+date.getMinutes()+":"+date.getSeconds());
        var pDate = document.createTextNode(date.getDate() +"."+(date.getMonth()+1)+"."+date.getFullYear());
        var para = document.createElement("p");

        var node = document.createTextNode(txtValid);

        var line = document.createElement("div");
        line.classList.add('hline');

        para.classList.add('coment');
        mainText.appendChild(para);
        para.appendChild(node);
        var element = document.getElementById("coments");
        pUser.appendChild(pLogin);
        pUserTime.appendChild(pTime);
        pUserDate.appendChild(pDate);
        pred.appendChild(pUser);
        pred.appendChild(pUserTime);
        pred.appendChild(pDate);
        divUser.appendChild(pred);
        div.appendChild(divUser);
        div.appendChild(mainText);
        div.appendChild(bottom);
        // div.appendChild(line);
        element.appendChild(div);
        // pUser.appendChild(pLogin);
        // pUserTime.appendChild(pTime);
        // pUserDate.appendChild(pDate);
        // para.appendChild(node);
        // var element = document.getElementById("coments");
        // divUser.appendChild(pUser);
        // divUser.appendChild(pUserTime);
        // divUser.appendChild(pUserDate);
        // mainText.appendChild(para);
        // pred.appendChild(mainText);
        // divUser.appendChild(pred);
        // div.appendChild(divUser);
        // div.appendChild(para);
        // element.appendChild(div);



   }
   document.getElementById('form').reset();
    
}





