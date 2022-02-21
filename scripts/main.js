async function apiCall(url) {


    //add api call logic here
    try{
        let res= await fetch(url);
        let data= await res.json();
        return data;
    }
    catch(err){
        console.log(err);
    }

}


function appendArticles(articles, main) {

    //add append logic here

        articles.map((el)=>{
            let div = document.createElement("div");
            
            div.addEventListener("click",()=>{
                localStorage.setItem("article",JSON.stringify(el));
                window.location.href="news.html"
              })
            let img = document.createElement("img");
            img.src=el.urlToImage;
            let title = document.createElement("p");
            title.innerText=el.title;
            let desc = document.createElement("p");
            desc.innerText=el.description;
            div.append(title,desc,img)
            main.append(div)
        });


}

export { apiCall, appendArticles }