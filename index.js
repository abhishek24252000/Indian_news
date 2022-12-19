//intialize the news parameters
let source = 'bbc-news';
let apikey = 'c8810799d73e44c6b029b9901ad3de30';
//grab the news container
let newsAccordion = document.getElementById('newsAccordion');

//create a get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apikey}`, true);

//what to do when process is ready
xhr.onload = function () {
    if (this.status == 200) {
        let json=JSON.parse(this.responseText);
        let articles=json.articles;               //articles word is in the json file
        // console.log(articles);
        let newshtml="";
        articles.forEach(function(element,index){
                // console.log(articles[news]);
                //here we can write `element.title` as `element["title"]` also
                let news =
                        `   <div class="accordion-item">
                                    <h2 class="accordion-header" id="heading${index}">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                                            <b>Breaking News ${index+1}:</b>${element.title}
                                        </button>
                                    </h2>
                                    
                                    <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}"
                                        data-bs-parent="#newsAccordion">
                                        <div class="accordion-body">${element['content']} <a href="${element['url']}" target="_blank">Read more here</a></div>      
                                    </div>
                            </div>`
                newshtml+=news;
            
        });
        newsAccordion.innerHTML=newshtml;
    }
    else {
        console.log('some error occured');
    }
}
xhr.send();

// let news =
//     `   <div class="accordion-item">
//                 <h2 class="accordion-header" id="headingOne">
//                     <button class="accordion-button" type="button" data-bs-toggle="collapse"
//                         data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
//                         Accordion Item #1
//                     </button>
//                 </h2>
                
//                 <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
//                     data-bs-parent="#accordionExample">
//                     <div class="accordion-body">
//                         <strong>This is the first item's accordion body.</strong> It is shown by default, until the
//                         collapse plugin adds the appropriate classes that we use to style each element. These classes
//                         control the overall appearance, as well as the showing and hiding via CSS transitions. You can
//                         modify any of this with custom CSS or overriding our default variables. It's also worth noting
//                         that just about any HTML can go within the <code>.accordion-body</code>, though the transition
//                         does limit overflow.
//                     </div>
//                 </div>
//         </div>`
