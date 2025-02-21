function Footer(){
    return(
        <div className="flex justify-evenly bg-amber-950 p-10">
            <div className="flex flex-col">
                <h1 className="text-xl text-white font-[poppins]">Techstack</h1>
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" className="text-white">HTML</a>
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" className="text-white">JavaScript</a>
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" className="text-white">CSS</a>
            </div>
            <div className="flex flex-col">
                <h1 className="text-xl text-white font-[poppins]">FrameWork</h1>
                <a href="https://legacy.reactjs.org/" className="text-white">ReactJS</a>
                <a href="https://tailwindcss.com/" className="text-white">TailwindCSS</a>
            </div>
            <div className="flex flex-col">
                <h1 className="text-xl text-white font-[poppins]">Assets</h1>
                <a href="https://quizapi.io/" className="text-white">API</a>
                <a href="https://www.svgrepo.com/svg/512317/github-142" className="text-white">SVG</a>
                <a href="https://www.canva.com/" className="text-white">Canva</a>
            </div>
            <div className="flex flex-col">
                <h1 className="text-xl text-white font-[poppins]">Deployment</h1>
                <a href="https://www.vercel.com/" className="text-white">Vercel</a>
                <a href="https://github.com/Harsh-4bit/QuizTime" className="text-white">Gihub</a>
            </div>
        </div>

    );
}
export default Footer