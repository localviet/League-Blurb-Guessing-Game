import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
//"fixed left-0 top-0 w-64 bg-gray-800 text-white p-4 h-full"
const Sidebar = () => {
    return (
        <div className="
                 bg-gray-800 text-white p-4 text-3xl
                w-full h-64 top-0 left-0            // Default mobile: full-width top bar
                md:w-64 md:h-full md:top-0 md:left-0 md:fixed // Desktop: sidebar on the left
                ">
            <h2 className="text-2xl font-bold mb-4">My Sidebar</h2>
            <ul className="space-y-4">
                <li>
                    <Link to="/" className="hover:text-blue-400">Home</Link>
                </li>
                <li>
                    <Link to="/quiz" className="hover:text-blue-400">Quiz</Link>
                </li>
            </ul>
            <p className='mt-8'>This project was made by <br /><b>Khang H.</b></p>
        </div>
    )
}


export default Sidebar;