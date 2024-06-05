import { Popular1, Popular2 } from "@/components/atom";
import SinglePopular from "./SinglePopular";

export default function Popular() {
  return (
    <div className="pt-[120px] container mx-auto flex flex-col md:flex-row items-center px-[12px] gap-6">
      <SinglePopular
        img={Popular1}
        title="POPULAR COURSES"
        heading="Get The Best Courses &Upgrade Your Skills"
        buttonHref=""
      />
      <SinglePopular
        img={Popular2}
        title="POPULAR COURSES"
        heading="Engaging Courses for Intellectual Exploration"
        buttonHref=""
      />
    </div>
  );
}
