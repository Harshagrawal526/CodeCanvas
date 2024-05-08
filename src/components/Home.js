import React from 'react'

function Home({ val, fun }) {
  return (
    <div className='Home'>
    <header className='Home'>
        <h1 className='Home'>Welcome to Code Canvas</h1>
        <p>A powerful online code editor for HTML, CSS, and JavaScript.</p>
    </header>
    <main className='Home'>
        <section className="f Home">
            <h2 className='Home'>Language Supported</h2>
        <div className="icon-container Home">
            <div className="icon h Home"><div className='Home image-container-html'/><p className="text Home">HTML</p></div>
            <div className="icon Home"><div className='Home image-container-css'/><p className="text Home">CSS</p></div>
            <div className="icon Home"><div className='Home image-container-js'/><p className="text Home">JavaScript</p></div>
        </div>
        </section>
        <button onClick={fun} id="start-editing" className='Home'>Start Editing</button>
        <section className='Home'>
            <h2>Features</h2>
            <ul className='Home'>
                <li className='Home'>
                    <span className='Home'>Real-time Syntax Highlighting</span>
                    <p className='Home'>Get real-time feedback on your code as you type, with syntax highlighting for HTML, CSS, and JavaScript. This helps you quickly identify syntax errors and ensures that your code is clean and easy to read.</p>
                </li>
                <li className='Home'>
                    <span className='Home'>Live Preview and Testing</span>
                    <p className='Home'>See your changes in real-time with a live preview of your HTML and CSS, and test your JavaScript with the built-in console. This helps you quickly identify and fix bugs, and ensures that your code is working as expected.</p>
                </li>
                <li className='Home'>
                    <span className='Home'>User Authentication (coming soon)</span>
                    <p className='Home'>Implement secure user login and account management functionality. Users can create accounts, log in securely, and personalize their experience. This feature enhances security and allows users to access exclusive content and track their activity on the platform.</p>
                </li>
            </ul>
        </section>
    </main>
    <footer className='Home'>
        <p className='Home'>&copy; 2024 CodeCanvas. All rights reserved.</p>
    </footer>
    </div>
  )
}

export default Home