# 🚀 Premium Workspace Startpage

A highly customizable, ultra-fast, and aesthetic custom homepage/startpage for your browser. Built with modern Glassmorphism UI, heavily inspired by macOS and iOS design principles.

## ✨ Features

- **🎨 Glassmorphism Design:** Beautiful translucent effects with animated mesh gradients.
- **🌓 Dark/Light Mode:** Seamless toggle with `localStorage` memory.
- **🔍 Live Google Suggestions:** Real-time search autocomplete using Google's official API.
- **⌨️ Keyboard Navigation:** Navigate search suggestions using Up/Down arrow keys.
- **📱 Fully Responsive:** Looks perfect on both desktop monitors and mobile devices.
- **⚡ Zero Bloat:** Built with pure HTML, CSS, and Vanilla JavaScript. No heavy libraries.
- **🤖 Dynamic Typewriter:** Animated placeholder texts in the search bar.

## 🛠️ Installation & Setup

You can easily host this on **GitHub Pages** for free and set it as your browser's homepage!

1. **Fork this repository** to your own GitHub account.
2. Go to your repository settings > **Pages**.
3. Under "Build and deployment", select the `main` branch and click **Save**.
4. In a few minutes, your site will be live at `https://yourusername.github.io/repository-name/`.
5. Open your browser settings (Chrome/Brave/Edge) and set this URL as your Startup Page or Homepage.

## ⚙️ Customization (How to add your own Apps)

You don't need to touch the HTML to add or remove apps! Simply open `script.js` and edit the `appsConfig` array at the top of the file:

```javascript
const appsConfig = [
    {
        name: 'My Website',
        url: '[https://mywebsite.com](https://mywebsite.com)',
        icon: '<path d="YOUR_SVG_PATH_HERE"/>'
    }
    // Add more apps here...
];
