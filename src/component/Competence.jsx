import { useEffect } from 'react';
import '../css/styles.css'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { } from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery'
import { FaAd, FaAngleLeft, FaArrowLeft, FaCode, FaCss3, FaCss3Alt, FaDatabase, FaDesktop, FaDiagnoses, FaGithub, FaGitlab, FaHtml5, FaInfo, FaJava, FaJs, FaLaravel, FaMobile, FaNode, FaNodeJs, FaPhotoVideo, FaPhp, FaPython, FaReact, FaSymfony, FaVuejs } from 'react-icons/fa'
import ScrollReveal from 'scrollreveal';

function Competence() {

    // const [nom, setNom] = useState('');

    // useEffect(() => {
    //     ScrollReveal().reveal(".gauche", {
    //         duration: 700,
    //         origin: "left",
    //         distance: "10px",
    //         delay: 600,
    //         reset: true,
    //     })
    //     ScrollReveal().reveal(".sar", {
    //         duration: 5000,
    //         origin: "top",
    //         distance: "10px",
    //         delay: 600,
    //         reset: true,
    //     })
    //     ScrollReveal().reveal(".sar5", {
    //         duration: 1000,
    //         origin: "top",
    //         distance: "10px",
    //         delay: 600,
    //         reset: true,
    //     })
    //     ScrollReveal().reveal(".gauche1", {
    //         duration: 3000,
    //         origin: "left",
    //         distance: "10px",
    //         delay: 700,
    //         reset: true,
    //     })
    //     ScrollReveal().reveal(".gauche2", {
    //         duration: 3200,
    //         origin: "left",
    //         distance: "50px",
    //         delay: 700,
    //         reset: true,
    //     })
    //     ScrollReveal().reveal(".gauche3", {
    //         duration: 3500,
    //         origin: "left",
    //         distance: "100px",
    //         delay: 700,
    //         reset: true,
    //     })
    //     ScrollReveal().reveal(".gauche4", {
    //         duration: 3500,
    //         origin: "left",
    //         distance: "150px",
    //         delay: 700,
    //         reset: true,
    //     })
    //     ScrollReveal().reveal(".droite", {
    //         duration: 1000,
    //         origin: "right",
    //         distance: "10px",
    //         delay: 700,
    //         reset: true,
    //     })
    //     ScrollReveal().reveal(".droite1", {
    //         duration: 3000,
    //         origin: "right",
    //         distance: "10px",
    //         delay: 700,
    //         reset: true,
    //     })
    //     ScrollReveal().reveal(".droite2", {
    //         duration: 3200,
    //         origin: "right",
    //         distance: "50px",
    //         delay: 700,
    //         reset: true,
    //     })
    //     ScrollReveal().reveal(".haut", {
    //         duration: 3000,
    //         origin: "top",
    //         distance: "10px",
    //         delay: 700,
    //         reset: true,
    //     })
    //     ScrollReveal().reveal(".haut1", {
    //         duration: 3200,
    //         origin: "top",
    //         distance: "10px",
    //         delay: 700,
    //         reset: true,
    //     })
    //     ScrollReveal().reveal(".bas", {
    //         duration: 1800,
    //         origin: "bottom",
    //         distance: "10px",
    //         delay: 700,
    //         reset: true,
    //     })
    //     ScrollReveal().reveal(".bas1", {
    //         duration: 1800,
    //         origin: "bottom",
    //         distance: "50px",
    //         delay: 700,
    //         reset: true,
    //     })
    //     ScrollReveal().reveal(".bas2", {
    //         duration: 2500,
    //         origin: "bottom",
    //         distance: "80px",
    //         delay: 700,
    //         reset: true,
    //     })
    //     ScrollReveal().reveal(".bas3", {
    //         duration: 3200,
    //         origin: "bottom",
    //         distance: "120px",
    //         delay: 700,
    //         reset: true,
    //     })
    //     ScrollReveal().reveal(".bas4", {
    //         duration: 3000,
    //         origin: "bottom",
    //         distance: "150px",
    //         delay: 700,
    //         reset: true,
    //     })
    //     ScrollReveal().reveal(".bas5", {
    //         duration: 3400,
    //         origin: "bottom",
    //         distance: "180px",
    //         delay: 700,
    //         reset: true,
    //     })
    // }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    }

    function Voir() {
        $('#comp0').animate({ left: "1vw" }, 1000);
        $('#comp1').animate({ left: "-150%" }, 500);
    }
    function deta() {
        $('#comp0').animate({ left: "1vw" }, 1000);
        $('#comp1').animate({ left: "-150%" }, 500);
    }
    function fe() {
        $('#comp0').animate({ left: "-150%" }, 500);
        $('#comp1').animate({ left: "1vw" }, 1000);
    }

    function front() {
        $('#front').css({ display: "block" }, 1000);
        $('#back').css({ display: "none" }, 1000);
        $('#design').css({ display: "none" }, 1000);
    }

    function back() {
        $('#front').css({ display: "none" }, 1000);
        $('#back').css({ display: "block" }, 1000);
        $('#design').css({ display: "none" }, 1000);
    }

    function design() {
        $('#front').css({ display: "none" }, 1000);
        $('#back').css({ display: "none" }, 1000);
        $('#design').css({ display: "block" }, 1000);
    }

    function front1() {
        $('#front1').css({ display: "block" }, 1000);
        $('#back1').css({ display: "none" }, 1000);
        $('#design1').css({ display: "none" }, 1000);
    }

    function back1() {
        $('#front1').css({ display: "none" }, 1000);
        $('#back1').css({ display: "block" }, 1000);
        $('#design1').css({ display: "none" }, 1000);
    }

    function design1() {
        $('#front1').css({ display: "none" }, 1000);
        $('#back1').css({ display: "none" }, 1000);
        $('#design1').css({ display: "block" }, 1000);
    }


    return (
        <>
            <img className='absolute w-[4vw] left-[75vw] top-[15vh]' src="sary/Ellipse 31.png" alt="" />
            <img className='absolute w-[4vw] left-[77vw] top-[112vh]' src="sary/Ellipse 31.png" alt="" />
            <img className='absolute w-[4vw] left-[25vw] top-[182vh]' src="sary/Ellipse 31.png" alt="" />
            <img id='font' className='absolute w-[60vw] z-0 left-[0vw] top-[102vh] opacity-[0.1] sar5' src="sary/left.png" alt="" />

            <div className="w-full mt-[8vh] sm:mt-[19vh] hidden md:block">
                <div className="mt-[10%] flex">
                    <div className='haut'>
                        <div className=" absolute p-[0.7rem] ml-[-10px] rounded-full haut bg-manga"></div>
                        <div className=" absolute p-[0.7rem] ml-[-10px] mt-[23vh] haut1  rounded-full bg-manga"></div>
                        <div className=" absolute p-[0.7rem] ml-[-10px] mt-[53vh] haut1  rounded-full bg-manga"></div>
                        <div className="h-[75vh] w-[0.1rem] bg-gray-600"></div>
                    </div>
                    <div className='lg:ml-[3vw]'>

                        <div className="w-full relative flex gap-5 droite2">
                            <div className=' ml-5 lg:ml-0'>
                                <div onClick={front} style={{ boxShadow: "-0px -0px 5px #507CFA" }} className="gauche1 col-span-6 rounded px-3 py-0 cursor-pointer ">
                                    <div className='flex justify-between mt-2'>
                                        <p className='text-[1.2rem] text-manga mt-2 font'>Frontend</p>
                                        <FaCode className='text-[1.7rem] mt-2 text-gray-500' />
                                    </div>
                                    <p className='text-[0.9rem] text-gray-600'>En utilisant React, VueJs pour le partie pour
                                        Web et React Native pour interface mobile</p>
                                    <p id='text1' className='text-[1.7rem]'>0 1</p>
                                </div>
                                <div onClick={back} style={{ boxShadow: "-0px -0px 5px #507CFA" }} className="gauche2 col-span-6 rounded px-3 py-0 cursor-pointer">
                                    <div className='flex justify-between mt-2'>
                                        <p className='text-[1.2rem] text-gray-400 mt-2 font'>Backend</p>
                                        <FaCode className='text-[1.7rem] mt-2 text-gray-500' />
                                    </div>
                                    <p className='text-[0.9rem] text-gray-600'>En utilisant Laravel,Symfony et Node Express</p>
                                    <p id='text1' className='text-[1.7rem]'>0 2</p>
                                </div>
                                <div onClick={design} style={{ boxShadow: "-0px -0px 5px #507CFA" }} className="gauche3 col-span-6 rounded px-3 py-0 cursor-pointer">
                                    <div className='flex justify-between mt-2'>
                                        <p className='text-[1.2rem] text-gray-400 mt-2 font'>Design et autres...</p>
                                        <FaDesktop className='text-[1.7rem] mt-2 text-gray-500' />
                                    </div>
                                    <p className='text-[0.9rem] text-gray-600'>En utilisant Adobe Photoshop , Figma et Adobe
                                        XD pour design UI/UX</p>
                                    <p id='text1' className='text-[1.7rem]'>0 3</p>
                                </div>
                            </div>



                            <div id='front' className=' col-span-6 p-2 ml-3'>
                                <p className='text-[1.2rem] text-gray-300 font'>Competences pour <span className='text-manga ml-3'>Frontend</span></p>
                                <div className="">
                                    <div className="w-20 rounded p-1 bg-manga"></div>
                                    <p className='text-manga mt-[-2.5vh] text-[0.9rem] ml-[7rem]'>Outils</p>
                                </div>
                                <div className="grid grid-cols-3 gap-x-[10rem] gap-y-5">
                                    <div className='text-center col-span-1 bas'>
                                        <FaReact className='text-[3.1rem] text-blue-500' />
                                        <p className='text-[0.9rem] text-gray-300'>ReactJs</p>
                                    </div>
                                    <div className='text-center col-span-1 bas1'>
                                        <FaHtml5 className='text-[3.1rem] text-orange-900' />
                                        <p className='text-[0.9rem] text-gray-300'>HTML</p>
                                    </div>
                                    <div className='text-center col-span-1 bas2'>
                                        <FaCss3Alt className='text-[3.1rem] text-blue-300' />
                                        <p className='text-[0.9rem] text-gray-300'>CSS</p>
                                    </div>
                                    <div className='text-center col-span-1 bas3'>
                                        <FaVuejs className='text-[3.1rem] text-green-400' />
                                        <p className='text-[0.9rem] text-gray-300'>VusJs</p>
                                    </div>
                                    <div className='text-center col-span-1 bas4'>
                                        <FaJs className='text-[3.1rem] text-blue-200' />
                                        <p className='text-[0.9rem] text-gray-300'>JavaScript</p>
                                    </div>
                                    <div className='text-center col-span-1 bas5'>
                                        <FaCss3 className='text-[3.1rem] text-blue-500' />
                                        <p className='text-[0.9rem] text-gray-300'>TailwindCss</p>
                                    </div>
                                </div>
                                <p className='text-gray-600 text-[0.9rem]'>Quelque captures des projet réaliser</p>
                                <div style={{ boxShadow: "-0px -0px 4px #507CFA" }} className="flex ml-4 w-[90%] text-center">
                                    <img src="sary/font.png" className='w-[15rem]' alt="" />
                                    <p className='mt-[2.8rem] text-manga text-[0.9rem]'>Gestion des réservations des places</p>
                                </div>
                            </div>



                            <div id='back' className='col-span-6 p-2 ml-3 hidden'>
                                <p className='text-[1.2rem] text-gray-300 font'>Competences pour <span className='text-manga ml-3'>Backend</span></p>
                                <div className="">
                                    <div className="w-20 rounded p-1 bg-manga"></div>
                                    <p className='text-manga mt-[-2.5vh] text-[0.9rem] ml-[7rem]'>Outils</p>
                                </div>
                                <div className="grid grid-cols-3 gap-x-[10rem] gap-y-5">
                                    <div className='text-center col-span-1'>
                                        <FaPhp className='text-[3.1rem] text-gray-400' />
                                        <p className='text-[0.9rem] text-gray-300'>PHP</p>
                                    </div>
                                    <div className='text-center col-span-1'>
                                        <FaLaravel className='text-[3.1rem] text-red-600' />
                                        <p className='text-[0.9rem] text-gray-300'>Laravel</p>
                                    </div>
                                    <div className='text-center col-span-1'>
                                        <FaNode className='text-[3.1rem] text-green-600' />
                                        <p className='text-[0.9rem] text-gray-300'>Node Express</p>
                                    </div>
                                    <div className='text-center col-span-1'>
                                        <FaSymfony className='text-[3.1rem] text-gray-600' />
                                        <p className='text-[0.9rem] text-gray-300'>Symfony</p>
                                    </div>
                                    <div className='text-center col-span-1'>
                                        <FaPython className='text-[3.1rem] text-blue-400' />
                                        <p className='text-[0.9rem] text-gray-300'>Python</p>
                                    </div>
                                    <div className='text-center col-span-1'>
                                        <FaJava className='text-[3.1rem] text-gray-100' />
                                        <p className='text-[0.9rem] text-gray-300'>Hibernate</p>
                                    </div>
                                </div>
                                <p className='text-gray-600 text-[0.9rem]'>Autres, Integrations d'Api</p>
                                <div className="grid grid-cols-3 gap-x-[10rem] gap-y-5">
                                    <div className='text-center col-span-1'>
                                        <div className="flex">
                                            <FaInfo className='text-[3.1rem] text-gray-600' />
                                            <FaAd className='text-[3.1rem] text-gray-600' />
                                        </div>
                                        <p className='text-[0.9rem] text-gray-300'>Inteligence Artificiel</p>
                                    </div>
                                </div>
                            </div>





                            <div id='design' className='col-span-6 p-2 ml-3 hidden'>
                                <p className='text-[1.2rem] text-gray-300 font'>Competences pour <span className='text-manga ml-3'>Design</span></p>
                                <div className="">
                                    <div className="w-20 rounded p-1 bg-manga"></div>
                                    <p className='text-manga mt-[-2.5vh] text-[0.9rem] ml-[7rem]'>Outils</p>
                                </div>
                                <div className="grid grid-cols-3 gap-x-[10rem] gap-y-5">
                                    <div className='text-center col-span-1'>
                                        <img src="icon/Ps.png" alt="" className='w-[10rem]' />
                                        <p className='text-[0.9rem] text-gray-300'>Adobe Photoshop</p>
                                    </div>
                                    <div className='text-center col-span-1'>
                                        <img src="icon/Figma.png" alt="" className='w-[10rem]' />
                                        <p className='text-[0.9rem] text-gray-300'>Figma</p>
                                    </div>
                                    <div className='text-center col-span-1'>
                                        <img src="icon/Xd.png" alt="" className='w-[10rem]' />
                                        <p className='text-[0.9rem] text-gray-300'>Adobe XD</p>
                                    </div>
                                </div>
                                <p className='text-gray-600 text-[0.9rem]'>Autres et pour les base des données</p>
                                <div className="grid grid-cols-3 gap-x-[10rem] gap-y-5">
                                    <div className='text-center col-span-1'>
                                        <div className="flex">
                                            <FaGithub className='text-[3.1rem] text-gray-600' />
                                            <FaGitlab className='text-[3.1rem] ml-2 text-gray-600' />
                                        </div>
                                        <p className='text-[0.9rem] text-gray-300'>GitHub / GitLab</p>
                                    </div>
                                    <div className='text-center col-span-1'>
                                        <img src="icon/PostGress.png" alt="" className='w-[10rem]' />
                                        <p className='text-[0.9rem] text-gray-300'>PostgreSql</p>
                                    </div>
                                    <div className='text-center col-span-1'>
                                        <img src="icon/Mysql.png" alt="" className='w-[10rem]' />
                                        <p className='text-[0.9rem] text-gray-300'>Mysql</p>
                                    </div>
                                    <div className='text-center col-span-1'>
                                        <FaDatabase className='text-[3.1rem] ml-2 text-blue-600' />
                                        <p className='text-[0.9rem] text-gray-300'>Firebase</p>
                                    </div>
                                </div>
                            </div>




                        </div>

                    </div>
                </div>
                <p></p>
                <p></p>
            </div>










            {/* responsive */}
            <div className='block md:hidden mt-8'>

                <div className="flex gap-x-[5vw]">
                    <div>
                        <div className=" absolute p-[0.7rem] ml-[-10px] rounded-full bg-manga bas1"></div>
                        <div className=" absolute p-[0.7rem] ml-[-10px] mt-[23vh]  rounded-full bg-manga bas2"></div>
                        <div className=" absolute p-[0.7rem] ml-[-10px] mt-[53vh] rounded-full bg-manga bas3"></div>
                        <div className="h-[135vh] w-[0.1rem] bg-gray-600 bas"></div>
                    </div>

                    <div>

                        <div onClick={front1} style={{ boxShadow: "-0px -0px 5px #507CFA" }} className="gauche2 col-span-6 w-[97%] rounded px-3 py-0">
                            <div className='flex justify-between mt-2'>
                                <p className='text-[1.2rem] text-manga mt-2 font'>Frontend</p>
                                <FaCode className='text-[1.7rem] mt-2 text-gray-500' />
                            </div>
                            <p className='text-[0.9rem] text-gray-600'>En utilisant React, VueJs pour le partie pour
                                Web et React Native pour interface mobile</p>
                            <p id='text1' className='text-[1.7rem]'>0 1</p>
                        </div>

                        <div id='front1' className='col-span-6 p-2 ml-3'>
                            <p className='text-[1.2rem] text-gray-300 font bas4'>Competences pour <span className='text-manga ml-3'>Frontend</span></p>
                            <div className="bas5">
                                <div className="w-20 rounded p-1 bg-manga"></div>
                                <p className='text-manga mt-[-2.5vh] text-[0.9rem] ml-[7rem]'>Outils</p>
                            </div>
                            <div className="grid grid-cols-2 gap-x-[10rem] gap-y-5">
                                <div className='text-center col-span-1 bas'>
                                    <FaReact className='text-[3.1rem] text-blue-500' />
                                    <p className='text-[0.9rem] text-gray-300'>ReactJs</p>
                                </div>
                                <div className='text-center col-span-1 bas1'>
                                    <FaHtml5 className='text-[3.1rem] text-orange-900' />
                                    <p className='text-[0.9rem] text-gray-300'>HTML</p>
                                </div>
                                <div className='text-center col-span-1 bas2'>
                                    <FaCss3Alt className='text-[3.1rem] text-blue-300' />
                                    <p className='text-[0.9rem] text-gray-300'>CSS</p>
                                </div>
                                <div className='text-center col-span-1 bas3'>
                                    <FaVuejs className='text-[3.1rem] text-green-400' />
                                    <p className='text-[0.9rem] text-gray-300'>VusJs</p>
                                </div>
                                <div className='text-center col-span-1 bas4'>
                                    <FaJs className='text-[3.1rem] text-blue-200' />
                                    <p className='text-[0.9rem] text-gray-300'>JavaScript</p>
                                </div>
                                <div className='text-center col-span-1 bas5'>
                                    <FaCss3 className='text-[3.1rem] text-blue-500' />
                                    <p className='text-[0.9rem] text-gray-300'>Tailwind Css</p>
                                </div>
                            </div>
                            <p className='text-gray-600 text-[0.9rem] bas4'>Quelque captures des projet réaliser pour le cote frontend</p>
                            <div style={{ boxShadow: "-0px -0px 4px #507CFA" }} className="ml-4 w-[90%] text-center bas5">
                                <img src="sary/font.png" className='w-full' alt="" />
                                <p className='mt-[2.8rem] text-manga text-[0.9rem]'>Gestion des réservations des places</p>
                            </div>
                        </div>

                        <div onClick={back1} style={{ boxShadow: "-0px -0px 5px #507CFA" }} className="gauche3 col-span-6 w-[97%]  rounded px-3 py-0">
                            <div className='flex justify-between mt-2'>
                                <p className='text-[1.2rem] text-gray-400 mt-2 font'>Backend</p>
                                <FaCode className='text-[1.7rem] mt-2 text-gray-500' />
                            </div>
                            <p className='text-[0.9rem] text-gray-600'>En utilisant Laravel,Symfony et Node Express</p>
                            <p id='text1' className='text-[1.7rem]'>0 2</p>
                        </div>



                        <div id='back1' className='col-span-6 p-2 ml-3 hidden'>
                                <p className='text-[1.2rem] text-gray-300 font'>Competences pour <span className='text-manga ml-3'>Backend</span></p>
                                <div className="">
                                    <div className="w-20 rounded p-1 bg-manga"></div>
                                    <p className='text-manga mt-[-2.5vh] text-[0.9rem] ml-[7rem]'>Outils</p>
                                </div>
                                <div className="grid grid-cols-2 gap-x-[10rem] gap-y-5">
                                    <div className='text-center col-span-1'>
                                        <FaPhp className='text-[3.1rem] text-gray-400' />
                                        <p className='text-[0.9rem] text-gray-300'>PHP</p>
                                    </div>
                                    <div className='text-center col-span-1'>
                                        <FaLaravel className='text-[3.1rem] text-red-600' />
                                        <p className='text-[0.9rem] text-gray-300'>Laravel</p>
                                    </div>
                                    <div className='text-center col-span-1'>
                                        <FaNode className='text-[3.1rem] text-green-600' />
                                        <p className='text-[0.9rem] text-gray-300'>Node Express</p>
                                    </div>
                                    <div className='text-center col-span-1'>
                                        <FaSymfony className='text-[3.1rem] text-gray-600' />
                                        <p className='text-[0.9rem] text-gray-300'>Symfony</p>
                                    </div>
                                    <div className='text-center col-span-1'>
                                        <FaPython className='text-[3.1rem] text-blue-400' />
                                        <p className='text-[0.9rem] text-gray-300'>Python</p>
                                    </div>
                                    <div className='text-center col-span-1'>
                                        <FaJava className='text-[3.1rem] text-gray-100' />
                                        <p className='text-[0.9rem] text-gray-300'>Hibernate</p>
                                    </div>
                                </div>
                                <p className='text-gray-600 text-[0.9rem]'>Autres, Integrations d'Api</p>
                                <div className="grid grid-cols-2 gap-x-[10rem] gap-y-5">
                                    <div className='text-center col-span-1'>
                                        <div className="flex">
                                            <FaInfo className='text-[3.1rem] text-gray-600' />
                                            <FaAd className='text-[3.1rem] text-gray-600' />
                                        </div>
                                        <p className='text-[0.9rem] text-gray-300'>Inteligence Artificiel</p>
                                    </div>
                                </div>
                            </div>




                            <div onClick={design1} style={{ boxShadow: "-0px -0px 5px #507CFA" }} className="gauche4 col-span-6 w-[97%] rounded px-3 py-0">
                            <div className='flex justify-between mt-2'>
                                <p className='text-[1.2rem] text-gray-400 mt-2 font'>Design</p>
                                <FaDesktop className='text-[1.7rem] mt-2 text-gray-500' />
                            </div>
                            <p className='text-[0.9rem] text-gray-600'>En utilisant Adobe Photoshop , Figma et Adobe
                                XD pour design UI/UX</p>
                            <p id='text1' className='text-[1.7rem]'>0 3</p>
                        </div>

                        
                        <div id='design1' className='col-span-6 p-2 ml-3 hidden'>
                                <p className='text-[1.2rem] text-gray-300 font'>Competences pour <span className='text-manga ml-3'>Design</span></p>
                                <div className="">
                                    <div className="w-20 rounded p-1 bg-manga"></div>
                                    <p className='text-manga mt-[-2.5vh] text-[0.9rem] ml-[7rem]'>Outils</p>
                                </div>
                                <div className="grid grid-cols-2 gap-x-[10rem] gap-y-5">
                                    <div className='text-center col-span-1'>
                                        <img src="icon/Ps.png" alt="" className='w-[10rem]' />
                                        <p className='text-[0.9rem] text-gray-300'>Adobe Photoshop</p>
                                    </div>
                                    <div className='text-center col-span-1'>
                                        <img src="icon/Figma.png" alt="" className='w-[10rem]' />
                                        <p className='text-[0.9rem] text-gray-300'>Figma</p>
                                    </div>
                                    <div className='text-center col-span-1'>
                                        <img src="icon/Xd.png" alt="" className='w-[10rem]' />
                                        <p className='text-[0.9rem] text-gray-300'>Adobe XD</p>
                                    </div>
                                </div>
                                <p className='text-gray-600 text-[0.9rem]'>Autres et pour les base des données</p>
                                <div className="grid grid-cols-2 gap-x-[10rem] gap-y-5">
                                    <div className='text-center col-span-1'>
                                        <div className="flex">
                                            <FaGithub className='text-[3.1rem] text-gray-600' />
                                            <FaGitlab className='text-[3.1rem] ml-2 text-gray-600' />
                                        </div>
                                        <p className='text-[0.9rem] text-gray-300'>GitHub / GitLab</p>
                                    </div>
                                    <div className='text-center col-span-1'>
                                        <img src="icon/PostGress.png" alt="" className='w-[10rem]' />
                                        <p className='text-[0.9rem] text-gray-300'>PostgreSql</p>
                                    </div>
                                    <div className='text-center col-span-1'>
                                        <img src="icon/Mysql.png" alt="" className='w-[10rem]' />
                                        <p className='text-[0.9rem] text-gray-300'>Mysql</p>
                                    </div>
                                    <div className='text-center col-span-1'>
                                        <FaDatabase className='text-[3.1rem] ml-2 text-blue-600' />
                                        <p className='text-[0.9rem] text-gray-300'>Firebase</p>
                                    </div>
                                </div>
                            </div>



                    </div>
                </div>

            </div>


        </>
    );
};

export default Competence;