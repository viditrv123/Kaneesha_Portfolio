import React from 'react';
import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const Footer=()=>{
    return(<div style={{"backgroundColor":"#00100B", "padding":"0px"}}>
    <br />
    <h3 style={{"font-family": "'Pattaya', 'sans-serif'","color":"white","textAlign":"center"}}>Contact Details</h3>
    <br />
    <div className="row">
    <div className="col-md-4">
        <div class="center">
        <MailIcon style={{"color":"white"}}></MailIcon>
        <p style={{"font-family": "'Montserrat', 'sans-serif'","color":"white", "fontSize":"8px"}}>kaneesha98@gmail.com</p>
        </div>
    </div>
    <div className="col-md-4">
        <div class="center">
        <LinkedInIcon style={{"color":"white"}}></LinkedInIcon>
        <a href="https://www.linkedin.com/in/kaneesha-gandhi/"><p style={{"font-family": "'Montserrat', 'sans-serif'","color":"white" ,"fontSize":"8px"}}>https://www.linkedin.com/in/kaneesha-gandhi/</p></a>
        </div>
    </div>
    <div className="col-md-4">
        <div class="center">
        <GitHubIcon style={{"color":"white"}}></GitHubIcon>
        <a href="https://github.com/kaneesha98"><p style={{"font-family": "'Montserrat', 'sans-serif'","color":"white", "fontSize":"8px"}}>https://github.com/kaneesha98</p></a>
        </div>
    </div>
    </div>
    </div>);
}
export default Footer;