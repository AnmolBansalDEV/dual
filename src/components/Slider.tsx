import { useState } from "react";
import BigLogo from "./BigLogo";
import CTAButton from "./CTAButton";
import Image from "next/image";
import BackArrowIcon from "@/assets/arrow-left.png";
import RightArrowIcon from "@/assets/arrow-right.png";
import MobileIcon from "@/assets/mobile-img.png";

const Slide1 = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-10 shrink-0">
      <BigLogo />
      <h1 className="font-serif text-[#F4F7F5] text-[33px] max-w-[445px] text-center leading-[37.773px]">
        AI agent&nbsp;
        <span className="font-normal opacity-50">
        to swipe, message, and score hot dates
        </span>
      </h1>
      <CTAButton text="Join Waitlist" />
    </div>
  );
};

const Slide2 = () => {
  return (
    <div className="flex w-full items-center justify-center gap-8 shrink-0">
      <Image
        className="object-contain h-full"
        src={MobileIcon}
        alt="illustration"
      />
      <div className="flex flex-col gap-6">
        <h1 className="font-serif text-white text-5xl max-w-[470px] text-left leading-[54px]">
          Dual does all the swiping on your apps.
        </h1>
        <p className="text-[#575A5E] text-2xl">
          Stop wasting time swiping endlessly.
        </p>
      </div>
    </div>
  );
};

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= 2) {
      return;
    }
    setActiveIndex(newIndex);
  };
  return (
    <div className="relative w-full h-full overflow-hidden flex justify-center items-center">
      {activeIndex !== 0 ? (
        <button
          className="absolute z-1 left-2"
          onClick={() => updateIndex(activeIndex - 1)}
        >
          <Image src={BackArrowIcon} width={25} height={25} alt="previous" />
        </button>
      ) : null}
      <button
        className="absolute z-1 right-2"
        onClick={() => updateIndex(activeIndex + 1)}
      >
        <Image src={RightArrowIcon} width={25} height={25} alt="next" />
      </button>
      <div
        className="flex w-full h-full transition-transform duration-300 pointer-events-none"
        style={{
          transform: `translate(-${activeIndex * 100}%)`,
        }}
      >
        <Slide1 />
        <Slide2 />
      </div>
    </div>
  );
};

export default Slider;
