# CodeCanvas

A powerful online code editor for HTML, CSS, and JavaScript with real-time preview. Write code and see the results instantly!

## Features

- Real-time code editing with syntax highlighting
- Live preview with automatic updates
- Collapsible editor panes for better focus
- Local storage - your code saves automatically
- Clean, modern UI built with Tailwind CSS
- Sandboxed preview environment for safe JavaScript execution

## Technologies Used

- React 19.2.0
- Vite 7.2.2
- CodeMirror 5 with react-codemirror2
- Tailwind CSS 4.1.17
- React Router DOM 7.9.6
- Font Awesome

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

## Installation

Clone the repository
```bash
git clone https://github.com/yourusername/code-canvas.git
cd code-canvas
```

Install dependencies
```bash
npm install
```

Start the development server
```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173`

## Build for Production

```bash
npm run build
```

Build files will be generated in the `dist` folder.

## Project Structure

```
code-canvas/
├── public/
│   └── icon.png
├── src/
│   ├── assets/
│   │   ├── background.gif
│   │   ├── css.png
│   │   ├── html.png
│   │   ├── img.svg
│   │   └── js.png
│   ├── components/
│   │   └── Editor.jsx
│   ├── hooks/
│   │   └── useLocalStorage.js
│   ├── pages/
│   │   ├── App.jsx
│   │   └── Home.jsx
│   ├── styles/
│   │   ├── codemirror.css
│   │   └── index.css
│   ├── Index.jsx
│   └── main.jsx
├── package.json
└── vite.config.js
```

## License

MIT

## Author

Your Name