import React, { useState } from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useCountUp } from "use-count-up";
import ArrowLeft from "../assets/icons/ArrowLeft";

const ShowScore: React.FC<{ score: string, prev: () => void }> = ({ score, prev }) => {
  const { value } = useCountUp({
    isCounting: true,
    end: parseFloat(score),
    duration: 1
  })

  const handleClick = () => {
    prev()
  }

  return (
    <div className="bg-white w-[80%] max-w-[800px] text-black p-4 rounded-md min-h-[500px]">
      <div className="flex gap-4 items-center">
        <button onClick={handleClick} className="text-slate-500 rounded-full hover:bg-slate-100 aspect-square w-[35px] flex justify-center items-center">
          <ArrowLeft />
        </button>
        <h1 className="text-black/90 text-2xl">Probability of default: </h1>
      </div>
      <div className="flex justify-center items-center h-full">
        <div className="h-[50%]">
            <CircularProgressbar value={value as number} text={`${value as string}%`} />
        </div>
      </div>
    </div>
  )
}

export default ShowScore
