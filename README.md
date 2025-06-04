# Health guide (or in swedish: Hälsoguide!)!

## Overview: 
A playful project to try out some techniques.

## Description:
This application provides a simple health guide, with some categories and subcategories. 

It is a modern, accessible web application built with React, TypeScript, and Vite build tool. 

With this project, I wanted to play around with 
- an interactive navigation (collapsible menu built with React state management),
- dynamic routing (using react-router-dom), e.g. ´/health/:area/:articleId´,
- search functionality (client-side) with input sanitization (using sanitize-html),
- a language toggle: Swedish (default)/English translations (using i18next and react-i18next),
- a light/dark mode toggle (theme toggled with help of local storage),
- accessibility and compliance with WCAG-guidelines (semantic HTML, ARIA attributes, and keyboard navigation),
- styling with tailwind css.

## Deployed with GitHub Actions
Visit the deployed app [here](https://ayngie.github.io/health-guide/) :)
## Installation
To run this project locally:

Clone the repository
```
git clone https://github.com/Ayngie/health-guide.git
```

Navigate to the project directory
```
cd health-guide
```

Install dependencies
```
npm install
```

Start the server
```
npm run dev
```

And check it out in your localhost :) 
