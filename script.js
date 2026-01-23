const screens=document.querySelectorAll('.screen');
let index=0;


function nextScreen(){
screens[index].classList.remove('active');
index=Math.min(index+1,screens.length-1);
screens[index].classList.add('active');
if(index===3) startTyping();
}


const messages=[
"I messed up… and I'm really sorry for that.",
"I promise I'll be better for you.",
"Please forgive me… You mean so much to me."
];


function reveal(el){
if(!el.dataset.done){
el.textContent=messages.shift();
el.dataset.done=true;
}
}


// typing effect
const fullText="For hurting you and making you feel upset, I'm truly sorry. I never wanted to be the reason behind your tears or your silence. You matter to me more than I always manage to show, and I hate that I let you down. I promise to grow, to listen, and to be better for you every single day. Thank you for giving me your patience and your heart.";
let char=0;
function startTyping(){
const el=document.getElementById('typing');
const cursor=document.getElementById('cursor');
const interval=setInterval(()=>{
if(char<fullText.length){
cursor.insertAdjacentText('beforebegin',fullText[char++]);
} else clearInterval(interval);
},35);
}


// floating hearts
for(let i=0;i<55;i++){
const h=document.createElement('div');
h.className='floating-heart';
h.textContent='❤';
h.style.left=Math.random()*100+'vw';
h.style.fontSize=10+Math.random()*22+'px';
h.style.animationDuration=7+Math.random()*12+'s';
h.style.animationDelay=Math.random()*10+'s';
document.body.appendChild(h);
}