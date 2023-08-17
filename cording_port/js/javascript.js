'use strict'
window.addEventListener('load', function(){
window.addEventListener("scroll", function () {
  // ヘッダーを変数の中に格納する
  const header = document.querySelector("header");
  // 100px以上スクロールしたらヘッダーに「scroll-nav」クラスをつける
  header.classList.toggle("scroll-nav", window.scrollY > 80);
});


document.querySelector('.menu-btn').addEventListener('click', function(){
    this.classList.toggle('active');
    document.querySelector('.sub-nav').classList.toggle('active');
  });

  
  const targets = document.getElementsByClassName('fade');
for(let i = targets.length; i--;){
 let observer = new IntersectionObserver((entries, observer) => {
  for(let j = entries.length; j--;){
   if (entries[j].isIntersecting) {
    entries[j].target.classList.add('scroll-up');
    observer.unobserve(entries[j].target);
   }
  }
 });
 observer.observe(targets[i]);
}
});

window.addEventListener("scroll", function () {
  const topBtn = document.getElementById("top-btn");
  const scroll = window.scrollY;
  if (scroll > 700) { 
    topBtn.style.opacity = 1;
  } else topBtn.style.opacity = 0; 
});