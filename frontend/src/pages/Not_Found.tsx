import React from "react";
import TransitionWrapper from "../components/TransitionWrapper";
import Menherra from "/menhera_sorry.png"

const NotFound: React.FC = () => {
  return (
    <TransitionWrapper>
      <div className="flex flex-col w-screen h-screen justify-center items-center">
        <img src={Menherra} width="300px" className="aspect-square" />
        <h1 className="text-5xl font-medium">404 Not Found</h1>
      </div>
    </TransitionWrapper>
  )
}

export default NotFound
