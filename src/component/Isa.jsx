import { useEffect } from 'react';
import '../css/styles.css'
import CountUp from 'react-countup';


function Isa() {

 const chifre = [
    {
        num: 4,
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
 ]

  // const [nom, setNom] = useState('');

  useEffect(() => {

  }, []);

  return (
    <>
        <div className="container mx-auto">
            <div id='isa' className='grid grid-cols-2 md:grid-cols-5'>
                {chifre.map((i,list) => {
                    return (
                        <div key={list} className='flex'>
                            <CountUp 
                              end={i.num}
                              duration={15}
                              delay={3}
                              className='text-[2.5rem] sm:text-[3.8rem] text-white ppp'
                            />
                            <p className='mt-[1vh] text-gray-600 sm:mt-[3vh] ml-5 w-[80px]'>{i.text}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    </>
  );
};

export default Isa;