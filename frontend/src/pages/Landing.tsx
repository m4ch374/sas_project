import React from "react";
import NavBar from "../components/NavBar";
import LandingBannerDivider from "../assets/divider/LandingBannerDivider";
import { Link } from 'react-router-dom'
import TransitionWrapper from "../components/TransitionWrapper";
import HoverSkewBanner from "../components/HoverSkewBanner";
import Testimonial from "../components/Testimonial";
import TimmyProfile from "/timmy.jpg"
import BobProfile from "/bob.jpg"
import AnnaProfile from "/anna.jpg"
import KavitkaProfile from "/kavitka.jpg"

const Landing: React.FC = () => {
  return (
    <TransitionWrapper>
      <div className="">
        <NavBar>
          <Link to={"/model"}
            className="
              flex 
              gap-2 
              px-4 
              py-1 
              border 
              rounded-full 
              border-slate-300
              hover:border-violet-400
              hover:text-violet-400
              transition-colors
              duration-300
            "
          >
            <h3>Get Started</h3>
          </Link>
        </NavBar>
        
        <div className="w-full mt-[100px] flex flex-col items-center">
          <div className="flex flex-col items-center text-xl font-thin mb-4">
            <h1 className="relative top-0 left-0 z-10 text-2xl font-semibold">Customer profile made simple.</h1>
            <h1 className="relative top-0 left-0 z-10">With our next generation scorecard platform.</h1>
          </div>

          <HoverSkewBanner />

          <div className="-mt-[80px]"> {/* just in case i need some margins and paddings */}
            <LandingBannerDivider />

            <div className="w-full bg-[#552B5C] pb-[80px] relative top-0 left-0 z-20 flex flex-col items-center">
              <h1 className="font-thin text-3xl">Wanna hear our customer testimonials?</h1>
              
              <div className="grid grid-cols-3 w-[80%] mt-[50px] gap-8">
                <Testimonial profilePic={TimmyProfile} profileName="Timmy" position="Rizz manager"
                  twClassName="col-span-2">
                  "Wow, I never thought I would be replacable!"
                </Testimonial>

                <Testimonial profilePic={BobProfile} profileName="Bob" position="CEO"
                  twClassName="col-span-1">
                  "Let's fire Timmy!"
                </Testimonial>

                <Testimonial profilePic={KavitkaProfile} profileName="Kavitka" position="Sanitation"
                  twClassName="col-span-1">
                  "Timmy who?"
                </Testimonial>

                <Testimonial profilePic={AnnaProfile} profileName="Anna" position="Clerk"
                  twClassName="col-span-2">
                  "I think Timmy is getting fired, nice."
                </Testimonial>
              </div>

              <div className="w-full flex flex-col items-center mt-[80px] gap-8">
                  <h1 className="text-4xl">Excited? Get started now!</h1>
                  <Link to={"/model"}
                    className="
                      px-4
                      py-2
                      bg-blue-500
                      text-2xl
                      rounded-full
                      hover:scale-110
                      transition-transform
                      duration-150
                    "
                  >
                    Get Started
                  </Link>
                </div>
            </div>
          </div>
        </div>
      </div>
    </TransitionWrapper>
  )
}

export default Landing
