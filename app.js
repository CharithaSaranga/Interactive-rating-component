const mainCompnent = document.querySelector(".main-container");

const thanksCompnent = document.querySelector(".thank-you");

const submitButton = document.getElementById("submit");
const rateAgain = document.getElementById("rate-again");

const rating=document.getElementById("rating")
const rates=document.getElementById(".btn")

submitButton.addEventListener("click", () => {
  thanksCompnent.classList.remove("hidden");
  mainCompnent.style.display="none"
});


rateAgain.addEventListener("click", () => {
  thanksCompnent.classList.add("hidden");
  mainCompnent.style.display="block"
});


rates.forEach((rate)=>{
    rate.addEventListener("click",()=>{
        rating.innerHTML=rate.innerHTML
    })
})