const wapper = document.querySelector(".wapper");
const question = document.querySelector(".question");
const yesBtn = document.querySelector(".yes-btn");
const gift = document.querySelector(".gift");
const noBtn = document.querySelector(".no-btn");

 yesBtn.addEventListener('click', ()=> {
  console.log(yesBtn);
  question.innerHTML = "I love you too!"
  gift.src = "https://i.pinimg.com/originals/7d/4c/20/7d4c207127bd2268ea3f6802ab67a7f0.gif"
 });

 noBtn.addEventListener('mouseover', ()=>{
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + 'px';
  noBtn.style.top = randomY + 'px';
 })
