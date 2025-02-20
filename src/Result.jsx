import trophy from '/trophy.svg'
import { useState } from 'react';

function Result({topic, difficulty, amount, over, count, setOver, setCount, display, setDisplay}){
    const [end, setEnd] = useState(false);

    function backClicked(){
        setEnd(true);
        setDisplay(true);
        setOver(false);
        setEnd(false);
    }
    
    return(
        <div className={`${(over && !end) ? 'flex flex-col' : 'hidden'} h-[95vh] justify-evenly items-center`}>
           <h1 className='text-3xl font-[poppins] text-center font-bold'>{topic.toUpperCase()} QUIZ</h1>
           <h1 className='text-3xl font-mono text-center'>{difficulty.toUpperCase()}</h1>
           
           <div className='flex w-100 h-50 mx-auto justify-center items-center'>
                <img src={trophy} alt="error" className='w-50 h-50 flip backface-visible opacity-50 -z-10'/>
           </div>
            
            <div>
                <h1 className='text-center text-4xl font-[poppins]'>You achieved {Math.ceil((count/amount)*100)}%</h1>
            </div>
            
            <div>
                <h1 className='text-center text-4xl font-[poppins]'>{count}/{amount} {count<2 ? 'is' : 'are'} correct</h1>
            </div>
            <button className='bg-purple-950 text-white w-23 h-10 font-[poppins] rounded-[20px] cursor-pointer hover:bg-purple-200 hover:text-black duration-300' onClick={backClicked}>Back</button>
        
        </div>
    );
}
export default Result;