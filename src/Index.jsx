import React, { useState } from 'react'
import App from './pages/App';
import Home from './pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/app",
        element: <App />,
    },
]);




function Index() {

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
}

export default Index