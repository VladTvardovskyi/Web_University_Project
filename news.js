document.addEventListener("DOMContentLoaded", function() {
    let allNews = [];

        window.addEventListener("online", function (event) {
            provider.get("news", (news) => {
                if(news){
                    allNews = news;
                }
            sendAllNewsToServer(allNews);
            showAllNews(allNews);
            provider.remove("news");
            allNews = [];
        });
    });
        provider.get("news", (news) => {
            if (news) {
                allNews = news;
            }
        });
       
        if (isOnline()) {
            sendAllNewsToServer(allNews);
            provider.remove("news");
            allNews = [];
    
            let req = new XMLHttpRequest();
            req.open("GET", "/all_news", true);
            req.send();
            req.onreadystatechange = function() {
                if (req.readyState === XMLHttpRequest.DONE) {
                    if (req.status != 200) {
                        console.log("Something goes wrong!");
                    }
                    else {
                        let data = JSON.parse(req.responseText);
                        showAllNews(data);
                    }
                }
            };
        }

function addNews(imgSrc, title, body){
    
    const card = document.createElement("div");
    card.classList = "col-12 col-md-4 col-xs-6 mb-4";
    card.innerHTML = "<div class='card'>"+"<img class=\"card-img-top img-fluid mb-4\" src=\""+imgSrc+"\" alt=\"Card Image Cap\">" + "<div class=\"card-block\">"+"<h4 class=\"card-title\"><center>"+title+"</center></h4>" + "<p class='card-text pr-3 pl-3 pb-3\'>"+body+"</p>"+"</div>"+"</div>"+"</div>";
    document.getElementById("news").appendChild(card); 
   
}

    function showAllNews(allNews) {
        for (let i = 0; i < allNews.length; i++) {
            addNews(allNews[i].imgSrc, allNews[i].title, allNews[i].body);
        }
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

});