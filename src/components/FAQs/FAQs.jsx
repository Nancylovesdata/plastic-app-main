import { useState } from "react";
import { StyleText } from "./StyleText";
import Plus from "../../assets/plus-circle.svg";
import Minus from "../../assets/minus-circle.svg";
import { Navbar } from "../navbar";
import { Footer } from "../footer";

export const FAQ = ({ noImage }) => {
  const faqs = [
    {
      name: "Who should join FluxTribe?",
      description:
        "Anyone who is passionate about their goals and needs some motivation to achieve them.",
    },
    {
      name: "Can I create a community goal on FluxTribe?",
      description:
        "Yes. Either create a goal and invite people to join or join an  already existing community that aims at the same goal as you.",
    },
    {
      name: "Is FluxTribe app free?",
      description:
        "The Fluxtribe App is completely free. You can choose to stake on your goal or not.",
    },
    {
      name: "Can I track individual goal progress on FluxTribe?",
      description: `Each member regularly checks in on their goals according to the community's established rules. Your check-in submissions are then reviewed by two members who are associated with different goals within the community.`,
    },
    {
      name: "How many goals can I create at a time?",
      description:
        "You can create as many goals as you desire to achieve. You are limitless.",
    },
  ];

  const [faqList, setFaqList] = useState(faqs);

  return (
    <>
      <Navbar />
      {noImage ? (
        <div className="relative p-[90px_0_63px]">
          <img
            className="absolute w-full top-0 left-0 z-0"
            // src={GeometricBackground}
            alt="GeometricBackgound"
          />
          <div
            className={`relative grid gap-7 justify-items-center flex z-10 mx-6`}
          >
            <h1 className="text-[#1A1C1F] font-black md:text-[64px] text-3xl whitespace-pre-line md:leading-[73px]">
              <StyleText
                text={"Frequently Asked Questions"}
                coloredText={"Frequently"}
              />
            </h1>
            <p className="text-[#847D81] text-sm md:text-xl md:leading-[40px]">
              Everything you need to know about about Fluxtribe and all it
              unique great features
            </p>
          </div>
        </div>
      ) : null}
      <div
        className={`max-w-[1240px] m-[100px_24px_140px] md:m-[120px_auto_140px] grid ${
          !noImage
            ? "grid-cols-[1fr] md:grid-cols-[470px_1fr]"
            : "grid-cols-[1fr]"
        } gap-9 items-stretch`}
      >
        {!noImage ? (
          <div>
            <h2 className="font-bold text-[#111827] text-[32px]">
              Frequently Asked Questions
            </h2>
            <p className="text-[var(--gray-400)] leading-6  mt-4 max-w-[421px]">
              Everything you need to know about about Fluxtribe and all its
              unique great features
            </p>
            <img className="mt-2 md:pr-[70px]" src="" alt="collage" />
          </div>
        ) : null}
        <div className="flex flex-col gap-4 justify-evenly">
          {faqList?.map(({ name, description }) => (
            <FAQListItem key={name} name={name} description={description} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

const FAQListItem = ({ name, description }) => {
  const [openFaq, setFaq] = useState(false);

  return (
    <div className=" border border-[var(--gray-200)] p-4 tracking-[2% ] rounded-md h-[fit-content]">
      <div className="flex justify-between">
        <p className="font-medium text-lg text-[#111827]">{name}</p>
        <button
          title="button"
          onClick={() => {
            setFaq(!openFaq);
          }}
        >
          <img
            className="transition-all transition-ease"
            src={!openFaq ? Plus : Minus}
            alt=""
          />
        </button>
      </div>
      {openFaq ? <p className="mt-6 text-base">{description}</p> : null}
    </div>
  );
};
