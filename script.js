/* =========================================
   1. APP CONFIGURATION (100% ORIGINAL COLORED SVGS)
   ========================================= */
// Main Screen Apps (6 Apps - Facebook, YouTube, Telegram, GitHub, W3Schools, Duolingo)
const mainApps = [
    { name: 'Facebook', url: 'https://www.facebook.com', 
      icon: '<path fill="#1877F2" d="M18 0C8.06 0 0 8.06 0 18c0 8.94 6.52 16.35 15.19 17.78V23.2h-4.57v-5.2h4.57v-3.96c0-4.51 2.69-7 6.79-7 1.97 0 4.04.35 4.04.35v4.44h-2.27c-2.24 0-2.94 1.39-2.94 2.81v3.36h5.06l-.81 5.2h-4.25v12.58C29.48 34.35 36 26.94 36 18 36 8.06 27.94 0 18 0z"/><path fill="#FFF" d="M25.32 23.2l.81-5.2h-5.06v-3.36c0-1.42.7-2.81 2.94-2.81h2.27V7.39s-2.07-.35-4.04-.35c-4.1 0-6.79 2.49-6.79 7v3.96h-4.57v5.2h4.57v12.58a18.25 18.25 0 0 0 5.62 0V23.2h4.25z"/>' },
    { name: 'YouTube', url: 'https://m.youtube.com/?persist_app=1&app=m', 
      icon: '<path fill="#FF0000" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"/><path fill="#FFF" d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>' },
    { name: 'Telegram', url: 'https://web.telegram.org', 
      icon: '<circle cx="12" cy="12" r="12" fill="#2AABEE"/><path fill="#FFF" d="M5.1 11.8l12.7-4.9c.6-.2 1.1.1.9.8l-2.2 10.2c-.1.7-.6.9-1.2.6l-3.3-2.4-1.6 1.5c-.2.2-.4.4-.8.4l.2-3.4 6.1-5.5c.3-.2-.1-.4-.4-.2l-7.6 4.8-3.3-1c-.7-.2-.7-.7.1-1z"/>' },
    { name: 'GitHub', url: 'https://github.com', 
      icon: '<circle cx="12" cy="12" r="12" fill="#181717"/><path fill="#FFF" d="M12 4C7.6 4 4 7.6 4 12c0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4v-1.4c-2.2.5-2.7-1.1-2.7-1.1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.2 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-3.9 0-.9.3-1.6.8-2.1-.1-.2-.3-1 .1-2.1 0 0 .7-.2 2.3.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.6-1 2.3-.8 2.3-.8.4 1.1.2 1.9.1 2.1.5.5.8 1.2.8 2.1 0 3-1.8 3.7-3.6 3.9.3.3.6.8.6 1.6v2.4c0 .2.1.5.5.4 3.2-1.1 5.5-4.1 5.5-7.6 0-4.4-3.6-8-8-8z"/>' },
    { name: 'W3Schools', url: 'https://www.w3schools.com', 
      icon: '<rect width="24" height="24" rx="4" fill="#04AA6D"/><path fill="#FFF" d="M5 16h3.5L12 6h3.5l3 10H22L16 2H8z"/>' },
    { name: 'Duolingo', url: 'https://www.duolingo.com', 
      icon: '<rect width="24" height="24" rx="5" fill="#58CC02"/><path fill="#FFF" d="M11.968 4a8.966 8.966 0 00-6.176 15.46L4.764 21.34a1.077 1.077 0 001.218 1.631l2.42-.816A8.966 8.966 0 1011.968 4zm0 15.342a6.37 6.37 0 110-12.74 6.37 6.37 0 010 12.74zm-2.856-7.81a1.458 1.458 0 100-2.916 1.458 1.458 0 000 2.916zm5.712 0a1.458 1.458 0 100-2.916 1.458 1.458 0 000 2.916zm-5.46 2.115a4.2 4.2 0 005.207 0 .611.611 0 10-.765-.956 2.977 2.977 0 01-3.676 0 .611.611 0 00-.765.956z"/>' }
];

// Bottom Dock Apps (4 Core AI/Mail Apps)
const dockApps = [
    { name: 'ChatGPT', url: 'https://chatgpt.com', 
      icon: '<rect width="24" height="24" rx="12" fill="#10A37F"/><path fill="#FFF" d="M17.5 9.5a4.5 4.5 0 0 0-5.3-5.8 4.5 4.5 0 0 0-7.7 2.2A4.5 4.5 0 0 0 3 14.5a4.5 4.5 0 0 0 5.3 5.8 4.5 4.5 0 0 0 7.7-2.2A4.5 4.5 0 0 0 21 9.5zM12 18.5c-1.1 0-2.2-.4-3-1.2l6.6-3.8v4.2c-.4 0-.9.1-1.3.1v-1.5l-2.3 1.4v.8zm-5.8-3.3c-.4-.7-.7-1.6-.7-2.5 0-.2 0-.5.1-.7l6.6 3.8-2.1 3.6c-.6-.4-1.1-.9-1.5-1.5L10.3 15l-1.1-2-1.9 1.1v1.1zm-.8-5.9c.5-1 1.4-1.7 2.3-2.2l3.4 5.8H6.5c.1-.4.2-.9.5-1.3l1.9-1.1v-2.2L7.4 5.3zM15.3 5.3c1.1 0 2.2.4 3 1.2L11.7 10.3V6.1c.4 0 .9-.1 1.3-.1v1.5l2.3-1.4v-.8zm5.8 3.3c.4.7.7 1.6.7 2.5 0 .2 0 .5-.1.7l-6.6-3.8 2.1-3.6c.6.4 1.1.9 1.5 1.5L13.7 9l1.1 2 1.9-1.1V8.8zm.8 5.9c-.5 1-1.4 1.7-2.3 2.2l-3.4-5.8h5.1c-.1.4-.2.9-.5 1.3l-1.9 1.1v2.2l1.5-1z"/>' },
    { name: 'Gemini', url: 'https://gemini.google.com', 
      icon: '<defs><linearGradient id="gem" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#4285F4"/><stop offset="50%" stop-color="#9B72CB"/><stop offset="100%" stop-color="#D96570"/></linearGradient></defs><path fill="url(#gem)" d="M19.7 9.5a25 25 0 0 0-6.2-2.6A25.3 25.3 0 0 0 11 1.1a1.1 1.1 0 0 0-1.9 0 25.3 25.3 0 0 0-2.6 5.9 25 25 0 0 0-6.2 2.6 1.1 1.1 0 0 0 0 1.9 25 25 0 0 0 6.2 2.6 25.3 25.3 0 0 0 2.6 5.9 1.1 1.1 0 0 0 1.9 0 25.3 25.3 0 0 0 2.6-5.9 25 25 0 0 0 6.2-2.6 1.1 1.1 0 0 0 0-1.9z"/>' },
    { name: 'DeepSeek', url: 'https://chat.deepseek.com', 
      icon: '<rect width="24" height="24" rx="6" fill="#0052FF"/><path fill="#FFF" d="M19 12c0-1.7-1.4-3-3-3-.1 0-.2 0-.3.1C14.7 6.4 12 4.5 9 4.5 5.8 4.5 3.2 7.1 3.2 10.3c0 2.3 1.3 4.3 3.4 5.3.4.1 1 .2 1.5.2h6.3c2.1 0 3.8-1.7 3.8-3.8zM9 14.2c-1 0-1.8-.4-2.4-1.1C6 12.4 5.5 11.4 5.5 10.3c0-1.9 1.6-3.6 3.6-3.6s3.6 1.6 3.6 3.6-1.6 3.6-3.6 3.6zm5.4.4H11.8c.4-.7.6-1.6.6-2.5 0-.4-.1-.9-.1-1.3.7-.5 1.7-.7 2.6-.5.7.3 1.7.9 1.7 1.6 0 .8-.7 1.5-1.5 1.5h-.1z"/>' },
    { name: 'Gmail', url: 'https://mail.google.com', 
      icon: '<path fill="#4285F4" d="M22.5 5.5l-3.2 2.4L12 13.4 4.7 7.9 1.5 5.5C1.1 5.2 1 5.4 1 5.8v12.5c0 1.1.9 2 2 2h4v-8.8l5 3.8 5-3.8v8.8h4c1.1 0 2-.9 2-2V5.8c0-.4-.1-.6-.5-.3z"/><path fill="#EA4335" d="M22.5 5.5l-3.2 2.4-5.9 4.4-1.4 1.1-1.4-1.1-5.9-4.4L1.5 5.5C1.1 5.2 1 5.4 1 5.8V7c0 .4.2.7.6.9l10.4 7.8L22.4 7.9c.4-.2.6-.5.6-.9V5.8c0-.4-.1-.6-.5-.3z"/><path fill="#34A853" d="M1 5.8v1.2l3.7 2.8V18.2H7V9.8L1 5.3c-.4-.3-.7-.2-.7.2z"/><path fill="#FBBC05" d="M23 5.8v1.2l-3.7 2.8V18.2H17V9.8l6-4.5c.4-.3.7-.2.7.2z"/>' }
];

/* =========================================
   2. RENDER GRIDS & DOCK
   ========================================= */
function generateAppHTML(app, size = 36) {
    return `
        <div class="app-container" onclick="openInBrowser('${app.url}')">
            <div class="app-icon-box">
                <svg viewBox="0 0 24 24" style="width:${size}px; height:${size}px;">${app.icon}</svg>
            </div>
            <span class="app-label">${app.name}</span>
        </div>`;
}

document.getElementById('mainAppsGrid').innerHTML = mainApps.map(app => generateAppHTML(app, 40)).join('');
document.getElementById('dockApps').innerHTML = dockApps.map(app => generateAppHTML(app, 36)).join('');

window.openInBrowser = function(url) {
    document.getElementById('searchInput').blur(); window.location.href = url;
};

/* =========================================
   3. SMART WIDGET (TIME, DATE, BATTERY)
   ========================================= */
function updateTime() {
    const now = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    document.getElementById('widgetDate').innerText = now.toLocaleDateString('en-US', options);

    let hours = now.getHours(); let minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    let greeting = 'Good Evening';
    if (hours >= 5 && hours < 12) greeting = 'Good Morning';
    else if (hours >= 12 && hours < 18) greeting = 'Good Afternoon';
    
    document.getElementById('greetingText').innerText = `${greeting}, Mehedi!`;

    hours = hours % 12 || 12; minutes = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById('widgetClock').innerText = `${hours}:${minutes}`;
}
setInterval(updateTime, 1000); updateTime();

if ('getBattery' in navigator) {
    navigator.getBattery().then(function(battery) {
        function updateBattery() {
            let level = Math.round(battery.level * 100) + "%";
            document.getElementById('widgetBattery').innerText = (battery.charging ? "⚡" : "🔋") + " " + level;
        }
        updateBattery(); battery.addEventListener('chargingchange', updateBattery); battery.addEventListener('levelchange', updateBattery);
    });
}

/* =========================================
   4. THEME & SEARCH FUNCTIONALITY
   ========================================= */
const themeToggle = document.getElementById('themeToggle');
const currentTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', currentTheme);
themeToggle.innerText = currentTheme === 'dark' ? '☀️' : '🌙';

themeToggle.addEventListener('click', () => {
    const targetTheme = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', targetTheme);
    localStorage.setItem('theme', targetTheme);
    themeToggle.innerText = targetTheme === 'dark' ? '☀️' : '🌙';
});

const searchInput = document.getElementById('searchInput');
const placeholderTexts = ["Search the web...", "Ask ChatGPT...", "Ask Gemini...", "Check Mail..."];
let textIndex = 0; let charIndex = 0; let isDeleting = false;

function typeWriter() {
    const currentText = placeholderTexts[textIndex];
    if (isDeleting) { searchInput.setAttribute('placeholder', currentText.substring(0, charIndex - 1)); charIndex--; } 
    else { searchInput.setAttribute('placeholder', currentText.substring(0, charIndex + 1)); charIndex++; }
    
    let typeSpeed = 100; if (isDeleting) typeSpeed /= 2;
    if (!isDeleting && charIndex === currentText.length) { typeSpeed = 2000; isDeleting = true; } 
    else if (isDeleting && charIndex === 0) { isDeleting = false; textIndex = (textIndex + 1) % placeholderTexts.length; typeSpeed = 500; }
    if (searchInput.value === "") { setTimeout(typeWriter, typeSpeed); }
}
setTimeout(typeWriter, 1000);

const suggestions = document.getElementById('suggestions');
const clearBtn = document.getElementById('clearBtn');
let debounceTimer; let currentFocus = -1;

window.searchGo = function(query) { searchInput.blur(); window.location.href = 'https://www.google.com/search?q=' + encodeURIComponent(query); };

searchInput.addEventListener('input', () => {
    clearBtn.style.display = searchInput.value.length > 0 ? 'flex' : 'none';
    clearTimeout(debounceTimer); debounceTimer = setTimeout(() => {
        if (!searchInput.value.trim()) { suggestions.style.display = 'none'; return; }
        const script = document.createElement('script');
        script.src = `https://suggestqueries.google.com/complete/search?client=chrome&q=${encodeURIComponent(searchInput.value)}&callback=handleGoogleSuggestions`;
        document.body.appendChild(script); script.onload = () => document.body.removeChild(script);
    }, 150);
});

clearBtn.addEventListener('click', (e) => { e.stopPropagation(); searchInput.value = ''; clearBtn.style.display = 'none'; suggestions.style.display = 'none'; searchInput.focus(); typeWriter(); });

window.handleGoogleSuggestions = function(data) {
    const results = data[1]; if (!results || results.length === 0) { suggestions.style.display = 'none'; return; }
    currentFocus = -1;
    suggestions.innerHTML = results.map((item, index) => `<li id="sug-${index}" onmousedown="searchGo('${item}')"><svg viewBox="0 0 24 24"><path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"/></svg><span style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${item}</span></li>`).join('');
    suggestions.style.display = 'block';
};

searchInput.addEventListener('keydown', function(e) {
    let x = document.getElementById("suggestions"); if (x) x = x.getElementsByTagName("li");
    if (e.key === 'ArrowDown') { currentFocus++; addActive(x); } else if (e.key === 'ArrowUp') { currentFocus--; addActive(x); } 
    else if (e.key === 'Enter') { e.preventDefault(); if (currentFocus > -1 && x) { x[currentFocus].dispatchEvent(new MouseEvent('mousedown')); } else { let val = searchInput.value.trim(); if (val) { if (val.includes('.') && !val.includes(' ')) { openInBrowser(val.startsWith('http') ? val : 'https://' + val); } else { searchGo(val); } } } }
});

function addActive(x) { if (!x) return false; removeActive(x); if (currentFocus >= x.length) currentFocus = 0; if (currentFocus < 0) currentFocus = (x.length - 1); x[currentFocus].classList.add("suggestion-active"); x[currentFocus].scrollIntoView({ block: "nearest" }); }
function removeActive(x) { for (let i = 0; i < x.length; i++) { x[i].classList.remove("suggestion-active"); } }
document.addEventListener('mousedown', (e) => { if (!searchInput.contains(e.target) && !suggestions.contains(e.target) && e.target !== clearBtn) { suggestions.style.display = 'none'; searchInput.blur(); } });
window.addEventListener('scroll', () => { if (document.activeElement === searchInput) { searchInput.blur(); } }, { passive: true });
