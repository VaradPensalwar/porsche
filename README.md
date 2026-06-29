# Porsche 911 GT3 RS - 3D Showcase

A high-performance, interactive 3D web experience showcasing the Porsche 911 GT3 RS using native HTML, CSS, and JavaScript.

🌐 **Live Link:** [porsche-911-gt3-rs.vercel.app](https://porsche-911-gt3-rs.vercel.app/)[cite: 4]

---

## About The Project

This project is an immersive digital presentation designed with a custom 3D slider. It features a fluid, interactive 3D video carousel built entirely without heavy external libraries, utilizing native DOM manipulation and CSS 3D transforms[cite: 4].

---

## Features

* 🎨 Custom typography utilizing imported 'ICA Rubrik' and 'Poppins' fonts[cite: 4]
* 📱 Fully responsive design with tailored media queries for desktop, tablet (max-width: 1023px), and mobile (max-width: 767px) displays[cite: 4]
* 🏎️ Interactive 3D video carousel rendering 10 dynamically positioned items[cite: 4]
* 🔄 Automatic continuous rotation loop driven by JavaScript interval timings[cite: 4]
* 🖐️ Touch and mouse drag event listeners implemented for manual rotation control across devices[cite: 4]
* 🎥 Seamless inline video playback using HTML5 `<video>` tags featuring `autoplay`, `muted`, and `loop` attributes[cite: 4]
* ✨ Hardware-accelerated CSS3 3D transformations including `perspective`, `rotateX`, `rotateY`, and `translateZ`[cite: 4]

---

## Tech Stack

* **HTML5** – Semantic structure and native video embedding[cite: 4]
* **CSS3** – 3D transformations, styling, responsive media queries, and custom CSS variables (`--quantity`, `--position`)[cite: 4]
* **Vanilla JavaScript** – Dynamic interactions, touch/mouse drag event calculations, and auto-play interval state management[cite: 4]

---

## Project Structure

```bash
Porsche/
├── images/
│   ├── bg.png                      # Main background styling texture[cite: 4]
│   ├── Porsche.png                 # Website favicon icon[cite: 4]
│   ├── Porsche_911_GT3_RS_10.jpg   # Desktop background model image[cite: 4]
│   └── Porsche_911_GT3_RS_FOR_MOBILE.png # Mobile-specific background image[cite: 4]
├── videos/                         # Directory containing 10 MP4 video files for the carousel[cite: 4]
├── .gitattributes                  # Auto detect text files and perform LF normalization[cite: 4]
├── .gitignore                      # Ignored files and directories tracking[cite: 4]
├── index.html                      # Main landing page containing the DOM structure and JS logic[cite: 4]
├── README.md                       # Project documentation[cite: 4]
└── style.css                       # Core styling, responsive layouts, and 3D positioning logic[cite: 4]
