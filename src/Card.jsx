function Card({top, dif, sec, num, img, onClick}){
    
    function Style1(dif){
        if(dif === 'Easy'){
            return 'border-2 border-green-400 bg-green-50 hover:drop-shadow-[0px_0px_35px_rgba(0,255,127,0.75)]';
        }
        else if(dif === 'Hard'){
            return 'border-2 border-red-400 bg-red-50 hover:drop-shadow-[0px_0px_35px_rgba(255,0,0,0.75)]';
        }
        return 'border-2 border-orange-400 bg-orange-50 hover:drop-shadow-[0px_0px_35px_rgba(255,165,0,0.75)]';
    }
    
    function Style2(dif){
        if(dif === 'Easy'){
            return 'bg-green-500'
        }
        else if(dif === 'Hard') return 'bg-red-500';
        return 'bg-orange-500';
    }
    
    return(
        <div className={`flex flex-col justify-evenly items-center w-100 h-60 relative overflow-hidden ${Style1(dif)} text-black bg-gray-100 rounded-[12px] cursor-pointer hover:-translate-y-2 duration-300`} onClick={onClick}>
            
            <img src={img} alt="error" className='absolute inset-0 w-full h-full opacity-20 animate-[ping_3s_infinite]'/>
           
            <div className='flex flex-col h-full justify-evenly items-center relative z-10 text-black'>
                <h1 className="text-3xl font-[poppins] font-bold">{top} Quiz</h1>
                <h1 className={`text-2xl px-3 rounded-[20px] text-white font-[poppins] ${Style2(dif)}`}>{dif}</h1>
                <h1 className='text-2xl font-mono '>Time : {sec}s</h1>
                <h1 className='text-2xl font-mono'>{num} Quetions</h1>
            </div>
        </div>
     );
}
export default Card;