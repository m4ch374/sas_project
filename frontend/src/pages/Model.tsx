import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import InfoInput from "../components/InfoInput";
import ShowScore from "../components/ShowScore";
import TransitionWrapper from "../components/TransitionWrapper";

type TUseSteps = [number, () => void, () => void]

const useSteps = () => {
  const [step, setStep] = useState(0)

  const advanceStep = () => {
    setStep(step + 1)
  }

  const prevStep = () => {
    setStep(step - 1)
  }

  return [step, advanceStep, prevStep] as TUseSteps
}

const Model: React.FC = () => {
  const [setp, advance, prev] = useSteps() as TUseSteps

  const [score, setScore] = useState("")

  const afterHandle = (num: string) => {
    setScore(num)
    advance()
  }

  useEffect(() => {
    console.log(setp)
  }, [setp])

  return (
    <TransitionWrapper>
      <NavBar>
        <Link 
          to={'/'}
          className="
            text-2xl
            border 
            rounded-full
            px-4
            py-1
            border-red-400
            text-red-400
          ">
          Logout
        </Link>
      </NavBar>

      <div className="p-8 mt-[100px] flex justify-center">
        {
          setp == 0 ? <InfoInput afterHandle={afterHandle} /> :
          setp == 1 ? <ShowScore score={score} /> :
          undefined
        }
      </div>
    </TransitionWrapper>
  )
}

export default Model
