import React, { FormEventHandler, useState } from "react";

type TFormInput = {
  loan_amt: string,
  mort_due: string,
  job: string,
  dti_ratio: string
}

const InfoInput: React.FC<{ afterHandle: (num: string) => void }> = ({ afterHandle }) => {
  const [res, setRes] = useState<Map <string, string>>(new Map())

  const [formInput, setFormInput] = useState<TFormInput>({
    loan_amt: "39025",
    mort_due: "1/1/2024",
    job: "Freelancer",
    dti_ratio: "0.2"
  })

  const submitHandler: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()

    const key = JSON.stringify(formInput)

    if (res.has(key)) {
      afterHandle(res.get(key) as string)
      return
    }

    const score = (Math.floor(Math.random() * 1000) * 0.1).toFixed(1).toString()
    setRes(new Map(res.set(key, score)))
    afterHandle(score)
  }

  return (
    <form onSubmit={submitHandler} className="bg-white w-[80%] max-w-[800px] text-black p-4 rounded-md min-h-[500px] flex flex-col">
      <h1 className="text-3xl">Input customer info</h1>
      <div className="text-3xl h-[90%]">
        <div className="text-xl">
          <h3>Loan amount (thousand):</h3>
          <input onChange={e => setFormInput({...formInput, loan_amt: e.target.value})} placeholder="39025" type="text" id="last_name" className="bg-slate-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[80%] p-2 placeholder:text-black/90" />
        </div>
        <div className="text-xl">
          <h3>Mortgage due at:</h3>
          <input onChange={e => setFormInput({...formInput, mort_due: e.target.value})} placeholder="1/1/2024" className="bg-slate-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[80%] p-2 placeholder:text-black/90" />
        </div>
        <div className="text-xl">
          <h3>Job:</h3>
          <input onChange={e => setFormInput({...formInput, job: e.target.value})} placeholder="Freelancer" className="bg-slate-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[80%] p-2 placeholder:text-black/90"/>
        </div>
        <div className="text-xl">
          <h3>Debt to income ratio:</h3>
          <input onChange={e => setFormInput({...formInput, dti_ratio: e.target.value})} placeholder="0.2" className="bg-slate-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[80%] p-2 placeholder:text-black/90" />
        </div>
      </div>
      <button className="relative -top-1 px-2 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
        Proceed
      </button>
    </form>
  )
}

export default InfoInput
