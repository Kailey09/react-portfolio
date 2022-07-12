import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../styles/Footer.css";

function Footer() {
    return (
        <div className='footer'>
            <div>
                <div className='soicalMedia'>
                    <GitHubIcon /> 
                    <LinkedInIcon />
                </div>
                <p> &copy; 2022</p>
            </div>
        </div>
    )
}

export default Footer;