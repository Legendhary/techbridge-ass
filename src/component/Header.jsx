import React from 'react';
import Image from "./asset/825001c8a5b9b54e0d5b82ffe5556b22.png"; 
import "../component/Style.css"

function Header() {
    console.log(Image); // Log the path to confirm the import
    return (
        // Header component with an image and a title
        
        <div className="header">
        <div>
            <img className='img' src={Image} alt="Header banner" />
        </div>
        <div className='headcenter'>
        <ul>Companies</ul>
        <ul>Candidates</ul>
        <ul>Assessment</ul>
        <ul>Post a Job</ul>
        <ul>Career Advice</ul>
        </div>
        
        

        <div className='sign'>
        <div>Sign Up</div>
        <div>Log In</div>
        </div>
        </div>
    );
}

export default Header;
