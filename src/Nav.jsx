import { Link } from 'react-router-dom';
import quizLogo from '/quizSVG.svg'; 


function Nav({display}) {
    
    return (
        <div className={`${display ? 'flex': 'hidden'} fixed top-1 left-[10%] right-[10%] z-50 justify-between w-[80%] h-15 px-10 items-center rounded-[35px] border-black drop-shadow-md bg-amber-100 opacity-85`}>
            <img className="w-20 h-21 p-5 ml-0 cursor-pointer" src={quizLogo} alt="Incorrect URL" />

            <ul className='flex flex-wrap gap-10 text-md'>
                <li className='text-center cursor-pointer hover:bg-amber-950 hover:text-white border-transparent rounded-[35px] w-28 h-10 duration-300'>
                    <Link to="/" className='w-full h-full flex justify-center items-center font-[poppins]'><b>Home</b></Link>
                </li>
                <li className='text-center cursor-pointer hover:bg-amber-950 hover:text-white border-transparent rounded-[35px] w-28 h-10 duration-300'>
                    <Link to="/customize" className='w-full h-full flex justify-center items-center font-[poppins]'><b>Customize</b></Link>
                </li>
                <li className='text-center cursor-pointer hover:bg-amber-950 hover:text-white border-transparent rounded-[35px] w-28 h-10 duration-300'>
                    <Link to="/contact" className='w-full h-full flex justify-center items-center font-[poppins]'><b>Contact</b></Link>
                </li>
            </ul>
        </div>
    );
}

export default Nav;
