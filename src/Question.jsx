import { useEffect, useState } from 'react';
import clock from '/clock.svg';
import axios from 'axios';

function Question({ amount, difficulty, topic, display, setDisplay, over, setOver, count, setCount }) {
    const [time, setTime] = useState(20);
    const [dispSol, setDispSol] = useState(false);
    const [data, setData] = useState([]);
    const [problem, setProblem] = useState("loading...");
    const [id, setId] = useState(0);
    const [arr, setArr] = useState(["option1", "option2", "option3", "option4"]);
    const [answer, setAnswer] = useState("loading...");
    const [correct, setCorrect] = useState('x');
    const [choice, setChoice] = useState('x');

    const url = `https://quizapi.io/api/v1/questions?apiKey=4fedWuKzdzUVYhUZYQBJddVm4FG4bF2YjhlacEaj&category=${topic}&difficulty=${difficulty}&limit=${amount}`;

    // Function to reset quiz state when restarting
    useEffect(() => {
        if(!display) window.scrollTo(0, 0); // Scrolls to the top when this component is mounted
      }, [display]);
    
    
    function resetState() {
        setTime(20);
        setId(0);
        setDispSol(false);
        setData([]);
        setProblem("loading...");
        setArr(["option1", "option2", "option3", "option4"]);
        setAnswer("loading...");
        setChoice('x');
        setCorrect('x');
        setOver(false);
        setCount(0);
    }

    // Fetch quiz questions when quiz starts
    useEffect(() => {
        if (!display) {
            resetState();
            axios.get(url)
                .then((response) => {
                    setData(response.data);
                    console.log(response.data);
                    setId(0); // Set to 0 so first question appears
                })
                .catch(() => setData([])); // Handle error
        }
    }, [display]);

    // Load a new question when `id` changes
    useEffect(() => {
        if (data.length > 0 && id < data.length) {
            const questionData = data[id];
            let newArr = ['a', 'b', 'c', 'd'];
            let correctAns = 'x';

            for (let i = 0; i < 4; i++) {
                if (questionData['correct_answers'][`answer_${newArr[i]}_correct`] === "true") {
                    correctAns = newArr[i];
                }
                newArr[i] = questionData["answers"][`answer_${newArr[i]}`] || "N/A";
            }

            setProblem(questionData["question"]);
            setArr(newArr);
            setAnswer(questionData["explanation"] || "No explanation provided.");
            setCorrect(correctAns);
        }
    }, [id, data]);

    // Timer countdown effect
    useEffect(() => {
        if (!display && correct !== 'x') {
            if (time === 0) {
                setDispSol(true);
                return;
            }
            const timeoutID = setTimeout(() => setTime((prev) => prev - 1), 1000);
            return () => clearTimeout(timeoutID);
        }
    }, [time, display, correct]);

    // Handle next question
    function nextClicked() {
        if (choice === correct) setCount((prev) => prev + 1);

        if (id === amount - 1) {
            setOver(true);
            return;
        }

        setId((prev) => prev + 1);
        setTime(20);
        setDispSol(false);
        setChoice('x');
    }

    // Dynamic styling for answer buttons
    function postStyle(ch) {
        if (dispSol) {
            if (ch === correct) return 'border-green-500 bg-green-100 pointer-events-none';
            if (ch === choice && ch !== correct) return 'border-red-500 bg-red-100 pointer-events-none';
            return 'bg-white border-gray-300 pointer-events-none';
        }
        return 'bg-white border-gray-300 cursor-pointer';
    }

    return (
        <div className={`${(!display && !over) ? 'flex flex-col' : 'hidden'} justify-evenly h-260 mt-10`}>
            {/* Question Box */}
            <div className="flex flex-wrap w-[80%] h-30 items-center mx-auto rounded-3xl bg-gray-100">
                <p className="font-[poppins] text-[20px] w-auto h-auto p-5">
                    <div className='bg-purple-300 w-22 h-6 p-1 text-center text-[13px] rounded-[20px]'>
                        Question {id + 1}
                    </div>
                    {problem}
                </p>
            </div>

            {/* Answer Options */}
            <div className="flex justify-between w-[80%] h-[100%] mx-auto mt-6">
                <div className="flex flex-col justify-evenly w-110 h-[500px]">
                    {['a', 'b', 'c', 'd'].map((ch, index) => (
                        <div key={ch} className={`w-auto h-auto p-5 border-2 font-[poppins] rounded-[27px] 
                            ${postStyle(ch)} hover:border-black hover:-translate-y-1 duration-200 ease-in-out`}
                            onClick={() => { setChoice(ch); setDispSol(true); }}>
                            {index + 1}. {arr[index]}
                        </div>
                    ))}
                </div>

                {/* Timer */}
                <div className={`${dispSol ? 'hidden' : 'flex'} justify-center w-[50%] h-120 items-center`}>
                    <div className='flex flex-col items-center w-[100%] h-25 justify-between'>
                        <img src={clock} alt="error" className='w-16 h-16 opacity-70 toggle' />
                        <h1 className='text-2xl text-center font-bold font-[poppins] bg-purple-200 w-11 h-9 p-1 m-1 rounded-[10px]'>
                            {time}
                        </h1>
                    </div>
                </div>

                {/* Explanation + Next Button */}
                <div className={`${dispSol ? 'flex flex-col' : 'hidden'} justify-evenly w-180 h-120`}>
                    <div className='flex flex-wrap justify-center w-auto h-auto bg-green-50 rounded-[15px] cursor-grab p-5 hover:scale-110 hover:-translate-y-2 duration-300'>
                        <h1 className='text-center text-2xl font-bold font-mono'>Explanation</h1>
                        <h3 className='flex flex-wrap text-[20px] p-10 font-[poppins] font-[50]'>{answer}</h3>
                    </div>
                    <button className='bg-blue-950 text-white w-23 h-10 rounded-[20px] mx-auto cursor-pointer hover:bg-blue-300 duration-300' onClick={nextClicked}>
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Question;
