document.querySelector('.menu-btn').addEventListener('click', function(){
    this.classList.toggle('active');
    document.querySelector('.sub-nav').classList.toggle('active');
  })

  'use strict'

  // Modalの変数宣言
  const openModal1Button = document.getElementById('open-btn01');
  const openModal2Button = document.getElementById('open-btn02');
  const openModal3Button = document.getElementById('open-btn03');
  const openModal4Button = document.getElementById('open-btn04');
  const openModal_bn1Button = document.getElementById('open-btn_bn01');
  const openModal_bn2Button = document.getElementById('open-btn_bn02');

  const closeModal1Button = document.getElementById('close-btn01');
  const closeModal2Button = document.getElementById('close-btn02');
  const closeModal3Button = document.getElementById('close-btn03');
  const closeModal4Button = document.getElementById('close-btn04');
  const closeModal_bn1Button = document.getElementById('close-btn_bn01');
  const closeModal_bn2Button = document.getElementById('close-btn_bn02');

  const modal1 = document.getElementById('modal01');
  const modal2 = document.getElementById('modal02');
  const modal3 = document.getElementById('modal03');
  const modal4 = document.getElementById('modal04');
  const modal_bn1 = document.getElementById('modal_bn01');
  const modal_bn2 = document.getElementById('modal_bn02');

  openModal1Button.addEventListener('click', () => {
    modal1.style.display = 'flex';
  });

  openModal2Button.addEventListener('click', () => {
    modal2.style.display = 'flex';
  });

  openModal3Button.addEventListener('click', () => {
    modal3.style.display = 'flex';
  });

  openModal4Button.addEventListener('click', () => {
    modal4.style.display = 'flex';
  });

  openModal_bn1Button.addEventListener('click', () => {
    modal_bn1.style.display = 'flex';
  });
  openModal_bn2Button.addEventListener('click', () => {
    modal_bn2.style.display = 'flex';
  });


  closeModal1Button.addEventListener('click', () => {
    modal1.style.display = 'none';
  });

  closeModal2Button.addEventListener('click', () => {
    modal2.style.display = 'none';
  });

  closeModal3Button.addEventListener('click', () => {
    modal3.style.display = 'none';
  });

  closeModal4Button.addEventListener('click', () => {
    modal4.style.display = 'none';
  });

  closeModal_bn1Button.addEventListener('click', () => {
    modal_bn1.style.display = 'none';
  });
  closeModal_bn2Button.addEventListener('click', () => {
    modal_bn2.style.display = 'none';
  });