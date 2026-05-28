const tileData = [
  {name:'Facebook', url:'https://www.facebook.com', icon:'https://cdn-icons-png.flaticon.com/512/145/145802.png'},
  {name:'ChatGPT', url:'https://chat.openai.com', icon:'https://cdn-icons-png.flaticon.com/512/5968/5968322.png'},
  {name:'Drive', url:'https://drive.google.com', icon:'https://cdn-icons-png.flaticon.com/512/270/270798.png'},
  {name:'Photos', url:'https://photos.google.com', icon:'https://cdn-icons-png.flaticon.com/512/300/300221.png'},
  {name:'Telegram', url:'https://web.telegram.org', icon:'https://cdn-icons-png.flaticon.com/512/2111/2111646.png'},
  {name:'Deepseek', url:'https://deepseek.ai', icon:'https://via.placeholder.com/50'},
  {name:'Gemini', url:'https://www.gemini.com', icon:'https://via.placeholder.com/50'}
];

const container = document.getElementById('tileContainer');
tileData.forEach(tile=>{
  const div = document.createElement('div');
  div.className = 'tile';
  div.dataset.url = tile.url;
  div.innerHTML = `<img src="${tile.icon}"/><span>${tile.name}</span>`;
  div.addEventListener('click',()=>window.open(tile.url,'_blank'));
  container.appendChild(div);
});

// Search functionality
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('keypress',function(e){
  if(e.key==='Enter'){
    let val=searchInput.value.trim();
    if(!val) return;
    let url=val;
    if(!/^https?:\/\//i.test(val)) url='https://www.google.com/search?q='+encodeURIComponent(val);
    window.open(url,'_blank');
    searchInput.value='';
  }
});

// Theme toggle
const themeBtn=document.getElementById('themeToggle');
themeBtn.addEventListener('click',()=>{
  if(document.body.style.background==='#111'){
    document.body.style.background='#fff';
    document.body.style.color='#000';
  }else{
    document.body.style.background='#111';
    document.body.style.color='#fff';
  }
});
