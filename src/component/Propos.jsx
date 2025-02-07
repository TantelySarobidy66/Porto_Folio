import { useEffect } from 'react';
import '../css/styles.css'
// import Slider from "react-slick"
// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faQuestion } from '@fortawesome/free-solid-svg-icons';
// import $ from 'jquery'
import { } from 'react-icons/fa'
import ScrollReveal from 'scrollreveal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Propos() {

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


    const Cv = () => {
        const link = document.createElement('a');
        link.href = 'sary/CV_Complet.pdf'; 
        link.download = 'cv.pdf'; 
        link.click(); 
      };

    return (
        <>
            <div>
                <img className='absolute w-[7vw] left-[12vw] top-[215vh] sar' src="sary/Ellipse 66.png" alt="" />
                <img className='absolute w-[9vw] left-[30vw] top-[215vh] sar ' src="sary/Ellipse 66.png" alt="" />
                <img className='absolute w-[10vw] left-[20vw] top-[230vh] sar ' src="sary/Ellipse 66.png" alt="" />
                <img className='absolute w-[5vw] left-[10vw] top-[250vh] sar ' src="sary/Ellipse 66.png" alt="" />
                <img className='absolute w-[4vw] left-[75vw] top-[215vh] bas3' src="sary/Ellipse 31.png" alt="" />
                <img className='absolute w-[4vw] left-[77vw] top-[212vh] sar' src="sary/Ellipse 31.png" alt="" />
                <img className='absolute w-[4vw] left-[25vw] top-[292vh] sar' src="sary/Ellipse 31.png" alt="" />
                <img id='font1' className='absolute w-[60vw]  right-[0vw] top-[222vh] opacity-[0.05] sar5' src="sary/right.png" alt="" />

                <div id='prop' className="w-[75vw] h-[70vh] ml-[11vw] mt-[18vh] grid :grid-cols-1 md:grid-cols-2 sar5">
                    <div>
                        <img id='font1' className='w-[100%] ml-10' src="sary/Groupe 2426.png" alt="" />
                    </div>
                    <div className=''>
                        <p className='text-manga text-[0.9rem] haut'>A propos de moi</p>
                        <div className="flex">
                            <div>
                                <div className="absolute p-2 ml-[-4px] rounded-full haut bg-manga"></div>
                                <div className="absolute p-2 ml-[-4px] mt-[23vh] haut1  rounded-full bg-manga"></div>
                                <div className="h-[55vh] w-2 bg-[#060e1d]"></div>
                            </div>
                            <div className='ml-7'>
                                <p className='text-white text-[1.7rem] mt-1 haut'><span className='text-[1rem]'>Nom :</span> FIFALIANTSOA <br />
                                    <span className='text-[1rem]'>Prenom :</span> Sarobidy</p>
                                <p className='text-manga text-[0.9rem] haut mt-4'>UI / UX Design et Développer Web, Mobile et Desktop</p>
                                <p className='text-gray-600 text-[0.9rem] haut mt-7'>J'ai étudié à l'École Nationale de l'Informatique (ENI) à Fianarantsoa, Madagascar. J'ai obtenu un diplôme de Licence Professionnelle en 2024. Actuellement, je suis développeur web, designer, et développeur mobile et desktop.</p>
                                <p className='text-white text-[0.9rem] haut1 mt-7'> Frontend : <span className='text-gray-600'> : ReactJs, HTML CSS, Bootstrap, TailwindCss
                                    et ReactNative pour mobile</span></p>
                                <p className='text-white text-[0.9rem]  haut1 mt-7'> Backend : <span className='text-gray-600'> : Laravel, Symfony, NodeJS, Python</span></p>
                            </div>
                        </div>
                        <div id='ques' className="flex">
                            <div onClick={Cv} className='mt-3 cursor-pointer tele droite1'>
                                <div className='bg-white ml-3 rounded w-[9rem] h-[2rem]'></div>
                                <div className='bg-manga mt-[-4vh] text-[0.9rem]  w-[10.5rem] px-4 text-white items-center flex shadow-2xl shadow-manga rounded h-[2rem] justify-center'>
                                    <FontAwesomeIcon icon={faDownload} /> Telecharger CV
                                </div>
                            </div>
                            <a href='#contact' className='mt-3 ml-8 cursor-pointer tele droite1 text-decoration-none'>
                                <div className='ml-3 rounded w-[9rem] h-[2rem]'></div>
                                <div className='mt-[-4vh] text-[0.9rem] border-[1px] border-manga  w-[10.5rem] px-4 text-white items-center flex shadow-2xl shadow-manga rounded h-[2rem] justify-center'>
                                    <FontAwesomeIcon icon={faQuestion} />  Question 
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Propos;