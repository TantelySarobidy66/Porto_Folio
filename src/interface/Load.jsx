import { useEffect } from 'react';
import '../css/styles.css'
// import Slider from "react-slick"
import { MoonLoader } from 'react-spinners'
import { useNavigate } from 'react-router-dom';

function Load() {

  const ary = useNavigate();

  useEffect(() => {
   setTimeout(() => {
    ary("/Login")
   }, 4000);
  }, []);

  return (
    <>
      <div className='flex items-center justify-center mt-[45vh]'>
        <MoonLoader size={50} color='#507CFA' />
      </div>
    </>
  );
};

export default Load;