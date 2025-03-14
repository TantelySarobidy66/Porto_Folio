import { useEffect } from 'react';
import '../css/styles.css'
// import Slider from "react-slick"
import { BarLoader } from 'react-spinners'
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
      <div className='flex items-center justify-center mt-[40vh]'>
        <div>
        <div>
          <img src="Group 2429.png" alt="" />
        </div>
        <BarLoader size={50} className='mt-3' color='#9610b8b9' />
        </div>
      </div>
    </>
  );
};

export default Load;