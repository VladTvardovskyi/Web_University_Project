
const realFileBtn = document.getElementById("real-file");
const customBtn = document.getElementById("custom-button");
const img = document.getElementById("img");

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
  
  document.getElementById("send").addEventListener("click", sendNews);
//   window.addEventListener("online", function (event) {
//       const allNews = readNewsFromLocalStorage();
//       sendNewsToServer(allNews);
//       showAllNews(allNews);
//       localStorage.removeItem("news");
//   });

//   const allNews = readNewsFromLocalStorage();
//   if(isOnline()){
//       sendNewsToServer(allNews);
//       showAllNews(allNews);
//       localStorage.removeItem("news");
//   }
// function verifyInput() {
//     var txtVal1 = document.getElementById('newsTitle');
//     var txtVal2 = document.getElementById('newsBody');

//     if (txtVal1.value.trim() === '') {
//         return false;
//     } else if (txtVal2.value.trim() === '') {
//         return false;
//     } else {
//         return true;
//     }
// }

function sendNews() {     
    var txtVal1=document.getElementById('newsTitle').value;
    var txtVal2=document.getElementById('newsBody').value;
     if((!/\S/.test(txtVal1)) || (!/\S/.test(txtVal2))) {
        alert('Edit all fields please');
    }
    else{
            
    if (isOnline()) {
        addNews(imgSrc, title, body);
    } else {
            let allNews = readNewsFromLocalStorage();
        allNews.push({imgSrc: img.src, title: txtVal1, body: txtVal2});
        saveNewsToLocalStorage(allNews);
        alert("Saved to local storage");
    }
    //   document.getElementById('form').reset();
     img.src="gettyimages-686157014-594x594.jpg";

    } 
    function sendNewsToServer(allNews) {
        if (allNews.length) {
            alert("Successfully sent to server!")
        }
    }
    
    function saveNewsToLocalStorage(allNews) {
        localStorage.setItem("news", JSON.stringify(allNews));
    }
    
    function readNewsFromLocalStorage() {
        return JSON.parse(localStorage.getItem("news")) != null
            ? JSON.parse(localStorage.getItem("news")) : [];
    }
    
    function isOnline() {
        return window.navigator.onLine;
    }

}
