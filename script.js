// Tile click functionality
document.querySelectorAll('.tile').forEach(tile => {
  tile.addEventListener('click', ()=>{
    window.open(tile.dataset.url,'_blank');
  });
});

// Search functionality
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('keypress', function(e){
  if(e.key==='Enter'){
    const val = searchInput.value.trim();
    if(!val) return;
    let url = val;
    if(!/^https?:\/\//i.test(val)){ url='https://www.google.com/search?q='+encodeURIComponent(val); }
    window.open(url,'_blank');
    searchInput.value='';
  }
});