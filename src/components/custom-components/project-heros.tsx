"use client"
import { Rock_Salt } from 'next/font/google'
import { words } from "@/app/Data";
import BlurFadeText from "../magicui/blur-fade-text";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import Image3D from "./3d-image";
import Meteors from '../magicui/meteors';
const satisfy = Rock_Salt({
  subsets: ['latin'],
  variable: '--font-satisfy',
  weight: "400"
})

export default function ProjectHeros() {
    return(
      <div>

      <Meteors number={50}/>

        <div className="h-screen w-fit flex items-center px-4">

        <div className="flex flex-col md:p-0 p-4 xl:ml-14">
          <div>
            <div>
              <div className="flex w-fit px-1">
              <BlurFadeText text="👋 I'm" delay={0.2} className="xl:text-9xl flex text-8xl text-white font-[800] w-fit opacity-95 ">
           
              </BlurFadeText>
              <BlurFadeText text="Harsh" delay={0.2} className={`xl:text-8xl ml-4 xl:mt-4  text-purple-400 ${satisfy.variable} font-caveat flex text-6xl mt-4  font-[1000] w-fit opacity-95 `}>
           
           </BlurFadeText>
           </div>
              <TextGenerateEffect
                className="opacity-95 w-fit px-2 xl:w-[800px]"
                words={words}
              />
              <br />
            </div>
 
              
          </div>
        </div>
          <Image3D/>
      </div>
      </div>
    )
}