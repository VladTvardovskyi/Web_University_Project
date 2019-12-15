const realFileBtn = document.getElementById("real-file");
const customBtn = document.getElementById("custom-button");
const img = document.getElementById("img");
console.log(img.src);


customBtn.addEventListener("click", function() {
  realFileBtn.click();
});

realFileBtn.addEventListener("change", function() {
  if (realFileBtn.value) {
    console.log(URL.createObjectURL(this.files[0]));
    document.getElementById("img").src = URL.createObjectURL(this.files[0]);
    console.log(img.src);
} 
});
 function myFunction(){
              var txtVal1 = document.getElementById('exampleFormControlTextarea1').value;
              var txtVal2 = document.getElementById('exampleFormControlTextarea2').value;
              if (!/\S/.test(txtVal1)) {
                alert("заголовок не заповнений ");
    }else if (!/\S/.test(txtVal2)) {alert("тіло не заповнене")}
    else if (img.src==="file:///D:/sublime_work_branch/lab2/src/screen-shot-2015-02-10-at-11-17-38-pm.png") {
        alert("картинка не заповнене")
    }
    else{

      alert("новина додана ");
      document.getElementById('form').reset();
      img.src="file:///D:/sublime_work_branch/lab2/src/screen-shot-2015-02-10-at-11-17-38-pm.png";
    }

              
            }