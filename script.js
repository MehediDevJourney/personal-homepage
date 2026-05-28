/* =========================================
   1. APP CONFIGURATION (EDIT THIS TO ADD APPS)
   ========================================= */
const appsConfig = [
    {
        name: 'Facebook',
        url: 'https://www.facebook.com',
        icon: '<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>'
    },
    {
        name: 'YouTube',
        url: 'https://m.youtube.com/?persist_app=1&app=m',
        icon: '<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>'
    },
    {
        name: 'Telegram',
        url: 'https://web.telegram.org',
        icon: '<path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0zm5.82 8.414l-1.956 9.213c-.146.657-.535.818-1.08.513l-2.983-2.197-1.44 1.385c-.159.159-.293.293-.602.293l.213-3.03 5.516-4.981c.24-.213-.053-.332-.373-.118l-6.82 4.293-2.936-.917c-.638-.199-.652-.638.133-.948l11.48-4.425c.532-.199 1.01.118.848 1.018z"/>'
    },
    {
        name: 'ChatGPT',
        url: 'https://chatgpt.com',
        icon: '<path d="M22.28 9.82a6.01 6.01 0 0 0-7.02-7.81 6.01 6.01 0 0 0-10.28 2.9A6.01 6.01 0 0 0 4.18 20.3a6.01 6.01 0 0 0 10.28 2.9 6.01 6.01 0 0 0 7.82-13.38zM12 21.8c-1.5 0-2.9-.6-3.9-1.6l8.8-5.1v5.6c-.6 0-1.2.1-1.8.1v-2l-3.1 1.8v1.2zm-7.7-4.4c-.6-1-1-2.2-1-3.4 0-.3 0-.6.1-.9l8.8 5.1-2.8 4.8c-.8-.5-1.5-1.2-2-2L9.2 17l-1.5-2.6-2.5 1.5v1.5zm-1.1-7.9c.7-1.3 1.8-2.3 3.1-2.9l4.5 7.7H2.1c.1-.6.3-1.2.6-1.8l2.5-1.5v-3l-2 1.5zm10.5-6.3c1.5 0 2.9.6 3.9 1.6L8.8 9.9V4.3c.6 0 1.2-.1 1.8-.1v2l3.1-1.8V3.2zm7.7 4.4c.6 1 1 2.2 1 3.4 0 .3 0 .6-.1.9l-8.8-5.1 2.8-4.8c.8.5 1.5 1.2 2 2l1.9 4.1 1.5 2.6 2.5-1.5V9.1zm1.1 7.9c-.7 1.3-1.8 2.3-3.1 2.9L13.2 12h8.7c-.1.6-.3 1.2-.6 1.8l-2.5 1.5v3l2-1.5z"/>'
    },
    {
        name: 'Gemini',
        url: 'https://gemini.google.com',
        icon: '<path d="M19.742 9.539a25.048 25.048 0 0 0-6.196-2.585A25.264 25.264 0 0 0 10.96 1.05a1.144 1.144 0 0 0-1.921 0 25.264 25.264 0 0 0-2.585 5.904 25.048 25.048 0 0 0-6.196 2.585 1.144 1.144 0 0 0 0 1.921 25.048 25.048 0 0 0 6.196 2.585 25.264 25.264 0 0 0 2.585 5.904 1.144 1.144 0 0 0 1.921 0 25.264 25.264 0 0 0 2.585-5.904 25.048 25.048 0 0 0 6.196-2.585 1.144 1.144 0 0 0 0-1.921z"/>'
    },
    {
        name: 'DeepSeek',
        url: 'https://chat.deepseek.com',
        icon: '<path d="M22 13c0-2.2-1.8-4-4-4-.1 0-.3 0-.4.1C16.2 5.5 12.8 3 8.8 3 4.5 3 1 6.5 1 10.8c0 3.1 1.8 5.8 4.6 7 .6.2 1.3.3 2 .3h8.4c2.8 0 5-2.2 5-5zM8.8 16c-1.3 0-2.4-.6-3.2-1.5C4.7 13.5 4 12.2 4 10.8c0-2.6 2.1-4.8 4.8-4.8s4.8 2.1 4.8 4.8-2.1 4.8-4.8 4.8zm7.2.5h-3.4c.5-1 .8-2.1.8-3.3 0-.6-.1-1.2-.2-1.7 1-.7 2.3-.9 3.5-.6C17.7 11.2 19 12 19 13c0 1.1-.9 2-2 2h-.2z"/>'
    },
    {
        name: 'GitHub',
        url: 'https://github.com',
        icon: '<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>'
    },
    {
        name: 'W3Schools',
        url: 'https://www.w3schools.com',
        icon: '<path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>'
    }
];

/* =========================================
   2. INITIALIZE APPS GRID
   ========================================= */
const appsGrid = document.getElementById('appsGrid');
appsConfig.forEach(app => {
    const appHTML = `
        <div class="app-container" onclick="openInBrowser('${app.url}')">
            <div class="app-icon-box">
                <svg viewBox="0 0 24 24">${app.icon}</svg>
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
   4. LIVE CLOCK & GREETING
   ========================================= */
function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    let greeting = 'Good Evening';
    if (hours >= 5 && hours < 12) greeting = 'Good Morning';
    else if (hours >= 12 && hours < 18) greeting = 'Good Afternoon';
    
    // Modify "Mehedi" here if someone else uses it!
    document.getElementById('greetingText').innerText = `${greeting}, Mehedi!`;

    hours = hours % 12 || 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById('clock').innerText = `${hours}:${minutes} ${ampm}`;
}
setInterval(updateTime, 1000);
updateTime();

/* =========================================
   5. DYNAMIC TYPEWRITER PLACEHOLDER
   ========================================= */
const searchInput = document.getElementById('searchInput');
const placeholderTexts = ["Search the web...", "Type a URL...", "Ask ChatGPT...", "Go to Facebook...", "Learn HTML..."];
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
