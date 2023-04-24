import React,{useState} from "react";
import courseIcon1 from "../../assets/dash/courseIcon1.svg";
import person1 from "../../assets/dash/person1.svg";
import bg1 from "../../assets/background/bg1.jpg";
import ProgressBar from 'react-progress';

function CourseHistory() {
  const [progress, setProgress] = useState(0);

  const handleProgressChange = (event) => {
    setProgress(event.target.value);
  };
  return (
    <div className="mt-6">
      <div className="flex flex-col w-[190px] h-[338px] items-center shadow-lg rounded-lg bg-blue-200 backdrop-filter backdrop-blur-lg">
        <div className="flex flex-col w-[190px] h-[338px] items-center shadow-inner rounded-lg bg-white backdrop-filter backdrop-blur-lg">
          <img
            src={courseIcon1}
            className="self-start w-[50px] h-[50px]"
            alt=""
          />
          {/* Todo: fix the free responsiveness */}
          <h4 className="font-bold text-black text-2xl font-black text-sm self-center ml-3 mt-3">
            Software Engineering for Service Computing
          </h4>
          <div className="flex items-center justify-evenly w-[190px] mt-2">
            <img src={person1} alt="" />
            <p className="font-bold">Alexix Peter</p>
          </div>
          <div className="w-[190px] h-[550px]">
          <p className="h-[20px]">
          In this course, you'll learn about the design and implementation of relational databases, including topics such as data modeling, query optimization, and transaction management.
          </p>
          </div>
     
     
        </div>
      </div>
    </div>
  );
}

export default CourseHistory;

export function LinearProgress({ value }) {
  return (
    <div className="linear-progress">
      <progress value={value} max="100"></progress>
    </div>
  );
}
