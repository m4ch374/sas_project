import React from "react";

type TTestimonial = {
  profilePic: string,
  profileName: string,
  position: string,
  children: string,
  twClassName?: string
}

const Testimonial: React.FC<TTestimonial> = (prop) => {
  return (
    <div className={`testimonial bg-slate-800 ${prop.twClassName || ""}`}>
      <div className="flex gap-4 items-center">
        <img src={prop.profilePic} width="60px" className="rounded-full aspect-square object-cover" />
        <div>
          <h1 className="text-2xl font-medium">{prop.profileName}</h1>
          <h3 className="text-slate-200 font-thin">{prop.position}</h3>
        </div>
      </div>
      <div className="mt-4 font-medium text-xl">
        {prop.children}
      </div>
    </div>
  )
}

export default Testimonial
