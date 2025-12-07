import React from 'react'
import htmlImg from '../assets/html.png'
import cssImg from '../assets/css.png'
import jsImg from '../assets/js.png'
import bgImg from '../assets/background.gif'
import { Link } from 'react-router-dom'


function Home() {
    return (
        <div className='font-sans h-screen flex flex-col justify-between'>
            <header className='bg-[#b9e567] border border-solid border-[#2c660d] text-center text-xl text-[rgb(19,52,5)] p-5 '>
                <h1 className='font-sans text-4xl mb-2.5'>Welcome to CodeCanvas</h1>
                <p>A powerful online code editor for HTML, CSS, and JavaScript.</p>
            </header>
            <main className='bg-cover flex flex-col items-center p-5 h-full' style={{ backgroundImage: `url(${bgImg})` }}>
                <section className='border border-black text-center bg-[#f7dbe4] shadow-lg w-4/12 mb-5 p-5 rounded'>
                    <h2 className='text-[28px] mb-5'>Languages Supported</h2>
                    <div className='flex justify-between ' >
                        <div className='mr-10 ml-10' >
                            <div className='h-[75px] w-[75px] bg-contain bg-no-repeat' style={{ backgroundImage: `url(${htmlImg})` }} />
                            <p className='text-xl' >HTML</p>
                        </div>
                        <div className='mr-10' >
                            <div className='h-[75px] w-[75px] bg-contain bg-no-repeat' style={{ backgroundImage: `url(${cssImg})` }} />
                            <p className='text-xl' >CSS</p>
                        </div>
                        <div className='mr-10' >
                            <div className='h-[75px] w-[75px] bg-contain bg-no-repeat' style={{ backgroundImage: `url(${jsImg})` }} />
                            <p className='text-xl' >JavaScript</p>
                        </div>
                    </div>
                </section>
                <button className='bg-[#007bff] border border-blue-700 text-white uppercase cursor-pointer  mb-5 px-5 py-2.5 rounded animate-pulse'> <Link to="/app">Start Editing</Link></button>
                <section className='text-center bg-[#efef75] shadow-lg w-8/12 mb-5 p-5 rounded-2xl'>
                    <h2 className='text-[28px] mb-5'>Features</h2>
                    <ul className='list-none flex justify-between w-full p-2'>
                        <li className='mb-5 w-[30%] bg-[#c7c760] p-3 rounded-2xl'>
                            <span className='block text-l font-bold text-[#333] mb-2.5'>Real-time Syntax Highlighting</span>
                            <p className='text-base text-[#220909e8]'>Get real-time feedback on your code as you type, with syntax highlighting for HTML, CSS, and JavaScript. This helps you quickly identify syntax errors and ensures that your code is clean and easy to read.</p>
                        </li>
                        <li className='mb-5 w-[30%] bg-[#c7c760] p-3 rounded-2xl'>
                            <span className='block text-l font-bold text-[#333] mb-2.5'>Live Preview and Testing</span>
                            <p className='text-base text-[#220909e8]'>See your changes in real-time with a live preview of your HTML and CSS, and test your JavaScript with the built-in console. This helps you quickly identify and fix bugs, and ensures that your code is working as expected.</p>
                        </li>
                        <li className='mb-5 w-[30%] bg-[#c7c760] p-3 rounded-2xl'>
                            <span className='block text-l font-bold text-[#333] mb-2.5'>User Authentication (coming soon)</span>
                            <p className='text-base text-[#220909e8]'>Implement secure user login and account management functionality. Users can create accounts, log in securely, and personalize their experience. This feature enhances security and allows users to access exclusive content and track their activity on the platform.</p>
                        </li>
                    </ul>
                </section>
            </main>
            <footer className='bg-[#333] text-white'>
                <p className='text-[19px]'>&copy; 2024 CodeCanvas. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default Home