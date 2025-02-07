import { useEffect } from 'react';
import '../css/styles.css'
// import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose} from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery'
// import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import ScrollReveal from 'scrollreveal';
// import Isa from '../component/Isa';
import Competence from '../component/Competence';
import Accueil from '../component/Accueil';
import Propos from '../component/Propos';
import Contacte from '../component/Contacte';
// import { FaAngleLeft } from 'react-icons/fa';

function Login() {

  // const [nom, setNom] = useState('');

  useEffect(() => {
    ScrollReveal().reveal(".haute", {
      duration: 3000,
      origin: "top",
      distance: "10px",
      delay: 600,
      reset: true,
    })
  }, []);

  function close(){
    $('.lienRes').animate({right:"-120%"})
  }

  function ac(){
    close();
  }
  function ac1(){
    close();
  }
  function ac2(){
    close();
  }
  function ac3(){
    close();
  }

  return (
    <>
      <div className=''>

        <div className="ambony"></div>

        <div className="lienRes">
            <a href='#accu' onClick={ac} className='text-white cursor-pointer text-decoration-none'>Accueil</a><br /><br />
            <a href='#compet' onClick={ac1} className=' text-white cursor-pointer text-decoration-none hover:text-manga '>Compétences</a><br /><br />
            <a href='#propos' onClick={ac2} className=' text-white cursor-pointer hover:text-manga text-decoration-none'>A propos</a><br /><br />
            <a href='#contact' onClick={ac3} className=' text-white cursor-pointer hover:text-manga text-decoration-none'>Contactes</a><br />
            <p onClick={close} className='mt-3 ml-[8.5rem] text-red-500'><FontAwesomeIcon className='text-[1.5rem]' icon={faClose} /></p>
          </div>

        <div id='accu' className="w-[100%] h-[100vh]">
           <Accueil />
        </div>

        <div id='compet' className="w-[100%] h-[100vh]">
          <Competence />
        </div>

        <div id='propos' className="w-[100%] h-[102vh] border-[1px] border-[#000000]">
          <Propos />
        </div>

        <div id='contact' className="w-[100%] h-[100vh] overflow-hidden border-[#000000]">
          <Contacte />
        </div>

      </div>
    </>
  );
};

export default Login;