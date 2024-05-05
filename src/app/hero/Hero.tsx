"use client";
import BaseLayoutProvider from "@/components/layout/BaseLayoutProvider";
import Image from "next/image";
import Info from "./components/Info";
import Right from "./components/Right";

import BgAnims from "./components/BgAnims";

const Hero = ({ bg = "#1c1d25e6", title = "Toms Enģelis" }) => {
  console.log(bg);

  const bgAnim = "bg-[" + bg + "]";
  return (
    <>
      <div className={`${bgAnim} flex flex-col justify-between h-screen `}>
        <BaseLayoutProvider>
          <div className="text-white w-full my-auto relative">
            <div className="container relative px-16">
              <div className="absolute bottom-[-250px] left-[150px] z-0">
                <Image
                  src="/hero_logo.svg"
                  width={620}
                  height={620}
                  alt="background logo"
                />
              </div>
              <Info title={title} />
            </div>
          </div>
        </BaseLayoutProvider>
      </div>
    </>
  );
};

export default Hero;
