import { MainHeading, MainTitle } from "@/components/molecules";
import Image from "next/image";
import React from "react";

import {
  Client1,
  Client2,
  Client3,
  Client4,
  Client5,
  Client6,
  Client7,
  Client8,
} from "@/components/atom";
import SinglePartners from "./SinglePartners";
export default function Partners() {
  return (
    <div className="pt-[120px] container mx-auto flex flex-col md:flex-row items-center px-[12px]">
      <div className="flex items-center flex-col md:block md:w-[50%]">
        <MainTitle title="OUR TRUSTED PARTNERS" />
        <MainHeading className=" md:max-w-[500px] text-center md:text-left mb-0">
          We Have More Than <span className="text-[#0D5EF4]">4263+</span> Global
          Partners
        </MainHeading>
      </div>

      <div className="partners-picture md:w-[50%] flex flex-wrap">
        <SinglePartners src={Client1} />
        <SinglePartners src={Client2} />
        <SinglePartners src={Client3} />
        <SinglePartners src={Client4} />
        <SinglePartners src={Client5} />
        <SinglePartners src={Client6} />
        <SinglePartners src={Client7} />
        <SinglePartners src={Client8} />
      </div>
    </div>
  );
}
