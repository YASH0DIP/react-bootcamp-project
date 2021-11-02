import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import home from './home.module.css'
import Fallback from './Fallback'
import BCA101 from './BCA101'
import BCA102 from './BCA102'
import BCA103 from './BCA103' 
import BCA104 from './BCA104'
import { FaCss3, FaCuttlefish, FaDownload, FaHtml5, FaJava, FaJsSquare, FaNodeJs, FaPhp } from "react-icons/fa";
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'


function Home() {
    return (
    <Router>
        <div>   
            <Navbar/>
            <br/>
            <div className={home.home_body}>
                <br/>
                <div className={home.main_title}>
                    BCA(Bachelor in Computer Application)
                </div>
                <br/>
                <div className={home.intro_icons}>
                        <FaHtml5/><span> </span>
                        <FaCss3/><span> </span>
                        <FaJsSquare/><span> </span>
                        <FaPhp/><span> </span>
                        <FaCuttlefish/><span> </span>
                        <FaJava/><span> </span>
                        <FaNodeJs/><span> </span>
                </div>
                <br/>
                <div className={home.intro_div}>
                    <p className={home.intro_para}>
                        Here We Are Giving You An Entire Notes Of B.C.A. According to the Syllabus of KBC North Maharashtra University
                    </p>
                    <br/>
                    <a className={home.syllabus_link} href="docs/syllabus.pdf" download>
                        <FaDownload/> SYLLABUS OF B.C.A.
                    </a>
                </div>
                <br/> 
                <div className={home.bca_sem_one}>
                    <h1>FYBCA SEM I</h1>
                    <NavLink activeClassName="active" to="/BCA101" className={home.subjects}>
                        BCA101 Foundation Course For Managers
                    </NavLink>
                    <Route exact path="/bca101" component={BCA101}/>
                    <br/>

                    <NavLink activeClassName="active" to="/BCA102" className={home.subjects}>
                        BCA102 Computer Fundament and Networking
                    </NavLink>
                    <Route exact path="/bca102" component={BCA102}/>
                    <br/>

                    <NavLink activeClassName="active" to="/BCA103" className={home.subjects}>
                        BCA103 Essential of Web Design-I
                    </NavLink>
                    <Route exact path="/bca103" component={BCA103}/>
                    <br/>

                    <NavLink exact activeClassName="active" to="/BCA104" className={home.subjects}>
                        BCA104 Programming in C
                    </NavLink>
                    <Route exact path="/bca104" component={BCA104}/>
                    <br/>

                    <NavLink activeClassName="active" to="/Fallback/1" className={home.subjects}>
                        BCA105 Practical On C Programming
                    </NavLink>
                    <Route path="/fallback/1" component={Fallback}/>
                    <br/>

                    <NavLink activeClassName="active" to="/Fallback/2" className={home.subjects}>
                        BCA106 Practical On Web Devlopement
                    </NavLink>
                    <Route path="/fallback/2" component={Fallback}/>
                    <br/>

                    <NavLink activeClassName="active" to="/Fallback/3" className={home.subjects}>
                        BCA107 Practical On MS-DOS
                    </NavLink>
                    <Route path="/fallback/3" component={Fallback}/>
                    <br/>
                </div>
            </div>
            <Footer/>
        </div>
    </Router>
    )
}

export default Home
