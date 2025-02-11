import { useEffect } from 'react';
import '../css/styles.css'
// import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faDownload } from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery'
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import ScrollReveal from 'scrollreveal';
import Isa from '../component/Isa';

function Accueil() {

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
      duration: 3000,
      origin: "bottom",
      distance: "10px",
      delay: 700,
      reset: true,
    })
  }, []);

  function menu(){
    $('.lienRes').animate({right:"5vw"})
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
          <img id='logo' className='absolute lg:w-[8vw] w-[6rem] lg:left-[20vw] left-[10vw] top-[2vh] gauche' src="sary/logo.png" alt="" />
          <img id='trace' className='absolute w-[20vw] left-[10vw] top-[20vh] sar ' src="sary/Groupe 17.png" alt="" />
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
          <img id="sare" className='absolute lg:w-[35vw] w-[25rem] left-[55vw] top-[20vh] droite2' src="sary/Groupe 26.png" alt="" />
          <div id='bars' onClick={menu} className='bars absolute top-7 right-[12vw] w-7 droite'>
              <FontAwesomeIcon icon={faBars} className='text-[1.5rem] ml-4 text-[#fff]'/>
          </div>

          <div id='li' className="flex text-[0.9rem] absolute top-[4vh] left-[25vw] lg:left-[35vw]">
            <div id='lien' className="flex">
              <a href='#accu' className='text-white cursor-pointer text-decoration-none bas'>Accueil</a>
              <span className='bg-white w-3 ml-[-2.1vw] mt-4 h-1 cursor-pointer bas'></span>
              <a href='#compet' className='ml-12 text-gray-600 cursor-pointer text-decoration-none hover:text-manga bas1'>Compétences</a>
              <a href='#propos' className='ml-6 text-gray-600  cursor-pointer hover:text-manga text-decoration-none bas2'>A propos</a>
              <a href='#contact' className='ml-6 text-gray-600 cursor-pointer hover:text-manga text-decoration-none bas3'>Contactes</a>
            </div>
            <div onClick={Cv1} className='ml-[5vw] mt-[-1vh] cursor-pointer tele droite1'>
              <div className='bg-white ml-3 rounded w-[9rem] h-[2rem]'></div>
              <div className='bg-manga mt-[-4vh] text-[0.9rem]  w-[10.5rem] px-4 text-white items-center flex shadow-2xl shadow-manga rounded h-[2rem] justify-center'>
                <FontAwesomeIcon icon={faDownload} /> Telecharger CV
              </div>
            </div>
          </div>

          <div id="soratra" className="absolute lg:left-[17vw] left-[7vw] top-[24vh]">
            <p className='text-white text-[2.8rem] bos haut'>F I F A L I A N T S O A</p>
            <p className='text-manga mt-[-4vh] text-[2.7rem] bos gauche1'>Sarobidy</p>
            <p className='text-gray-600 text-[0.9rem] bos1 bas3'>Développeur fullsatck spécialisé en Web, Mobile et Desktop,
              je conçois des solutions performantes et adaptées aux besoins.
              passionné par design UX/UI, j'allie esthétique et fonctionnalité
              pour une expérience utilisateur optimale. Innovateur et créatif , j'
              interviens  aussi dans la conception et l'amélioration des produit numériques  </p>
            <div onClick={Cv} className='cursor-pointer mt-6 gauche1'>
              <div className='bg-white ml-3 rounded w-[9rem] h-[2rem]'></div>
              <div className='bg-manga mt-[-4vh] text-[0.9rem]  w-[10.5rem] px-4 text-white items-center flex shadow-2xl shadow-manga rounded h-[2rem] justify-center'>
                <FontAwesomeIcon icon={faDownload} /> Telecharger CV
              </div>
            </div>
            <div className='icon flex mt-4'>
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

            <div id='chifre' className="bas1 mt-3">
            <Isa />
          </div>

          </div>
    </>
  );
};

export default Accueil;