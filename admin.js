// const img = document.getElementById("img");
// console.log(img.src);


// customBtn.addEventListener("click", function() {
//   realFileBtn.click();
// });

// realFileBtn.addEventListener("change", function() {
//   if (realFileBtn.value) {
//     console.log(URL.createObjectURL(this.files[0]));
//     document.getElementById("img").src = URL.createObjectURL(this.files[0]);
//     console.log(img.src);
// } 
// });


function verifyInput() {
    var titleField = document.getElementById('newsTitle');
    var bodyField = document.getElementById('newsBody');

    if (titleField.value.trim() === '') {
        return false;
    } else if (bodyField.value.trim() === '') {
        return false;
    } else {
        return true;
    }
}
var control = document.getElementById("your-files");
control.addEventListener("change", function(event) {
    // Когда происходит изменение элементов управления, значит появились новые файлы
    var i = 0,
        files = control.files,
        len = files.length;
 
    for (; i < len; i++) {
        console.log("Filename: " + files[i].name);
        console.log("Type: " + files[i].type);
        console.log("Size: " + files[i].size + " bytes");
    }
 
}, false);

function new_news() {
    if (verifyInput()) {
        alert('News was sent');
        document.getElementById('newsTitle').value = "";
        document.getElementById('newsBody').value = "";
    } else if(( document.getElementById('newsTitle').value = "")|| document.getElementById('newsBody')) {
        alert('Edit all fields please');
    }else{
        alert('Write info');
    }
    // if (img.src==="file:///F:/WEB/No-FuckUP/gettyimages-686157014-594x594.jpg") {
    //     alert("картинка не заповнене")
    // }
    // else{

    //   alert("новина додана ");
    //   document.getElementById('form').reset();
    //   img.src="file://F:WEB/No-FuckUP/martin-garrix.jpg";
    // }


};