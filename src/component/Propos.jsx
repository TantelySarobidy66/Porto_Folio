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


    const Cv = () => {
        const link = document.createElement('a');
        link.href = 'sary/CV_Complet.pdf'; 
        link.download = 'cv.pdf'; 
        link.click(); 
      };

    return (
        <>
            <div>

                <div className=" w-[95%] h-auto ml-[4vw] sm:ml-[5vw] sm:mt-[18vh] grid grid-cols-1 md:grid-cols-2">
                    <div className='bas5 flex justify-center sm:justify-normal'>
                        <img className='w-[70%] sm:w-[60%] sm:ml-10' src="sary/Groupe 2426.png" alt="" />
                    </div>
                    <div className=''>
                        <p className='text-[0.9rem] w-44 gradien text-gray-100 px-3 rounded droite1'>A propos de moi</p>
                        <div className="flex">
                            <div>
                                <div className="absolute p-2 ml-[-6px] rounded-full gradien bas2"></div>
                                <div className="absolute p-2 ml-[-6px] mt-[23vh]  rounded-full gradien bas3"></div>
                                <div className="h-[55vh] w-[0.1rem] bg-gray-500 bas"></div>
                            </div>
                            <div className='ml-4 sm:ml-7 bas3'>
                                <p className='text-white text-[1.7rem] mt-1'><span className='text-[1rem]'>Nom :</span> FIFALIANTSOA <br />
                                    <span className='text-[1rem]'>Prenom :</span> Sarobidy</p>
                                <p className='gradien px-3 rounded text-gray-100 text-[0.9rem] mt-4'>UI / UX Design et Développer Web, Mobile et Desktop</p>
                                <p className='text-gray-500 text-[0.9rem] mt-7'>J'ai étudié à l'École Nationale de l'Informatique (ENI) à Fianarantsoa, Madagascar. <br />J'ai obtenu un diplôme de Licence Professionnelle en 2024. Actuellement, je suis développeur web, designer, et développeur mobile et desktop.</p>
                                <p className='text-white text-[0.9rem] mt-7'> Frontend : <span className='text-gray-500'> : ReactJs, HTML CSS, Bootstrap, Tailwind <br />Css
                                    et ReactNative pour mobile</span></p>
                                <p className='text-white text-[0.9rem] mt-7'> Backend : <span className='text-gray-500'> : Laravel, Symfony, NodeJS, Python</span></p>
                                </div>
                        </div>
                        <div className="flex justify-center sm:justify-start">
                            <div onClick={Cv} className='mt-3 cursor-pointer bas4'>
                                <div className='bg-white ml-3 rounded w-[9rem] h-[2rem]'></div>
                                <div className='gradien mt-[-4vh] text-[0.9rem]  w-[10.5rem] px-4 text-white items-center flex shadow-2xl shadow-manga rounded h-[2rem] justify-center'>
                                    <FontAwesomeIcon icon={faDownload} />&nbsp; Telecharger CV
                                </div>
                            </div>
                            <a href='#contact' className='mt-3 ml-4 sm:ml-8 cursor-pointer text-decoration-none bas5'>
                                <div className='ml-3 rounded w-[9rem] h-[2rem]'></div>
                                <div className='mt-[-4vh] text-[0.9rem] border-[1px] border-manga  w-[10.5rem] px-4 text-white items-center flex shadow-2xl shadow-manga rounded h-[2rem] justify-center'>
                                    <FontAwesomeIcon icon={faQuestion} />&nbsp;  Question 
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