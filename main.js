'use strict';

const moreBtn = document.querySelector('.info .metadata .moreBtn');
const title = document.querySelector('.info .metadata .title');

moreBtn.addEventListener('click',()=>{
    moreBtn.classList.toggle('clicked');
    title.classList.toggle('clamp');
})


const likeBtn = document.getElementById('Likebtn');
const likeIcon = document.querySelector('.info .actions #Likebtn i');
const likeCntEl = document.querySelector('.info .actions #Likebtn span');
let likeCnt = 999;

likeCntEl.innerText = likeCnt;

// 좋아요 버튼 
likeBtn.addEventListener('click', () => {
  likeIcon.classList.toggle('active');

  if (likeIcon.classList.contains('active')) {
    likeCnt++;
  } else {
    likeCnt === 0 ? 0 : likeCnt--;
  }

  likeCntEl.innerText = likeCnt;
});


const dislikeBtn = document.getElementById('Disbtn');
const dislikeIcon = document.querySelector('.info .actions #Disbtn i');
const dislikeCntEl = document.querySelector('.info .actions #Disbtn span');
let dislikeCnt = -1;

dislikeCntEl.innerText = dislikeCnt;

// 싫어요 버튼 
dislikeBtn.addEventListener('click', () => {
  dislikeIcon.classList.toggle('active');

  if (dislikeIcon.classList.contains('active')) {
    dislikeCnt++;
  } else {
    dislikeCnt === -1 ? 0 : dislikeCnt--;
  }

  dislikeCntEl.innerText = dislikeCnt;
});



// 구독 버튼 

const subscribeBtn = document.querySelector('.info .channel .subscribe');

subscribeBtn.addEventListener('click',()=>{
    subscribeBtn.classList.toggle('clicked');
   
    const isClicked = subscribeBtn.classList.contains('clicked');
    
    if (isClicked) {
        subscribeBtn.innerText='구독중';
    }
    else {
        subscribeBtn.innerText='subscribe';
    }

});




