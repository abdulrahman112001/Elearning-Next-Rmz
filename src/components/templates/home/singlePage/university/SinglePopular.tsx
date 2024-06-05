import { MainButton, MainHeading, MainTitle } from "@/components/molecules";
import Image from "next/image";
import React from "react";

export default function SinglePopular({
  img,
  title,
  heading,
  buttonHref,
}: any) {
  console.log("🚀 ~ img:", img);
  return (
    <div
      className={`relative single-popular lg:w-[50%] p-[60px] px-[20px] rounded-[20px]  bg-[Popular1] overflow-hidden`}
    >
      <Image
        src={'/assets/client/cilent_1_1.png'}
        alt=""
        width={200}
        height={200}
        className=" absolute left-0 top-0 h-full w-full -z-10 bg-cover rounded-[20px]"
      />
      {/* <div
        style={{
          backgroundImage: `url(/assets/client/cilent_1_1.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="w-[200px] h-[200px]"
      ></div> */}
      <MainTitle title={title} className="!text-white" />
      <MainHeading className="text-white !text-[30px] w-[350px]">
        {heading}
      </MainHeading>
      <MainButton href={buttonHref} text="JOIN WITH US" className="bg-white " />
    </div>
  );
}
