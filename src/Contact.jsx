import gitsvg from "/githubSVG.svg"
import mailsvg from "/gmailSVG.svg"
import telesvg from "/teleSVG.svg"
import linkedinsvg from "/linkedinSVG.svg"
function Contact() {
    return (
        <div className="flex h-340 flex-col items-center">
            <h1 className="text-5xl mt-35 font-light slide">Let's Connect Together.</h1>
            <h1 className="text-5xl mt-10 font-light opacity-60 slide">Contact Me.</h1>
            <div className="flex flex-wrap my-20 h-60 w-180 items-center justify-evenly border-white bg-amber-50 rounded-[50%] hover:scale-120 duration-300 fade">
                <a href="https://github.com/Harsh-4bit"><img src={gitsvg} alt="GitHub Logo" className="h-15 w-15 cursor-pointer opacity-65 hover:opacity-100 hover:-translate-y-2 duration-300"/></a>
                <a href="https://github.com/Harsh-4bit"><img src={mailsvg} alt="GitHub Logo" className="h-15 w-15 cursor-pointer opacity-65 hover:opacity-100 hover:-translate-y-2 duration-300"/></a>
                <a href="https://github.com/Harsh-4bit"><img src={telesvg} alt="GitHub Logo" className="h-15 w-15 cursor-pointer opacity-65 hover:opacity-100 hover:-translate-y-2 duration-300"/></a>
                <a href="https://github.com/Harsh-4bit"><img src={linkedinsvg} alt="GitHub Logo" className="h-15 w-15 cursor-pointer opacity-65 hover:opacity-100 hover:-translate-y-2 duration-300"/></a>
            </div>
        
            <div className="w-250 h-150 my-20 mx-auto appear">
                <h1 className="text-5xl text-center font-[poppins]">About Me</h1>
                <p className="text-4xl mt-10 font-light text-center leading-relaxed">
                    Hi!
                    <br />
                    I am Harsh, a passionate web developer.
                    <br />
                    Although I am more focused and enjoy doing frontend development, my goal is 
                    fullstack web development.
                    <br />
                    I believe on learning while building.
                </p>

            </div>
        
        </div>
    );
}

export default Contact;
