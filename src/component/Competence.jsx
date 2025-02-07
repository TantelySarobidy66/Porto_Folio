import { useEffect } from 'react';
import '../css/styles.css'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { } from '@fortawesome/free-solid-svg-icons';
// import $ from 'jquery'
import { FaAngleLeft, FaCode, FaDatabase, FaDesktop, FaDiagnoses, FaMobile, FaPhotoVideo } from 'react-icons/fa'
import ScrollReveal from 'scrollreveal';

function Competence() {

    // const [nom, setNom] = useState('');

    useEffect(() => {
        ScrollReveal().reveal(".gauche", {
            duration: 700,
            origin: "left",
            distance: "10px",
            delay: 600,
            reset: true,
        })
        ScrollReveal().reveal(".sar", {
            duration: 5000,
            origin: "top",
            distance: "10px",
            delay: 600,
            reset: true,
        })
        ScrollReveal().reveal(".sar5", {
            duration: 1000,
            origin: "top",
            distance: "10px",
            delay: 600,
            reset: true,
        })
        ScrollReveal().reveal(".gauche1", {
            duration: 3000,
            origin: "left",
            distance: "10px",
            delay: 700,
            reset: true,
        })
        ScrollReveal().reveal(".droite", {
            duration: 1000,
            origin: "right",
            distance: "10px",
            delay: 700,
            reset: true,
        })
        ScrollReveal().reveal(".droite1", {
            duration: 3000,
            origin: "right",
            distance: "10px",
            delay: 700,
            reset: true,
        })
        ScrollReveal().reveal(".droite2", {
            duration: 3200,
            origin: "right",
            distance: "5px",
            delay: 700,
            reset: true,
        })
        ScrollReveal().reveal(".haut", {
            duration: 3000,
            origin: "top",
            distance: "10px",
            delay: 700,
            reset: true,
        })
        ScrollReveal().reveal(".haut1", {
            duration: 3200,
            origin: "top",
            distance: "10px",
            delay: 700,
            reset: true,
        })
        ScrollReveal().reveal(".bas", {
            duration: 1000,
            origin: "bottom",
            distance: "10px",
            delay: 700,
            reset: true,
        })
        ScrollReveal().reveal(".bas1", {
            duration: 1800,
            origin: "bottom",
            distance: "10px",
            delay: 700,
            reset: true,
        })
        ScrollReveal().reveal(".bas2", {
            duration: 2500,
            origin: "bottom",
            distance: "10px",
            delay: 700,
            reset: true,
        })
        ScrollReveal().reveal(".bas3", {
            duration: 3200,
            origin: "bottom",
            distance: "10px",
            delay: 700,
            reset: true,
        })
        ScrollReveal().reveal(".bas4", {
            duration: 3000,
            origin: "bottom",
            distance: "10px",
            delay: 700,
            reset: true,
        })
        ScrollReveal().reveal(".bas5", {
            duration: 3400,
            origin: "bottom",
            distance: "10px",
            delay: 700,
            reset: true,
        })
    }, []);

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

    const settings2 = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
    }

    return (
        <>
            <div>
                <img className='absolute w-[15vw] left-[10vw] top-[105vh] sar ' src="sary/Ellipse 29.png" alt="" />
                <img className='absolute w-[4vw] left-[75vw] top-[115vh] bas3' src="sary/Ellipse 31.png" alt="" />
                <img className='absolute w-[4vw] left-[77vw] top-[112vh] sar' src="sary/Ellipse 31.png" alt="" />
                <img className='absolute w-[4vw] left-[25vw] top-[182vh] sar' src="sary/Ellipse 31.png" alt="" />
                <img id='font' className='absolute w-[60vw]  left-[0vw] top-[102vh] opacity-[0.05] sar5' src="sary/left.png" alt="" />

                <div id='info' className="text-center justify-center items-center mt-10">
                    <p className='text-manga text-[0.9rem] haut'>En iformatique</p>
                    <p className='text-white text-[1.7rem] mt-[-0.5rem] haut'>Competences</p>
                    <p className='text-gray-600 text-[0.9rem] mt-[-1rem] haut1'>Voici les listes des tous mon compétences</p>
                    <p className='text-gray-600 text-[0.9rem] mt-[-1rem] haut1'>en informatique</p>
                    <div className="p-1 w-14 mt-2 md:mt-[-0.5rem] justify-center items-center flex rounded ml-[43vw] md:ml-[47.5vw] haut1 bg-manga"></div>
                </div>

                <div id='comp1' className="absolute w-[100%] lg:w-[70vw] mt-4 lg:ml-[15vw] h-[67vh] grid md:grid-cols-3 grid-cols-2">
                        <div id='web' className=" w-[14rem] h-[30vh] p-3 m-3 rounded-[20px] cursor-pointer bas">
                            <div className="flex">
                                <FaCode className='text-[2.2rem] text-manga'/>
                                <p id='det' className='ml-14 text-[0.8rem] p-1 px-4 rounded text-manga  border-[1px] border-manga '>Detais</p>
                            </div>
                            <p className='text-white text-[1rem] mt-[0rem]'>Développement Web</p>
                            <p className='text-gray-600 text-[0.9rem] mt-[-0.5rem]'>En utilisant Framework
                                Laravel, Symfony et NodeJs pour le 
                                partie Backend. React, VueJs
                                pour le partie Frontend
                            </p>
                        </div>
                        <div id='web1' className=" w-[14rem] h-[30vh] p-3 m-3 rounded-[20px] hover:border-[1px] hover:border-manga cursor-pointer bas1">
                            <div className="flex">
                                <FaMobile className='text-[2.2rem] text-manga'/>
                                <p id='det' className='ml-14 text-[0.8rem] p-1 px-4 rounded text-manga  border-[1px] border-manga '>Detais</p>
                            </div>
                            <p className='text-white text-[1rem] mt-[0rem]'>Développement Mobile</p>
                            <p className='text-gray-600 text-[0.9rem] mt-[-0.5rem]'>En utilisant Framework
                                Laravel, symfony et NodeJs pour le 
                                partie Backend. ReactNative
                                pour le partie Frontend
                            </p>
                        </div>
                        <div id='web2' className=" w-[14rem] h-[30vh] p-3 m-3 rounded-[20px] hover:border-[1px] hover:border-manga cursor-pointer bas2">
                            <FaDesktop className='text-[2.2rem] text-manga'/>
                            <p className='text-white text-[1rem] mt-[0.5rem]'>Développement Desktop</p>
                            <p className='text-gray-600 text-[0.9rem] mt-[-0.5rem]'>En utilisant JAVA et C#
                            </p>
                        </div>
                        <div id='web3' className=" w-[14rem] h-[26vh] p-3 m-3 rounded-[20px] hover:border-[1px] hover:border-manga cursor-pointer bas3">
                            <FaDatabase className='text-[2.2rem] text-manga'/>
                            <p className='text-white text-[1rem] mt-[0.5rem]'>SGBD</p>
                            <p className='text-gray-600 text-[0.9rem] mt-[0.5rem]'>MySQL, PostgreSQL pour
                                le Systèmes de gestion de
                                base de données 
                            </p>
                        </div>
                        <div id='web4' className=" w-[14rem] h-[26vh] p-3 m-3 rounded-[20px] hover:border-[1px] hover:border-manga cursor-pointer bas4">
                           <div className="flex">
                                <FaPhotoVideo className='text-[2.2rem] text-manga'/>
                                <p id='det' className='ml-14 text-[0.8rem] p-1 px-4 rounded text-manga  border-[1px] border-manga '>Detais</p>
                           </div>
                            <p className='text-white text-[1rem] mt-[0.5rem]'>Désigneur</p>
                            <p className='text-gray-600 text-[0.9rem] mt-[0.5rem]'>En utilisant Adobe XD,
                                Figma, Adobe Photoshop
                            </p>
                        </div>
                        <div id='web5' className=" w-[14rem] h-[26vh] p-3 m-3 rounded-[20px] hover:border-[1px] hover:border-manga cursor-pointer bas5">
                            <FaDiagnoses className='text-[2.2rem] text-manga'/>
                            <p className='text-white text-[1rem] mt-[0.5rem]'>Conception</p>
                            <p className='text-gray-600 text-[0.9rem] mt-[0.5rem]'>Merise, 2TUP et UML pour le
                                Langage de modélisation
                            </p>
                        </div>
                    </div>


                    <div id='comp2' className="mt-10 h-[67vh] ml-4 gauche1">
                        <Slider {...settings}>
                            <div id='web' className="w-[85%] h-[30vh] p-5 rounded-[20px] cursor-pointer border-[1px] border-manga">
                                <div className="flex">
                                    <FaCode className='text-[2.2rem] text-manga'/>
                                    <p id='det' className='ml-14 text-[0.8rem] p-1 px-4 rounded text-manga  border-[1px] border-manga '>Detais</p>
                                </div>
                                <p className='text-white text-[1rem] mt-[0rem]'>Développement Web</p>
                                <p className='text-gray-600 text-[0.9rem] mt-[-0.5rem]'>En utilisant Framework
                                    Laravel, Symfony et NodeJs pour le 
                                    partie Backend. React, VueJs
                                    pour le partie Frontend
                                </p>
                            </div>
                            <div id='web1' className=" w-[85%] h-[30vh] p-5 rounded-[20px] border-[1px] border-manga cursor-pointer">
                            <div className="flex">
                                <FaMobile className='text-[2.2rem] text-manga'/>
                                <p id='det' className='ml-14 text-[0.8rem] p-1 px-4 rounded text-manga  border-[1px] border-manga '>Detais</p>
                            </div>
                            <p className='text-white text-[1rem] mt-[0rem]'>Développement Mobile</p>
                            <p className='text-gray-600 text-[0.9rem] mt-[-0.5rem]'>En utilisant Framework
                                Laravel, symfony et NodeJs pour le 
                                partie Backend. ReactNative
                                pour le partie Frontend
                            </p>
                        </div>
                        <div id='web2' className="w-[85%] h-[30vh] p-5 rounded-[20px] border-[1px] border-manga cursor-pointer">
                            <FaDesktop className='text-[2.2rem] text-manga'/>
                            <p className='text-white text-[1rem] mt-[0.5rem]'>Développement Desktop</p>
                            <p className='text-gray-600 text-[0.9rem] mt-[-0.5rem]'>En utilisant JAVA et C#
                            </p>
                        </div>
                        </Slider>
                        <br />

                        <Slider {...settings2}>
                        <div id='web3' className="w-[85%] h-[30vh] p-5 rounded-[20px] border-[1px] border-manga cursor-pointer">
                            <FaDatabase className='text-[2.2rem] text-manga'/>
                            <p className='text-white text-[1rem] mt-[0.5rem]'>SGBD</p>
                            <p className='text-gray-600 text-[0.9rem] mt-[0.5rem]'>MySQL, PostgreSQL pour
                                le Systèmes de gestion de
                                base de données 
                            </p>
                        </div>
                        <div id='web4' className="w-[85%] h-[30vh] p-5 rounded-[20px] border-[1px] border-manga cursor-pointer">
                           <div className="flex">
                                <FaPhotoVideo className='text-[2.2rem] text-manga'/>
                                <p id='det' className='ml-14 text-[0.8rem] p-1 px-4 rounded text-manga  border-[1px] border-manga '>Detais</p>
                           </div>
                            <p className='text-white text-[1rem] mt-[0.5rem]'>Désigneur</p>
                            <p className='text-gray-600 text-[0.9rem] mt-[0.5rem]'>En utilisant Adobe XD,
                                Figma, Adobe Photoshop
                            </p>
                        </div>
                        <div id='web5' className="w-[85%] h-[30vh] p-5 rounded-[20px] border-[1px] border-manga cursor-pointer">
                            <FaDiagnoses className='text-[2.2rem] text-manga'/>
                            <p className='text-white text-[1rem] mt-[0.5rem]'>Conception</p>
                            <p className='text-gray-600 text-[0.9rem] mt-[0.5rem]'>Merise, 2TUP et UML pour le
                                Langage de modélisation
                            </p>
                        </div>
                        </Slider>

                    </div>

                    <a id='arraw' href='#propos' className='flex absolute top-[200vh] items-center justify-center h-7 w-[3rem] rounded bg-manga cursor-pointer ml-[13vw] mt-[-5vh] haute'>
                        <FaAngleLeft className='text-white rotate-[-90deg]' />
                    </a>

            </div>
        </>
    );
};

export default Competence;