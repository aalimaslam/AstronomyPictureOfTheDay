const $ = s => document.querySelector(s);
const url = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"

const title = $(".name");
const description = $(".description");
const image = $("#image");
const date = $(".date");

const request = new XMLHttpRequest();

request.open("GET",url);

request.onload = ()=>{
    const response = JSON.parse(request.response);
    let responseDate = response.date;
    let responseImageSource = response.url;
    let responseTitle = response.title;
    let responseDescription = response.explanation;

    title.innerText = responseTitle;
    description.innerText = responseDescription;
    image.src = responseImageSource;
    date.innerText += responseDate;

}

request.send();


(function generateStars(){
    for(let i = 0; i < 50; i++){
        const i = document.createElement("i");
        let dimensions = Math.floor(Math.random()* 4 + 2)
        i.style.height =  `${dimensions}px`;
        i.style.width = `${dimensions}px` ;
        i.style.borderRadius = "50%";
        i.style.background = "white";
        i.style.top = Math.floor(Math.random()* innerHeight + 1) + "px"
        i.style.left = Math.floor(Math.random()* innerWidth + 1)+ "px"
        document.body.appendChild(i);
    }
})()