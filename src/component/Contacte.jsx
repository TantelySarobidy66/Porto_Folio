import { useEffect } from 'react';
import '../css/styles.css'
import $ from 'jquery';
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
        ScrollReveal().reveal(".sar5", {
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
            distance: "10px",
            delay: 700,
            reset: true,
        })
        ScrollReveal().reveal(".bas1", {
            duration: 1000,
            origin: "bottom",
            distance: "10px",
            delay: 700,
            reset: true,
        })
        ScrollReveal().reveal(".bas2", {
            duration: 1000,
            origin: "bottom",
            distance: "10px",
            delay: 700,
            reset: true,
        })
        ScrollReveal().reveal(".bas3", {
            duration: 1000,
            origin: "bottom",
            distance: "10px",
            delay: 700,
            reset: true,
        })
        ScrollReveal().reveal(".bas4", {
            duration: 1000,
            origin: "bottom",
            distance: "10px",
            delay: 700,
            reset: true,
        })
        ScrollReveal().reveal(".bas5", {
            duration: 1000,
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
            $('#btns').css({ opacity: '0' });
        }
        else {
            $('#champ').css({ borderBottom: '2px solid #507CFA', color: '#fff', borderTop: '0.5px solid #507CFA', borderRight: '0.5px solid #507CFA', borderLeft: '0.5px solid #507CFA' });
            $('#er').css({ display: 'none' });
            $('#btns').css({ opacity: '1' });
        }
    }

    function bout(e) {
        e.preventDefault();
        const email = document.getElementById('champ').value;
        const message = document.getElementById('champ1').value;
        axios.post('https://backfolio-wdud.onrender.com/mail', { email, message })
            .then(res => {
                console.log(res.data);
                toast.success("Message envoyer avec succés")
            }).catch(er => console.log(er));
        if (email != "" && message != "") {
            toast.success("Message envoyer avec succés")
        }
        else {
            toast.success("Veuillez Remplir tous les champs")
        }
    }

    return (
        <>
            <div>
                <img className='absolute w-[4vw] left-[85vw] top-[75vh] bas3' src="sary/Ellipse 31.png" alt="" />
                <img id='mondee1' className='absolute w-[80vw] sm:w-[70vw] left-[15vw] top-[62vh] sm:top-[22vh] opacity-[0.3] bas2' src="sary/monde.png" alt="" />
                {/* <img id='mondee2' className='absolute w-[80vw]  left-[10vw] top-[352vh] opacity-[0.5] bas2' src="sary/monde.png" alt="" /> */}
                <img id='mondee3' className='absolute w-[80vw]  left-[10vw] top-[22vh] opacity-[0.6] bas2' src="sary/monde.png" alt="" />


                <div id='conta' className="md:w-[55vw] h-[60vh] ml-5 sm:ml-[20vw] mt-[25vh] grid grid-cols-1 md:grid-cols-2  ">
                    <p  className='text-[#fff] gradien rounded text-[1.7rem] block md:hidden mt-3 bas2'>Contactez-moi</p>
                    <div className='flex col-span-1'>
                        <div id='lie'>
                            <div className="absolute p-2 ml-[-6px] rounded-full gradien bas1"></div>
                            <div className="absolute p-2 ml-[-6px] mt-[23vh]  rounded-full gradien bas3"></div>
                            <div className="absolute p-2 ml-[-6px] mt-[53vh]  rounded-full gradien bas5"></div>
                            <div className="h-[35vh] sm:h-[55vh] w-[0.1rem] bas bg-gray-400"></div>
                        </div>
                        <div className='ml-[15vw] md:ml-7 mt-4'>
                            <div className="flex">
                                <div>
                                    <p className='text-gray-400 text-[0.9rem] md:mt-7 bas2'> <FontAwesomeIcon color='white' icon={faLocationArrow} /> <span className='text-[#fff]'>Adresse :</span> Andrainjato <br />à Fianarantsoa/ <br />Madagascar</p>
                                    <p className='text-white text-[0.9rem] md:mt-7 bas3'>  <FontAwesomeIcon icon={faMessage} /> : <span className='text-gray-400'>  felixsarobidy@gmail.com</span></p>
                                    <p className='text-white text-[0.9rem] md:mt-7 bas4'>  <FontAwesomeIcon icon={faPhone} /> : <span className='text-gray-400'>  +261 34 46 536 09</span></p>
                                    <p className='text-white text-[0.9rem] md:mt-7 bas5'>  <span className='text-gray-400'>  Voici tous les liens de </span> Communication</p>
                                    <div className='icon relative flex mt-4'>
                                        <div className='flex align-items-center justify-center shadow-manga shadow-2xl w-10 h-10 rounded-full cursor-pointer bas2'>
                                            <FaFacebook size={20} className='text-manga' />
                                        </div>
                                        <div className='flex align-items-center justify-center shadow-manga shadow-2xl w-10 h-10 rounded-full ml-4 cursor-pointer bas3'>
                                            <FaGithub size={20} className='text-manga' />
                                        </div>
                                        <div className='flex align-items-center justify-center shadow-manga shadow-2xl w-10 h-10 rounded-full ml-4 cursor-pointer bas4'>
                                            <FaLinkedin size={20} className='text-manga' />
                                        </div>
                                        <div className='flex align-items-center justify-center shadow-manga shadow-2xl w-10 h-10 rounded-full ml-4 cursor-pointer bas5'>
                                            <FaWhatsapp size={20} className='text-manga' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='relative col-span-1'>
                        <p className='gradien px-3 rounded text-[1.7rem] hidden md:block mt-1 bas3'>Contactez-moi</p>
                        <p id='text' className='text-[0.9rem] mt-4 bas4'>Veuillez remplir tous les champs <br /> <span className='text-white'> Si vous avez des questions</span></p>
                        <form action="" onSubmit={bout} className='bas5'>
                            <div>
                                <input id='champ' onChange={inpu} required style={{ backgroundColor: "#000000", width: "95%", color: "#fff", borderRight: "1px solid #507CFA", borderLeft: "1px solid #507CFA", borderTop: "1px solid #507CFA", borderBottom: "2px solid #507CFA", fontSize: "0.9rem" }} placeholder='Tapez ici votre email' className='form-control btn-sm placeholder-gray-400' type="email" /> <br />
                                <p id='er' style={{ display: "none" }} className='text-[0.9rem] flex justify-start text-red-600'>Email incorrect</p>
                                <textarea id='champ' required name="" style={{ backgroundColor: "#000000", width: "95%", borderRight: "1px solid #507CFA", borderLeft: "1px solid #507CFA", borderTop: "1px solid #507CFA", borderBottom: "2px solid #507CFA", fontSize: "0.9rem", color: "#fff", height: 100 }} placeholder='Tapez ici votre question' className='form-control btn-sm' ></textarea>
                            </div>
                            <button id='btns' type='submit' style={{ backgroundColor: "#507CFA", color: "#fff" }} className='btn btn-sm mt-7 gradien w-[85%] sm:w-[35%] sm:px-4'><FontAwesomeIcon icon={faLocationArrow} />&nbsp; Envoyer</button>
                        </form>
                    </div>

                    <div className="flex justify-center md:hidden bas5">
                        <div id='btnFarany' className='w-[90%] h-[2vh] ml-[-5vw] mt-16 gradien rounded' ></div>
                    </div>
                    
                </div>

                <div className="hidden justify-center md:flex bas5">
                        <div className='w-[100%] h-[2vh] mt-16 gradien rounded' ></div>
                 </div>

            </div>

        </>
    );
};

export default Contacte;