import { useEffect } from 'react';
import '../css/styles.css'
// import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faDownload } from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery'
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import ScrollReveal from 'scrollreveal';
import Isa from '../component/Isa';

function Accueil() {

  // const [nom, setNom] = useState('');

  useEffect(() => {
    ScrollReveal().reveal(".gauche", {
      duration: 1000,
      origin: "left",
      distance: "10px",
      delay: 600,
      reset: true,
    })
    ScrollReveal().reveal(".sar", {
      duration: 1000,
      origin: "top",
      distance: "10px",
      delay: 600,
      reset: true,
    })
    ScrollReveal().reveal(".gauche1", {
      duration: 1000,
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
      duration: 1000,
      origin: "right",
      distance: "10px",
      delay: 700,
      reset: true,
    })
    ScrollReveal().reveal(".droite2", {
      duration: 1000,
      origin: "right",
      distance: "5px",
      delay: 700,
      reset: true,
    })
    ScrollReveal().reveal(".haut", {
      duration: 1000,
      origin: "top",
      distance: "10px",
      delay: 700,
      reset: true,
    })
    ScrollReveal().reveal(".haut1", {
      duration: 1000,
      origin: "top",
      distance: "10px",
      delay: 700,
      reset: true,
    })
    ScrollReveal().reveal(".bas", {
      duration: 1000,
      origin: "bottom",
      distance: "50px",
      delay: 700,
      reset: true,
    })
    ScrollReveal().reveal(".bas1", {
      duration: 1000,
      origin: "bottom",
      distance: "80px",
      delay: 700,
      reset: true,
    })
    ScrollReveal().reveal(".bas2", {
      duration: 1000,
      origin: "bottom",
      distance: "120px",
      delay: 700,
      reset: true,
    })
    ScrollReveal().reveal(".bas3", {
      duration: 1000,
      origin: "bottom",
      distance: "150px",
      delay: 700,
      reset: true,
    })
  }, []);

  function menu() {
    $('.lienRes').animate({ right: "5vw" })
  }

  const Cv = () => {
    const link = document.createElement('a');
    link.href = 'sary/CV_Complet.pdf';
    link.download = 'cv.pdf';
    link.click();
  };

  const Cv1 = () => {
    const link = document.createElement('a');
    link.href = 'sary/CV_Complet.pdf';
    link.download = 'cv.pdf';
    link.click();
  };

  return (
    <>
      <img id='trace' className='absolute w-[18rem] sm:w-[20vw] left-[10vw] top-[20vh] sar ' src="sary/Groupe 17.png" alt="" />
      <img className='absolute w-[15vw] left-[13vw] top-[5vh] bas3' src="sary/Ellipse 29.png" alt="" />
      <img className='absolute w-[15vw] left-[50vw] top-[66vh] sar' src="sary/Ellipse 29.png" alt="" />
      <img className='absolute w-[4vw] left-[8vw] top-[75vh] bas3' src="sary/Ellipse 31.png" alt="" />
      <img className='absolute w-[4vw] left-[7vw] top-[78vh] sar' src="sary/Ellipse 31.png" alt="" />
      <img className='absolute w-[4vw] left-[85vw] top-[15vh] bas3' src="sary/Ellipse 31.png" alt="" />
      <img className='absolute w-[4vw] left-[87vw] top-[12vh] sar' src="sary/Ellipse 31.png" alt="" />
      <img className='absolute w-[8vw] left-[87vw] top-[-10vh] bas3' src="sary/Ellipse 119.png" alt="" />
      <img className='absolute w-[8vw] left-[87vw] top-[80vh] sar' src="sary/Ellipse 119.png" alt="" />
      <img className='absolute w-[8vw] left-[87vw] top-[90vh] bas3' src="sary/Ellipse 119.png" alt="" />
      <img className='absolute w-[8vw] left-[5vw] top-[95vh] sar' src="sary-px-4/Ellipse 119.png" alt="" />

      <div className="w-full h-auto grid grid-cols-12 gap-x-[7vw] sm:gap-x-[6vw]">

        <div id="soratra" className="col-span-12 md:col-span-6 mt-[24vh]">
          <p id='text' className='text-[2rem] md:text-[2.8rem] gauche1'>F I F A L I A N T S O A</p>
          <p id='text' className='mt-[-4vh] text-[2.7rem] gauche1'>Sarobidy</p>
          <p className='text-gray-500 text-[0.9rem] gauche1'>Développeur fullsatck spécialisé en Web, Mobile et Desktop,
            je conçois des solutions performantes et adaptées aux besoins,
            passionné par design UX/UI, j'allie esthétique et fonctionnalité
            pour une expérience utilisateur optimale. Innovateur et créatif , j'
            interviens  aussi dans la conception et l'amélioration des produit numériques  </p>
          <div className="tele relative bas2">
            <div onClick={Cv} className='cursor-pointer mt-6'>
              <div className='bg-white ml-3 rounded w-[9rem] h-[2rem]'></div>
              <div className='gradien mt-[-4vh] text-[0.9rem]  w-[10.5rem] px-4 text-white items-center flex shadow-2xl shadow-manga rounded h-[2rem] justify-center'>
                <FontAwesomeIcon icon={faDownload} /> &nbsp; Telecharger CV
              </div>
            </div>
          </div>
          <div className='icon flex mt-4 justify-center sm:justify-start'>
            <a href='https://www.facebook.com/felix.brayannsrbd' className='flex align-items-center justify-center shadow-manga shadow-2xl w-10 h-10 rounded-full cursor-pointer bas'>
              <FaFacebook size={20} className='text-manga' />
            </a>
            <a className='flex align-items-center justify-center shadow-manga shadow-2xl w-10 h-10 rounded-full ml-4 cursor-pointer bas1'>
              <FaGithub size={20} className='text-manga' />
            </a>
            <a className='flex align-items-center justify-center shadow-manga shadow-2xl w-10 h-10 rounded-full ml-4 cursor-pointer bas2'>
              <FaLinkedin size={20} className='text-manga' />
            </a>
            <a className='flex align-items-center justify-center shadow-manga shadow-2xl w-10 h-10 rounded-full ml-4 cursor-pointer bas3'>
              <FaWhatsapp size={20} className='text-manga' />
            </a>
          </div>
        </div>

        <div className="col-span-12 flex justify-center sm:mt-[17vh] sm:col-span-6 droite1">
          <img src="sary/Groupe 26.png" className='w-[20rem] sm:w-[25rem]' alt="" />
        </div>

      </div>

      <div id='isa' className=' ml-[0vw] lg:ml-[-7vw] sm:mt-[-12vh] bas3'>
        <Isa />
      </div>


    </>
  );
};

export default Accueil;