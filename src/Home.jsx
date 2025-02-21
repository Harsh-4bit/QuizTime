import {useEffect } from 'react';
import quizbg from '/quizBG.png'; 
import tut from '/tut.png';
import brain from '/brain.png';
import degree from '/degree.png';

function Home({display, setDisplay}){
    useEffect(() => {
        if(display) window.scrollTo(0, 0); 
      }, [display]);


    return(
        <div className= {`mx-auto ${display ? 'block' : 'hidden'}`}>
           
           <div className='h-66vh'>
                <img src={quizbg} alt="Incorrect URL" className="mx-auto w-full h-[66vh] opacity-85 object-cover duration-200 ease-in-out Bounce"/> 
           </div>
           
            <div className='flex flex-col justify-center items-center mx-auto w-[80%] h-60 border-b-1'>
                <h1 className='text-5xl font-[poppins] font-extralight p-3 duration-300 ease-in-out slide'>Take a short quiz to brush up your concepts</h1>
                <button className='bg-black text-white w-25 h-12 rounded-md mt-10 border-black font-[poppins] cursor-pointer hover:bg-amber-100 hover:text-amber-800 hover:scale-120 hover:-translate-y-1 duration-200 ease-in-out' onClick={() => setDisplay(false)}>Start Now</button>
                
            </div>
          
        
            <div className= 'flex flex-wrap justify-center mx-auto rounded-[40px] border-amber-800 h-auto p-10 w-[75%] z-10 bg-amber-50 mt-10 duration-200 ease-in-out appear'>
                <h1 className='ml-10 z-10 w-[50%] text-5xl font-light'><b> Customize</b> your quiz based on your current expertise. <br />Have more Fun!
                    <h1 className='text-3xl mt-10 ml-10 font-extralight'>1. Go to <span className='font-mono'>Customize</span> section in navigation.</h1>
                    <h1 className='text-3xl mt-2 ml-10 font-extralight'> 2. Choose your Difficulty.</h1>
                    <h1 className='text-3xl mt-2 ml-10 font-extralight'>3. Come back Home & Start!</h1>  
                </h1>
                <img src={tut} alt="Incorrect URL" className='w-100 h-17 rounded-4xl my-auto mr-10 opacity-60 border-2 drop-shadow-lg border-amber-900 hover:opacity-100 hover:-translate-y-1 hover:rounded-none animate-bounce duration-200 ease-in-out'/>
            </div>
            
            <div className='flex flex-col h-[100vh] w-[70%] justify-evenly mx-auto'>
               <div className='flex h-auto gap-10 justify-between items-center appear'>
                    <img src={brain} alt="Incrrect url" className='w-25 h-20 hover:-translate-y-1 cursor-pointer animate-pulse duration-200 ease-in-out' />
                    <div className='h-auto w-auto'>
                        <h1 className='text-3xl font-[poppins] my-auto hover:scale-105 duration-200 ease-in-out' >Fixed time for each question based on Difficulty.</h1>
                            <h3 className='text-2xl font-sans font-extralight mt-2 duration-200'>
                                Test your knowledge and speed with our interactive quiz! Answer questions within a fixed time, challenge yourself, and improve your quick thinking. Are you ready to compete and learn?
                            </h3>
                    </div>
               </div>
               
               <div className='flex h-auto justify-between gap-10 appear'>
                    <img src={degree} alt="incorrect url" className='w-25 h-20 hover:-translate-y-1 cursor-pointer animate-pulse duration-200 ease-in-out' />
                    <div>
                        <h1 className='text-3xl font-[poppins] my-auto hover:scale-105 duration-200 ease-in-out'>Detailed solution for each question to improve understanding.</h1>
                            <h3 className='text-2xl font-sans font-extralight mt-2 duration-200'>
                                Get in-depth explanations for every question! Learn from detailed solutions that help you understand concepts, improve problem-solving skills, and avoid mistakes in the future.
                            </h3>
                    </div>
               </div>
                    <button className='bg-black text-white w-25 h-12 mx-auto rounded-md font-[poppins] cursor-pointer hover:bg-amber-100 hover:text-amber-800 hover:scale-120 hover:-translate-y-1 duration-200 ease-in-out' onClick={() => setDisplay(!display)}>Start</button>

            </div>

        </div>   
    );
}
export default Home