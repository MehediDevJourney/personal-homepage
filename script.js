/* =========================================
   1. APP CONFIGURATION (12 APPS - REAL LOGOS)
   ========================================= */
// We use Google's Favicon API to fetch the real, high-resolution logos automatically.
const appsConfig = [
    { name: 'Facebook', url: 'https://www.facebook.com', imgUrl: 'https://www.google.com/s2/favicons?domain=facebook.com&sz=128' },
    { name: 'YouTube', url: 'https://m.youtube.com/?persist_app=1&app=m', imgUrl: 'https://www.google.com/s2/favicons?domain=youtube.com&sz=128' },
    { name: 'Telegram', url: 'https://web.telegram.org', imgUrl: 'https://www.google.com/s2/favicons?domain=telegram.org&sz=128' },
    { name: 'ChatGPT', url: 'https://chatgpt.com', imgUrl: 'https://www.google.com/s2/favicons?domain=chatgpt.com&sz=128' },
    { name: 'Gemini', url: 'https://gemini.google.com', imgUrl: 'https://www.google.com/s2/favicons?domain=gemini.google.com&sz=128' },
    { name: 'DeepSeek', url: 'https://chat.deepseek.com', imgUrl: 'https://www.google.com/s2/favicons?domain=deepseek.com&sz=128' },
    { name: 'GitHub', url: 'https://github.com', imgUrl: 'https://www.google.com/s2/favicons?domain=github.com&sz=128' },
    { name: 'W3Schools', url: 'https://www.w3schools.com', imgUrl: 'https://www.google.com/s2/favicons?domain=w3schools.com&sz=128' },
    { name: 'Duolingo', url: 'https://www.duolingo.com', imgUrl: 'https://www.google.com/s2/favicons?domain=duolingo.com&sz=128' },
    // 3 New Productivity Apps for a perfect 12-grid layout:
    { name: 'Stack Overflow', url: 'https://stackoverflow.com', imgUrl: 'https://www.google.com/s2/favicons?domain=stackoverflow.com&sz=128' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com', imgUrl: 'https://www.google.com/s2/favicons?domain=linkedin.com&sz=128' },
    { name: 'Gmail', url: 'https://mail.google.com', imgUrl: 'https://www.google.com/s2/favicons?domain=mail.google.com&sz=128' }
];

/* =========================================
   2. INITIALIZE APPS GRID (USING REAL IMAGES)
   ========================================= */
const appsGrid = document.getElementById('appsGrid');
appsConfig.forEach(app => {
    const appHTML = `
        <div class="app-container" onclick="openInBrowser('${app.url}')">
            <div class="app-icon-box">
                <img src="${app.imgUrl}" alt="${app.name}">
            </div>
            <span class="app-label">${app.name}</span>
        </div>
    `;
    appsGrid.innerHTML += appHTML;
});

// Force Open in Browser
window.openInBrowser = function(url) {
    document.getElementById('searchInput').blur(); 
    window.location.href = url;
};

/* =========================================
   3. THEME TOGGLE LOGIC
   ========================================= */
const themeToggle = document.getElementById('themeToggle');
const currentTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', currentTheme);
themeToggle.innerText = currentTheme === 'dark' ? '☀️ Light' : '🌙 Dark';

themeToggle.addEventListener('click', () => {
    const targetTheme = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', targetTheme);
    localStorage.setItem('theme', targetTheme);
    themeToggle.innerText = targetTheme === 'dark' ? '☀️ Light' : '🌙 Dark';
});

/* =========================================
   4. LIVE CLOCK, GREETING & QUOTE
   ========================================= */
function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    let greeting = 'Good Evening';
    if (hours >= 5 && hours < 12) greeting = 'Good Morning';
    else if (hours >= 12 && hours < 18) greeting = 'Good Afternoon';
    
    document.getElementById('greetingText').innerText = `${greeting}, Mehedi!`;

    hours = hours % 12 || 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById('clock').innerText = `${hours}:${minutes} ${ampm}`;
}
setInterval(updateTime, 1000);
updateTime();

// Daily Motivation Quotes Feature
const quotes = [
    "“First, solve the problem. Then, write the code.”",
    "“Code is like humor. When you have to explain it, it’s bad.”",
    "“Consistency is what transforms average into excellence.”",
    "“Don't watch the clock; do what it does. Keep going.”",
    "“Make it work, make it right, make it fast.”",
    "“Learning to write programs stretches your mind.”"
];
// Pick a random quote on each reload
document.getElementById('quoteText').innerText = quotes[Math.floor(Math.random() * quotes.length)];


/* =========================================
   5. DYNAMIC TYPEWRITER PLACEHOLDER
   ========================================= */
const searchInput = document.getElementById('searchInput');
const placeholderTexts = ["Search the web...", "Type a URL...", "Ask ChatGPT...", "Ask Gemini...", "Learn to code..."];
let textIndex = 0; let charIndex = 0; let isDeleting = false;

function typeWriter() {
    const currentText = placeholderTexts[textIndex];
    if (isDeleting) {
        searchInput.setAttribute('placeholder', currentText.substring(0, charIndex - 1));
        charIndex--;
    } else {
        searchInput.setAttribute('placeholder', currentText.substring(0, charIndex + 1));
        charIndex++;
    }

    let typeSpeed = 100;
    if (isDeleting) typeSpeed /= 2;

    if (!isDeleting && charIndex === currentText.length) {
        typeSpeed = 2000; isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false; textIndex = (textIndex + 1) % placeholderTexts.length; typeSpeed = 500;
    }

    if (searchInput.value === "") { setTimeout(typeWriter, typeSpeed); }
}
setTimeout(typeWriter, 1000);

/* =========================================
   6. GOOGLE SEARCH API & SUGGESTIONS
   ========================================= */
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
    debounceTimer = setTimeout(() => fetchSuggestions(searchInput.value), 150);
});

clearBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    searchInput.value = '';
    clearBtn.style.display = 'none';
    suggestions.style.display = 'none';
    searchInput.focus();
    typeWriter();
});

window.handleGoogleSuggestions = function(data) {
    const results = data[1];
    if (!results || results.length === 0) { suggestions.style.display = 'none'; return; }
    currentFocus = -1;
    suggestions.innerHTML = results.map((item, index) => 
        `<li id="sug-${index}" onmousedown="searchGo('${item}')">
            <svg viewBox="0 0 24 24"><path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"/></svg>
            <span style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${item}</span>
        </li>`
    ).join('');
    suggestions.style.display = 'block';
};

function fetchSuggestions(query) {
    if (!query.trim()) { suggestions.style.display = 'none'; return; }
    const script = document.createElement('script');
    script.src = `https://suggestqueries.google.com/complete/search?client=chrome&q=${encodeURIComponent(query)}&callback=handleGoogleSuggestions`;
    document.body.appendChild(script);
    script.onload = () => document.body.removeChild(script);
}

/* =========================================
   7. KEYBOARD NAVIGATION & BUG FIXES
   ========================================= */
searchInput.addEventListener('keydown', function(e) {
    let x = document.getElementById("suggestions");
    if (x) x = x.getElementsByTagName("li");
    if (e.key === 'ArrowDown') { currentFocus++; addActive(x); } 
    else if (e.key === 'ArrowUp') { currentFocus--; addActive(x); } 
    else if (e.key === 'Enter') {
        e.preventDefault();
        if (currentFocus > -1 && x) { x[currentFocus].dispatchEvent(new MouseEvent('mousedown')); } 
        else {
            let val = searchInput.value.trim();
            if (val) {
                if (val.includes('.') && !val.includes(' ')) { openInBrowser(val.startsWith('http') ? val : 'https://' + val); } 
                else { searchGo(val); }
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
window.addEventListener('scroll', () => {
    if (document.activeElement === searchInput) { searchInput.blur(); }
}, { passive: true });
