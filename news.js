window.addEventListener("online", function (event) {
    const allNews = readNewsFromLocalStorage();
    sendNewsToServer(allNews);
    showAllNews(allNews);
    localStorage.removeItem("news");
});

const allNews = readNewsFromLocalStorage();
if (isOnline()) {
    sendNewsToServer(allNews);
    showAllNews(allNews);
    localStorage.removeItem("news");
}

function addNews(imgSrc, title, body){
    
    const card = document.createElement("div");
    card.classList = "col-12 col-md-4 col-xs-6 mb-4";
    card.innerHTML = "<div class='card'>"+"<img class=\"card-img-top img-fluid mb-4\" src=\""+imgSrc+"\" alt=\"Card Image Cap\">" + "<div class=\"card-block\">"+"<h4 class=\"card-title\"><center>"+title+"</center></h4>" + "<p class='card-text pr-3 pl-3 pb-3\'>"+body+"</p>"+"</div>"+"</div>"+"</div>";
    document.getElementById("news").appendChild(card); 
   
}

function showAllNews(allNews) {
    allNews.forEach(function (news) {
        addNews(news.imgSrc, news.title, news.body)
    });
}

function sendNewsToServer(allNews) {
    if (allNews.length) {
        alert("Successfully sent to server!")
    }
}

function readNewsFromLocalStorage() {
    return JSON.parse(localStorage.getItem("news")) != null
        ? JSON.parse(localStorage.getItem("news")) : [];
}

function isOnline() {
    return window.navigator.onLine;
}