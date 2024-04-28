import { useState } from "react";
import { StyleText } from "./StyleText";
import Plus from "../../assets/plus-circle.svg";
import Minus from "../../assets/minus-circle.svg";
import { Navbar } from "../navbar";
import { Footer } from "../footer";

export const FAQ = ({ noImage }) => {
  const faqs = [
    {
      name: "What are some common types of plastics used in everyday products?",
      description:
        "Answer: Plastics come in various types, including PET (polyethylene terephthalate), HDPE (high-density polyethylene), PVC (polyvinyl chloride), LDPE (low-density polyethylene), PP (polypropylene), PS (polystyrene), and others.",
    },
    {
      name: "How can I reduce plastic waste in my daily life?",
      description :
        "You can reduce plastic waste by using reusable bags, bottles, and containers, avoiding single-use plastics like straws and utensils, and choosing products with minimal or no plastic packaging.",
    },
    {
      name: "What should I do with plastic items that I no longer need?",
      description:
        " Whenever possible, try to recycle plastic items through your local recycling program. If recycling is not an option, consider repurposing or donating usable items, or disposing of them responsibly in accordance with local waste management guidelines.",
    },
    {
      name: "How can businesses reduce their plastic usage and environmental impact?",
      description: ` Businesses can reduce plastic usage by adopting eco-friendly packaging alternatives, implementing recycling programs, promoting reusable products, and educating employees and customers about sustainable practices.`,
    },
    {
      name: "What are the environmental impacts of plastic pollution?",
      description:
        "Plastic pollution can harm wildlife, contaminate ecosystems, and contribute to the degradation of natural habitats. Additionally, plastics can leach harmful chemicals into soil and water, posing risks to human health.",
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
            <h1 className="text-primary font-black md:text-[64px] text-3xl whitespace-pre-line md:leading-[73px]">
              <StyleText
                text={"Frequently Asked Questions"}
                coloredText={"Frequently"}
              />
            </h1>
            <p className="text-prime text-sm md:text-xl md:leading-[40px]">
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
            <h2 className="font-bold text-prime">
              Frequently Asked Questions
            </h2>
            <p className="text-primary leading-6  mt-4 max-w-[421px]">
              Everything you need to know about about Plastics and all its
            management
            </p>
            {/* <img className="mt-2 md:pr-[70px]" src="" alt="collage" /> */}
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
        <p className="font-medium text-lg text-primary">{name}</p>
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
      {openFaq ? <p className="mt-6 text-base text-prime">{description}</p> : null}
    </div>
  );
};
