console.log(1);
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
  
  document.addEventListener("DOMContentLoaded", function() {
    let allNews = [];


        document.getElementById("send").addEventListener("click", sendNews);
        window.addEventListener("online", function (event) {
            provider.get("news", (news) => {
                if(news){
                    allNews = news;
                }
            sendAllNewsToServer(allNews);
            provider.remove("news");
            allNews = [];
        });
    });

    provider.get("news", (news) =>{
        if(news){
            allNews = news;
        }
    });

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
     
        // alert('News was sent');
    var txtVal1=document.getElementById('newsTitle').value;
    var txtVal2=document.getElementById('newsBody').value;
     if((!/\S/.test(txtVal1)) || (!/\S/.test(txtVal2))) {
        alert('Edit all fields please');
    }
    else{
    

    if (isOnline()) {
        alert("Successfully sent to server");
        sendNewsToServer(img.src, txtVal1, txtVal2);
    } else {
        allNews.push({imgSrc: img.src, title: txtVal1, body: txtVal2});
        provider.add("news", allNews);
        alert("Saved to storage");
    
    }
    //   document.getElementById('form').reset();
     img.src="gettyimages-686157014-594x594.jpg";

    }
    function sendNewsToServer(imgSrc, title, body) {
        fetch("/all_news", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({imgSrc: imgSrc, title: title, body: body}),
        })
            .catch(error => console.error("Cannot fetch data:", error));
    }

    function sendAllNewsToServer(allNews) {
        for (let i = 0; i < allNews.length; i++) {
            sendNewsToServer(allNews[i].imgSrc, allNews[i].title, allNews[i].body)
        }
    }
}

});
