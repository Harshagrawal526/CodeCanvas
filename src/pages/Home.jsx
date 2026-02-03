import React from 'react'
import htmlImg from '../assets/html.png'
import cssImg from '../assets/css.png'
import jsImg from '../assets/js.png'
import { Link } from 'react-router-dom'


function Home() {
    return (
        <div className='font-sans h-screen flex flex-col justify-between'>
            <header className='bg-[#243c4c] text-center text-xl text-white p-5 '>
                <h1 className='font-sans text-4xl mb-2.5'>Welcome to CodeCanvas</h1>
                <p>A powerful online code editor for HTML, CSS, and JavaScript.</p>
            </header>
            <main className='bg-cover flex flex-col items-center p-5 h-full bg-[#bde6e0]'>
                <section className='text-center bg-[#5e8ca5] shadow-lg w-4/12 mb-5 p-5 rounded-2xl text-white'>
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
                <button className='bg-[#105888] font-semibold  text-white uppercase cursor-pointer  mb-5 px-5 py-2.5 rounded-full hover:bg-[#2a81bb] transition-all duration-200'> <Link to="/app">Start Editing</Link></button>
                <section className='text-center bg-[#556e7b] shadow-lg w-8/12 mb-5 p-5 rounded-2xl text-white'>
                    <h2 className='text-[28px] mb-5'>Features</h2>
                    <ul className='list-none flex justify-between w-full p-2'>
                        <li className='mb-5 w-[30%] bg-[#9aa9ac] text-white p-3 rounded-2xl flex flex-col justify-between gap-2'>
                            <span className='block text-xl font-bold  mb-2.5'>Live Syntax Highlighting</span>
                            <p className='text-base '>Get real-time feedback on your code as you type, with syntax highlighting for HTML, CSS, and JavaScript. This helps you quickly identify syntax errors and ensures that your code is clean and easy to read.</p>
                        </li>
                        <li className='mb-5 w-[30%] bg-[#9aa9ac] text-white p-3 rounded-2xl flex flex-col justify-between gap-2'>
                            <span className='block text-xl font-bold mb-2.5'>Live Preview and Testing</span>
                            <p className='text-base '>See your changes in real-time with a live preview of your HTML and CSS, and test your JavaScript with the built-in console. This helps you quickly identify and fix bugs, and ensures that your code is working as expected.</p>
                        </li>
                        <li className='mb-5 w-[30%] bg-[#9aa9ac] text-white p-3 rounded-2xl flex flex-col justify-between gap-2'>
                            <p className='block text-xl  font-bold mb-2.5'>Collapsible Editor Panels</p>
                            <p className='text-base '>Collapse or expand code editors to maximize your workspace. Work in a single language or view all three at once—the flexible layout adapts to your workflow and gives more room to the code you’re focused on.</p>
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