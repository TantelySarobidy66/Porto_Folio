import { useEffect, useState } from 'react';
import '../css/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose, faDownload, faSearch } from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery'
import ScrollReveal from 'scrollreveal';
import Competence from '../component/Competence';
import Accueil from '../component/Accueil';
import Propos from '../component/Propos';
import Contacte from '../component/Contacte';

function Login() {

  const [mety, setMety] = useState(false);

  useEffect(() => {
    ScrollReveal().reveal(".haute", {
      duration: 1000,
      origin: "top",
      distance: "100px",
      delay: 600,
      reset: true,
    }),
    ScrollReveal().reveal(".left", {
      duration: 1000,
      origin: "left",
      distance: "100px",
      delay: 600,
      reset: true,
    })
  }, []);

  function close() {
    $('.lienRes').animate({ right: "-120%" })
  }

  function ac() {
    close();
  }
  function ac1() {
    close();
  }
  function ac2() {
    close();
  }
  function ac3() {
    close();
  }

  const Cv1 = () => {
    const link = document.createElement('a');
    link.href = 'sary/CV_Complet.pdf';
    link.download = 'cv.pdf';
    link.click();
  };

  function menu() {
    setMety(true)
    $('#slidemenu').animate({ right: "1rem" })
  }

  function close() {
    setMety(false)
    $('#slidemenu').animate({ right: "120%" })
  }

  function accu(){
    $('#accu').css({color:"#fff"})
    $('#round').animate({marginLeft:"-23.5rem"});
  }

  function compet(){
    $('#round').animate({marginLeft:"-8rem"});
    $('#compet').css({color:"#fff"})
  }

  function propos(){
    $('#round').animate({marginLeft:"8.5rem"});
    $('#propos').css({color:"#fff"})
  }

  function contact(){
    $('#round').animate({marginLeft:"23rem"});
    $('#contact').css({color:"#fff"})
  }


  return (
    <>

      <div className=''>

        <div style={{ backdropFilter: "blur(5px)"}} className='w-full z-40 fixed top-0 left-0 px-[8vw] flex justify-between py-1'>
          <div className="flex justify-center items-center">
            <div className="flex justify-center text-center items-center bg-manga w-10 h-10 rounded">
              <p className='text-white mt-3 text-[1.4rem] '>P</p>
            </div>
            <div className='flex px-4 justify-center items-center'>
              <p className='text-manga mt-3 text-[1.4rem]'>Folio</p>
            </div>
          </div>
          <div className='flex justify-center items-center'>
            <div className="hidden justify-center items-center text-[1rem] lg:flex">
              <div id='round' className='absolute p-1 rounded-full ml-[-23.7rem] mt-8 bg-slate-50'></div>
              <a href='#accu' onClick={accu} className='text-[#fff] cursor-pointer text-decoration-none px-6'>Accueil</a><br /><br />
              <a href='#compet' onClick={compet} className=' text-gray-400 cursor-pointer text-decoration-none px-6 hover:text-manga '>Compétences</a><br /><br />
              <a href='#propos' onClick={propos} className=' text-gray-400 cursor-pointer hover:text-manga px-6 text-decoration-none'>A propos</a><br /><br />
              <a href='#contact' onClick={contact} className=' text-gray-400 cursor-pointer hover:text-manga px-6 text-decoration-none'>Contactes</a><br />
            </div>
            <div>
              <FontAwesomeIcon icon={faSearch} className='ml-[-10vw] text-[1.2rem]  text-[#fff] cursor-pointer sm:text-manga sm:ml-4 ' />
            </div>
            <div onClick={Cv1} className=' cursor-pointer hidden px-5 sm:block'>
              <div className='bg-white ml-3 rounded w-[9rem] h-[2rem]'></div>
              <div style={{ boxShadow: "2px 5px 10px #507dfa48" }} className='bg-manga mt-[-4vh] text-[1rem]  w-[10.5rem] text-white items-center flex shadow-2xl rounded h-[2rem] justify-center'>
                <FontAwesomeIcon icon={faDownload} />&nbsp; Telecharger CV
              </div>
            </div>
            <div>
              { mety ? 
                 <FontAwesomeIcon id='close' onClick={close} icon={faClose} className='text-white text-[1.5rem] cursor-pointer block lg:hidden' />
                 :
                 <FontAwesomeIcon id='menu' onClick={menu} icon={faBars} className='text-white cursor-pointer text-[1.5rem] block lg:hidden' />
              }
            </div>
          </div>
        </div>

        <div id='slidemenu' style={{backdropFilter:"blur(5px)", boxShadow:"-0px -0px 10px #507CFA"}} className='top-[11vh] fixed right-[110%] z-40 w-[15rem] h-auto p-4 rounded text-center lg:hidden'>
          <a href='#accu' onClick={ac} className='text-[#fff] cursor-pointer text-decoration-none px-6'>Accueil</a><br /><br />
          <a href='#compet' onClick={ac1} className=' text-gray-400 cursor-pointer text-decoration-none px-6 hover:text-manga '>Compétences</a><br /><br />
          <a href='#propos' onClick={ac2} className=' text-gray-400 cursor-pointer hover:text-manga px-6 text-decoration-none'>A propos</a><br /><br />
          <a href='#contact' onClick={ac3} className=' text-gray-400 cursor-pointer hover:text-manga px-6 text-decoration-none'>Contactes</a><br />
          <div className="flex justify-center items-center">
          <div onClick={Cv1} className=' cursor-pointer mt-3'>
              <div className='bg-white ml-3 rounded w-[9rem] h-[2rem]'></div>
              <div style={{ boxShadow: "2px 5px 10px #507dfa48" }} className='bg-manga mt-[-4vh] text-[0.9rem]  w-[10.5rem] text-white items-center flex shadow-2xl rounded h-[2rem] justify-center'>
                <FontAwesomeIcon icon={faDownload} />&nbsp; Telecharger CV
              </div>
            </div>
          </div>
        </div>


        
        <div id='accu' className="w-[100%] px-[5vw] lg:px-[15vw]">
           <Accueil />
        </div>

        <div id='compet' className="w-[100%] px-[4vw] border-[1px] border-[#000000] lg:px-[15vw]">
          <Competence />
        </div>

       

        <div id='propos' className="w-[100%] h-auto border-[1px] border-[#000000] px-[0vw] lg:px-[5vw]">
          <Propos />
        </div>

         
        <div id='contact' className="w-full h-auto relative sm:overflow-hidden border-[1px] border-[#000000] px-[0vw] lg:px-[5vw]">
          <Contacte />
        </div>

      </div>
    </>
  );
};

export default Login;