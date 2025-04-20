import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Sidebar = () => {
    return (
        <div className="fixed left-0 top-0 w-64 bg-gray-800 text-white p-4 h-full">
        <h2 className="text-2xl font-bold mb-4">My Sidebar</h2>
        <ul className="space-y-4">
            <li>
                <Link to="/" className="hover:text-blue-400">Home</Link>
            </li>
            <li>
                <Link to="/quiz" className="hover:text-blue-400">Quiz</Link>
            </li>
        </ul>
        </div>
    )
}


export default Sidebar;