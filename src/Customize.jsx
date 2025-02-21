import Card from './Card'
import sql from '/sql.svg';
import linux from '/linux.svg';
import react from '/react.svg';
import './input.css'
import {useEffect} from 'react';
function Customize({setAmount, setDifficulty, setTopic, display, setDisplay}){
    
    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);

    function selected(x, y, z){
        setTopic(x);
        setDifficulty(y);
        setAmount(z);
    }
    
    return(
       <div className={`${display ? 'block' : 'hidden'} w-full h-[200vh]`}>
            
            <div className='flex flex-col justify-evenly h-300 mt-10'>
                <h1 className='text-3xl text-center font-[poppins]'>Tap on any quiz and start !</h1>

                <div className='flex justify-evenly appear'>
                    <Card top={'React'} dif={'Easy'} sec={50} num={8} img={react} onClick={() => (selected("react", "easy", 8), setDisplay(false))}/>
                    <Card top={'React'} dif={'Medium'} sec={40} num={14} img={react} onClick={() => (selected("react", "medium", 14), setDisplay(false))}/>
                    <Card top={'React'} dif={'Hard'} sec={30} num={20} img={react} onClick={() => (selected("react", "hard", 20), setDisplay(false))}/>
                </div>
                <div className='flex justify-evenly appear'>
                    <Card top={'Linux'} dif={'Easy'} sec={50} num={8} img={linux} onClick={() => (selected("Linux", "easy", 8), setDisplay(false))}/>
                    <Card top={'Linux'} dif={'Medium'} sec={40} num={14} img={linux} onClick={() => (selected("Linux", "medium", 14), setDisplay(false))}/>
                    <Card top={'Linux'} dif={'Hard'} sec={30} num={20} img={linux} onClick={() => (selected("Linux", "hard", 20), setDisplay(false))}/>
                </div>
                <div className='flex justify-evenly appear'>
                    <Card top={'SQL'} dif={'Easy'} sec={50} num={8} img={sql} onClick={() => (selected("sql", "easy", 8), setDisplay(false))}/>
                    <Card top={'SQL'} dif={'Medium'} sec={40} num={14} img={sql} onClick={() => (selected("sql", "medium", 14), setDisplay(false))}/>
                    <Card top={'SQL'} dif={'Hard'} sec={30} num={20} img={sql} onClick={() => (selected("sql", "hard", 20), setDisplay(false))}/>
                </div>

            </div>
       </div>
    );
}
export default Customize;