import React from 'react'
import footer from './footer.module.css'
import {BsFacebook,BsInstagram,BsLinkedin,BsTwitter,BsGithub,BsHeartFill} from 'react-icons/bs'
import { GiCoffeeCup } from "react-icons/gi";
import { MdEmail } from "react-icons/md";



function Footer() {
    return (
        <div>
            <div className={footer.connectat}>
                <b>Connect Me @</b>
                <br/><br/>
                <a href=""><BsFacebook/></a>
                <a href=""><BsInstagram/></a>
                <a href=""><BsLinkedin/></a>
                <br/><br/>
                <a href=""><BsGithub/></a>
                <a href=""><BsTwitter/></a>
                <a href=""><MdEmail/></a>
            </div>
            
            <div className={footer.footer_container}>
                <br/>
                <b className={footer.copyrights}>
                    © Yashodip Jain 2021, All Rights Reserved
                </b>
                <br/>
                <span className={footer.watermark}>
                    Made with <BsHeartFill/> & <GiCoffeeCup/> in Dhule Maharashtra India.
                </span>
                <br/>
            </div>
        </div>
    )
}

export default Footer
