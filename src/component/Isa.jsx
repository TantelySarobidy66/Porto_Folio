import { useEffect } from 'react';
import '../css/styles.css'
import CountUp from 'react-countup';


function Isa() {

 const chifre = [
    {
        num: 3,
        text: "Ans d'expériences",
    },
    {
        num: 15,
        text: "Projet à Réaliser",
    },
    {
        num: 6,
        text: "Technologie maitrisée",
    },
    {
        num: +8,
        text: "Maquette terminée",
    },
 ]

  // const [nom, setNom] = useState('');

  useEffect(() => {

  }, []);

  return (
    <>
        <div className="container mx-auto">
            <div id='isa' className='grid grid-cols-2 sm:grid-cols-4'>
                {chifre.map((i,list) => {
                    return (
                        <div key={list} className='ml-[4vw] flex'>
                            <CountUp 
                              end={i.num}
                              duration={20}
                              delay={5}
                              className='text-[5vw] text-white ppp'
                            />
                            <p className='mt-[5vh] ml-5 w-[80px] pp'>{i.text}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    </>
  );
};

export default Isa;