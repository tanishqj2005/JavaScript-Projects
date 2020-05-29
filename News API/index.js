
//initialize news API paramters:
let apiKey = "c55a0070057a412faaa3021ca0ec8316";
let countrySelect = document.getElementById('country');
let country = 'in';

//Grab the news container:
let newsAccordion = document.getElementById("newsAccordion");

//Create a AJAX get request:
const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  `http://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`,
  true
);
    
xhr.onload = function () {
  if (this.status == 200) {
    let newsJSON = JSON.parse(this.responseText);
    let articles = newsJSON.articles.slice(0, 10);
    let newsHTML='';
    articles.forEach(function(element,index) {
      let news = `<div class="card">
  <div class="card-header" id="heading${index}">
    <h2 class="mb-0">
      <button
        class="btn btn-link collapsed"
        type="button"
        data-toggle="collapse"
        data-target="#collapse${index}"
        aria-expanded="true"
        aria-controls="collapse${index}"
      >
        <b><u>Latest News ${index+1}</u>:</b> ${element.title}
      </button>
    </h2>
  </div>

  <div
    id="collapse${index}"
    class="collapse"
    aria-labelledby="heading${index}"
    data-parent="#newsAccordion"
  >
    <div class="card-body">
      ${element.description}.<a href = "${element.url}" target='_blank'> Read More Here</a>
    </div>
  </div>
</div>`;
        newsHTML+=news;
    });
    newsAccordion.innerHTML = newsHTML;
     } else {
    console.log("Some Error Occured");
  }
};
xhr.send();
