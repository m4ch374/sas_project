import React from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useCountUp } from "use-count-up";

const ShowScore: React.FC<{ score: string }> = ({ score }) => {
  const { value } = useCountUp({
    isCounting: true,
    end: parseFloat(score),
    duration: 1
  })

  return (
    <form className="bg-white w-[80%] max-w-[800px] text-black p-4 rounded-md min-h-[500px]">
      <h1 className="text-black/90 text-2xl">Probability of default: </h1>
      <div className="flex justify-center items-center h-full">
        <div className="h-[50%]">
            <CircularProgressbar value={value as number} text={`${value as string}%`} />
        </div>
      </div>
    </form>
  )
}

export default ShowScore
