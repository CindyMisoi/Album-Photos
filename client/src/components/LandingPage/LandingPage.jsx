import React from "react";
import "../../css/LandingPage.css";
import photo from "../../assets/photo-album.jpg";
import { BsCardChecklist } from "react-icons/bs";
import { AiOutlineTeam } from "react-icons/ai";
import { MdAssignment } from "react-icons/md";
import { Button } from "@material-ui/core";
import Logo from "../../assets/Logo";
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa';
import { MdOutlineEmail } from "react-icons/md";
// import { Link } from 'react-router-dom'

const LandingPage = () => {
    return (
        <>
        <div style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            right: "0px",
            bottom: "0px",
            backgroundImage: `linear-gradient(to top right, #2D3947, #151B26)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            display: "flex",
            height: "100%",
            zIndex: "-2",
            overflow: "hidden",
        }}>
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${photo})` }}></div>
        </div>

        
        <div className="landing-container px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 mx-auto">
        <div className="landing-nav-container flex justify-between items-center py-2 sm:py-4 md:py-6 lg:py-8 xl:py-10">
                <div className="landing-nav-logo" style={{paddingTop: "7px"}}>
                    {/* <Link to="/"> */}
                        <Logo/>
                    {/* </Link> */}
                </div>
                <div className="landing-nav-sessions flex flex-row items-center">
                    <div className="mr-2 sm:mr-4">
                          {/* <Link to="/"> */}
                        <button className="landing-nav-login--button px-3 py-2 text-sm sm:text-base">Login</button>
                        {/* </Link> */}
                    </div>
                    <div>
                        {/* <Link to="/"> */}
                        <button className="landing-nav-register--button px-3 py-2 text-sm sm:text-base">Register</button>
                        {/* </Link> */}
                    </div>
                </div>


            </div>
            <div className="landing-main py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12">
            <div className="landing-message w-3/5 mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12">
                <h2 className="text-lg sm:text-lg lg:text-2lg mb-4 sm:w-2/5 lg:w-3/5">Foto. Where Memories Come to Life</h2>
                <h3 className="text-sm sm:text-base lg:text-lg mb-4 sm:w-2/5 lg:w-3/5">Each moment captured is a story waiting to be told, and we're here to bring those stories to life. With our expertly crafted photo albums, every smile, every laugh, and every adventure is preserved in stunning detail, ready to be cherished for years to come.</h3>
                <div className="flex justify-center sm:justify-start">
                    <button className="landing-message--button hover:bg-orange-200 text-white font-bold py-2 px-4 rounded-lg text-sm sm:text-base lg:text-lg">Get Started</button>
                </div>
            </div>



            <div className="bg-gray-400 w-full fixed bottom-0 py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12">
          <div className="landing-main-bottom mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 fadeInBottom">
        <div className="landing-main-bottom-icons-container flex flex-col sm:flex-row justify-center sm:justify-between">
            <div className="icon-container mb-4 sm:mb-0 sm:mr-8">
                <Logo/>
            </div>
            <div className="icon-container mb-4 sm:mb-0 sm:mr-8">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">Address:</h2>
                <p className="text-sm text-gray-700">Nairobi, 00100</p>
            </div>
            <div className="icon-container mb-4 sm:mb-0 sm:mr-8">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">Call:</h2>
                <p className="text-sm text-gray-700">+254 726 1606 39</p>
            </div>
            <div className="icon-container mb-4 sm:mb-0 sm:mr-8">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">Social Links:</h2>
                <div className="social-links flex flex-col sm:flex-row">
                    <a href="https://www.facebook.com" className="flex items-center mb-2 mr-4 sm:mb-0">
                        <FaFacebookSquare className="text-xl text-blue-600 mr-2" />
                        <span className="text-sm text-gray-700">Facebook</span>
                    </a>
                    <a href="https://www.twitter.com" className="flex items-center mb-2 mr-4 sm:mb-0">
                        <FaTwitterSquare className="text-xl text-blue-400 mr-2" />
                        <span className="text-sm text-gray-700">Twitter</span>
                    </a>
                    <a href="https://www.instagram.com" className="flex items-center mb-2 sm:mb-0">
                        <FaInstagramSquare className="text-xl text-pink-600 mr-2" />
                        <span className="text-sm text-gray-700">Instagram</span>
                    </a>
                </div>
            </div>
            <div className="icon-container">
                <div className="email-wrapper">
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">Email:</h2>
                </div>
                <div className="email-info">
                    <p className="flex items-center text-sm text-gray-700">
                        <MdOutlineEmail className="text-xl mr-2" />
                        <span>foto@gmail.com</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>

            </div>
        </div>
        </>
    );
};

export default LandingPage;
