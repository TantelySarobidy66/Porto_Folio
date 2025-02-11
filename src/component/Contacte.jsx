import { useEffect } from 'react';
import '../css/styles.css'
// import Slider from "react-slick"
// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faDownload, faQuestion } from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery'
import { FaAngleLeft, FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import ScrollReveal from 'scrollreveal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow, faMessage, faPhone } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import axios from 'axios';

function Contacte() {

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



    function inpu() {
        const d = document.getElementById('champ').value;

        if (/[?!$%^&*(),<>['":;=`_+~#/}{-]/.test(d)) {
            $('#champ').css({ border: '1px solid #ff6f52', color: '#ff6f52' });
            $('#er').css({ display: 'block' });
            $('#btns').css({ display: 'none' });
        }
        else {
            $('#champ').css({ borderBottom: '2px solid #507CFA', color: '#fff', borderTop: '0.5px solid #507CFA', borderRight: '0.5px solid #507CFA', borderLeft: '0.5px solid #507CFA' });
            $('#er').css({ display: 'none' });
            $('#btns').css({ display: 'block' });
        }
    }

    function bout(e)
    {
        e.preventDefault();
        const email = document.getElementById('champ').value;
        const message = document.getElementById('champ1').value;
        axios.post('http://localhost:8081/mail', { email, message})
        .then(res => {
            console.log(res.data);
            toast.success("Message envoyer avec succés")
        }).catch(er => console.log(er));
        if(email!="" && message!=""){
            toast.success("Message envoyer avec succés")
        }
        else{
            toast.success("Veuillez Remplir tous les champs")
        }
    }

    return (
        <>
            <div>
                <img className='absolute w-[4vw] left-[75vw] top-[315vh] bas3' src="sary/Ellipse 31.png" alt="" />
                <img className='absolute w-[4vw] left-[77vw] top-[312vh] sar' src="sary/Ellipse 31.png" alt="" />
                <img className='absolute w-[4vw] left-[25vw] top-[392vh] sar' src="sary/Ellipse 31.png" alt="" />
                <img id='mondee' className='absolute w-[70vw]  left-[15vw] top-[322vh] opacity-[0.2] bas2' src="sary/monde.png" alt="" />
                <img id='mondee1' className='absolute w-[70vw]  left-[15vw] top-[322vh] opacity-[0.3] bas2' src="sary/monde.png" alt="" />
                <img id='mondee2' className='absolute w-[70vw]  left-[15vw] top-[322vh] opacity-[0.3] bas2' src="sary/monde.png" alt="" />
                <img id='mondee3' className='absolute w-[70vw]  left-[15vw] top-[322vh] opacity-[0.3] bas2' src="sary/monde.png" alt="" />

                <div className="justify-center items-center flex">
                    <a id='arraw' href='#accu' className='flex items-center justify-center h-7 w-[3rem] rounded bg-manga cursor-pointer mt-[5vh] haute'>
                        <FaAngleLeft className='text-white rotate-[90deg]' />
                    </a>
                </div>

                <div id='cont' className=" md:w-[55vw] h-[60vh] ml-[25vw] mt-[15vh] grid :grid-cols-1 md:grid-cols-2 sar5">
                    <p className='text-white text-center text-[1.7rem] block md:hidden mt-3 haut'>Contactez-moi</p>
                    <div className='flex'>
                        <div id='barAmbany'>
                            <div className="absolute p-2 ml-[-4px] rounded-full haut bg-manga"></div>
                            <div className="absolute p-2 ml-[-4px] mt-[23vh] haut1  rounded-full bg-manga"></div>
                            <div className="absolute p-2 ml-[-4px] mt-[53vh] haut1  rounded-full bg-manga"></div>
                            <div className="h-[55vh] w-2 bg-[#060e1d] "></div>
                        </div>
                        <div id='texta' className='ml-[20vw] md:ml-7 mt-4'>
                            <p className='text-gray-600 text-[0.9rem] haut md:mt-7'> <FontAwesomeIcon color='white' icon={faLocationArrow} /> <span className='text-white'>Adresse :</span> Andrainjato <br />à Fianarantsoa/ <br />Madagascar</p>
                            <p className='text-white text-[0.9rem] haut1 md:mt-7'>  <FontAwesomeIcon icon={faMessage} /> : <span className='text-gray-600'>  felixsarobidy@gmail.com</span></p>
                            <p className='text-white text-[0.9rem] haut1 md:mt-7'>  <FontAwesomeIcon icon={faPhone} /> : <span className='text-gray-600'>  +261 34 46 536 09</span></p>
                            <p className='text-white text-[0.9rem] haut1 md:mt-7'>  <span className='text-gray-600'>  Voici tous les liens de </span> Communication</p>
                            <div className='icon flex mt-4'>
                                <div className='flex align-items-center justify-center shadow-manga shadow-2xl w-10 h-10 rounded-full cursor-pointer bas'>
                                    <FaFacebook size={20} className='text-manga' />
                                </div>
                                <div className='flex align-items-center justify-center shadow-manga shadow-2xl w-10 h-10 rounded-full ml-4 cursor-pointer bas1'>
                                    <FaGithub size={20} className='text-manga' />
                                </div>
                                <div className='flex align-items-center justify-center shadow-manga shadow-2xl w-10 h-10 rounded-full ml-4 cursor-pointer bas2'>
                                    <FaLinkedin size={20} className='text-manga' />
                                </div>
                                <div className='flex align-items-center justify-center shadow-manga shadow-2xl w-10 h-10 rounded-full ml-4 cursor-pointer bas3'>
                                    <FaWhatsapp size={20} className='text-manga' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id='form' className=''>
                        <p className='text-white text-[1.7rem] hidden md:block mt-1 haut'>Contactez-moi</p>
                        <p className='text-manga text-[0.9rem] haut mt-4'>Veuillez remplir tous les champs <br /> <span className='text-white'> Si vous avez des questions</span></p>
                        <form action="" onSubmit={bout}>
                            <div id='inp'>
                                <input id='champ' onChange={inpu} required style={{ backgroundColor: "transparent", width: "80%", color:"#fff",borderBottom: "2px solid #507CFA", fontSize: "0.9rem" }} placeholder='Tapez ici votre email' className='form-control btn-sm placeholder-gray-400' type="email" /> <br />
                                <p id='er' style={{display:"none"}} className='text-[0.9rem] text-red-600'>Email incorrect</p>
                                <textarea id='champ1' required name="" style={{ backgroundColor: "transparent", width: "80%", borderBottom: "2px solid #507CFA", fontSize: "0.9rem", color: "#fff", height: 100 }} placeholder='Tapez ici votre question' className='form-control btn-sm' ></textarea>
                            </div>
                            <button id='btns' type='submit' style={{ backgroundColor: "#507CFA", color: "#fff" }} className='btn btn-sm mt-7 px-4'><FontAwesomeIcon icon={faLocationArrow} /> Envoyer</button>
                        </form>
                    </div>
                </div>

                <div className='w-[120%] h-[100vh] mt-[25vh] md:mt-[11vh] bg-manga rotate-[-2deg] hidden md:block bas1'></div>

            </div>
        </>
    );
};

export default Contacte;