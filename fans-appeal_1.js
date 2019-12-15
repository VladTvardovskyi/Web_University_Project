console.log(1);

document.addEventListener('DOMContentLoaded', function(){
    let allAppeals = [];

    document.getElementById("send").addEventListener("click", addAppeal);
    window.addEventListener("online", function (event) {
        provider.get("appeals", (appeals) => {
            if(appeals){
                allAppeals = appeals;
            }
            sendAppealsToServer(allAppeals);
            showAllAppeals(allAppeals);
            provider.remove("appeals");
            allAppeals = [];
        });
    });

function addAppeal() {
    var txtVal = document.getElementById('controllingTextArea').value;
              if (/\S/.test(txtVal)) {
const nickname = "User"
    var date = new Date();

    if (isOnline()) {
        showAppeal(nickname, date, txtVal);
        alert("Successfully sent to server");
    } else {
        allAppeals.push({name: nickname, date: date, text: txtVal});
        provider.add("appeals", allAppeals);
        alert("Saved to storage");
    }
        }
    document.getElementById('form').reset();
}


function showAppeal(name, date, txtVal){
    if (/\S/.test(txtVal)) {
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

        var pLogin = document.createTextNode(name);
        var pTime = document.createTextNode(date.getHours()+":"+date.getMinutes()+":"+date.getSeconds());
        var pDate = document.createTextNode(date.getDate() +"."+(date.getMonth()+1)+"."+date.getFullYear());
        var para = document.createElement("p");

        var node = document.createTextNode(txtVal);

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
        element.appendChild(div);
   }
//    document.getElementById('form').reset();
    
}

function showAllAppeals(allAppeals) {
    allAppeals.forEach(function (appeal) {
        showAppeal(appeal.name, new Date(appeal.time), appeal.text)
    });
}

function sendAppealsToServer(allAppeals) {
    if (allAppeals.length) {
        alert("Successfully sent to server!")
    }
}
});
function isOnline() {
    return window.navigator.onLine;
}





