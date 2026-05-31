/* =========================================
   1. HIGH-QUALITY ORIGINAL LOGOS (Custom Order)
   ========================================= */
// Ordered exactly as requested: Facebook -> AI Tools -> Duolingo, GitHub -> Others
const apps = [
    { name: 'Facebook', url: 'https://www.facebook.com', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg', invertDark: false },
    { name: 'ChatGPT', url: 'https://chat.openai.com', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg', invertDark: true },
    { name: 'Gemini', url: 'https://gemini.google.com', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg', invertDark: false },
    { name: 'DeepSeek', url: 'https://chat.deepseek.com', imgUrl: 'https://img.icons8.com/fluency/96/artificial-intelligence.png', invertDark: false },
    { name: 'Duolingo', url: 'https://www.duolingo.com', imgUrl: 'https://img.icons8.com/color/96/duolingo-logo.png', invertDark: false },
    { name: 'GitHub', url: 'https://github.com', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg', invertDark: true }, 
    { name: 'W3Schools', url: 'https://www.w3schools.com', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/W3Schools_logo.svg', invertDark: false },
    { name: 'YouTube', url: 'https://m.youtube.com/?persist_app=1&app=m', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg', invertDark: false },
    { name: 'Telegram', url: 'https://web.telegram.org', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg', invertDark: false }
];

/* =========================================
   2. RENDER GRID
   ========================================= */
function generateAppHTML(app) {
    const imgClass = app.invertDark ? 'invert-dark' : '';
    return `
        <div class="app-container" onclick="openInBrowser('${app.url}')">
            <div class="app-icon-box">
                <img src="${app.imgUrl}" alt="${app.name}" class="${imgClass}">
            </div>
            <span class="app-label">${app.name}</span>
        </div>`;
}

document.getElementById('mainAppsGrid').innerHTML = apps.map(generateAppHTML).join('');

window.openInBrowser = function(url) {
    document.getElementById('searchInput').blur(); 
    window.location.href = url;
};

/* =========================================
   3. SMART STATUS WIDGET & THEME
   ========================================= */
const themeToggle = document.getElementById('themeToggle');
const currentTheme = localStorage.getItem('theme') || 'dark'; // Dark theme default
document.documentElement.setAttribute('data-theme', currentTheme);
themeToggle.innerText = currentTheme === 'dark' ? '☀️' : '🌙';

themeToggle.addEventListener('click', () => {
    const targetTheme = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', targetTheme);
    localStorage.setItem('theme', targetTheme);
    themeToggle.innerText = targetTheme === 'dark' ? '☀️' : '🌙';
});

function updateTime() {
    const now = new Date();
    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    document.getElementById('widgetDate').innerText = now.toLocaleDateString('en-US', options).toUpperCase();

    let hours = now.getHours(); let minutes = now.getMinutes();
    let greeting = 'Good Evening';
    if (hours >= 5 && hours < 12) greeting = 'Good Morning';
    else if (hours >= 12 && hours < 18) greeting = 'Good Afternoon';
    
    document.getElementById('greetingText').innerText = `${greeting}, Mehedi!`;

    hours = hours % 12 || 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById('widgetClock').innerText = `${hours}:${minutes}`;
}
setInterval(updateTime, 1000); updateTime();

// Battery
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
   4. YOUR EXACT SEARCH LOGIC & KEYBOARD NAV
   ========================================= */
const searchInput = document.getElementById('searchInput');
const suggestions = document.getElementById('suggestions');
const clearBtn = document.getElementById('clearBtn');
let debounceTimer; let currentFocus = -1;

window.searchGo = function(query) { 
    searchInput.blur(); 
    window.location.href = 'https://www.google.com/search?q=' + encodeURIComponent(query); 
};

searchInput.addEventListener('input', () => {
    clearBtn.style.display = searchInput.value.length > 0 ? 'flex' : 'none';
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
        if (!searchInput.value.trim()) { suggestions.style.display = 'none'; return; }
        const script = document.createElement('script');
        script.src = `https://suggestqueries.google.com/complete/search?client=chrome&q=${encodeURIComponent(searchInput.value)}&callback=handleGoogleSuggestions`;
        document.body.appendChild(script); script.onload = () => document.body.removeChild(script);
    }, 150);
});

clearBtn.addEventListener('click', () => { 
    searchInput.value = ''; 
    clearBtn.style.display = 'none'; 
    suggestions.style.display = 'none'; 
    searchInput.focus(); 
});

window.handleGoogleSuggestions = function(data) {
    const results = data[1]; 
    if (!results || results.length === 0) { suggestions.style.display = 'none'; return; }
    currentFocus = -1;
    // Exactly your SVG structure for suggestions
    suggestions.innerHTML = results.slice(0, 8).map((item, index) => 
        `<li id="sug-${index}" onmousedown="searchGo('${item}')">
            <svg viewBox="0 0 24 24"><path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"/></svg>
            <span style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${item}</span>
        </li>`
    ).join('');
    suggestions.style.display = 'block';
};

// URL Detection Logic
function isURL(str) {
    const pattern = new RegExp('^(https?:\\/\\/)?'+ '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ '((\\d{1,3}\\.){3}\\d{1,3}))'+ '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ '(\\?[;&a-z\\d%_.~+=-]*)?'+ '(\\#[-a-z\\d_]*)?$','i'); 
    return !!pattern.test(str) && !str.includes(' ');
}

// EXACTLY your keyboard logic + Smart URL redirect
searchInput.addEventListener('keydown', function(e) {
    let x = document.getElementById("suggestions"); if (x) x = x.getElementsByTagName("li");
    if (e.key === 'ArrowDown') { currentFocus++; addActive(x); } 
    else if (e.key === 'ArrowUp') { currentFocus--; addActive(x); } 
    else if (e.key === 'Enter') { 
        e.preventDefault(); 
        if (currentFocus > -1 && x) { 
            x[currentFocus].dispatchEvent(new MouseEvent('mousedown')); 
        } else { 
            let val = searchInput.value.trim(); 
            if (val) { 
                if (isURL(val)) { 
                    openInBrowser(val.startsWith('http') ? val : 'https://' + val); 
                } else { 
                    searchGo(val); 
                } 
            } 
        } 
    }
});

function addActive(x) { 
    if (!x) return false; 
    removeActive(x); 
    if (currentFocus >= x.length) currentFocus = 0; 
    if (currentFocus < 0) currentFocus = (x.length - 1); 
    x[currentFocus].classList.add("suggestion-active"); 
    x[currentFocus].scrollIntoView({ block: "nearest" }); 
}
function removeActive(x) { 
    for (let i = 0; i < x.length; i++) { x[i].classList.remove("suggestion-active"); } 
}

document.addEventListener('mousedown', (e) => { 
    if (!searchInput.contains(e.target) && !suggestions.contains(e.target) && e.target !== clearBtn) { 
        suggestions.style.display = 'none'; searchInput.blur(); 
    } 
});

/* =========================================
   5. DYNAMIC MOTIVATIONAL QUOTES (On Load)
   ========================================= */
const quotes = [
    { text: "Talk is cheap. Show me the code.", author: "Linus Torvalds" },
    { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
    { text: "Experience is the name everyone gives to their mistakes.", author: "Oscar Wilde" },
    { text: "Make it work, make it right, make it fast.", author: "Kent Beck" },
    { text: "Code is like humor. When you have to explain it, it’s bad.", author: "Cory House" },
    { text: "The only way to learn a new programming language is by writing programs in it.", author: "Dennis Ritchie" }
];

function setRandomQuote() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('quoteText').innerText = `"${randomQuote.text}"`;
    document.getElementById('quoteAuthor').innerText = `- ${randomQuote.author}`;
}

// Set quote when the page loads
setRandomQuote();
