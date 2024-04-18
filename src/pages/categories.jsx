import React from "react";
import { Navbar } from "../components/navbar";
import boxes from "../assets/boxes.png";
import Dustbin from "../assets/dustbin.png";
import { Footer } from "../components/footer";

export const Categories = () => {
  return (
    <div>
      <Navbar />
      <div className="relative">
        <img src={boxes} alt="" className="w-full" />
        <div className="text-white max-w-[395px] w-full absolute top-[35%] left-[7%] flex flex-col gap-[30px]">
          <div className="flex flex-col gap-[15px]">
            <p className="text-sm leading-[23.4px] tracking-[0.1em]">
              Treat Your Body Like Your Face
            </p>
            <p className="text-[30px] leading-10 ">
              Highly Effective Body Care
            </p>
            <p className="text-base leading-[27px]">
              A combination of nature and advanced technology. Vegan, natural,
              skin-friendly and rich in effective biotechnological ingredients.
            </p>
          </div>
          <button className="py-[19px] px-[23px] border border-white max-w-[207px] w-full">
            Discover more
          </button>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto flex flex-col gap-8">
        <div className="py-[100px] flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <div className="text-[#333333] flex flex-col gap-1">
              <p className="text-base leading-[23.8px] tracking-[0.1em]">
                Parsley Seed Skin Care
              </p>
              <p className="text-[30px]">Supreme Skin Fortification</p>
            </div>

            <p>
              Discover our potent antioxidant-rich Parsley Seed Skin Care,
              perfect for all skin types.
            </p>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col gap-5 pb-[35px] px-1">
              <div>
                <img src={Dustbin} alt="" srcset="" />
              </div>
              <div className="max-w-[214px] w-full flex flex-col gap-1 text-[#374151]">
                <p className="text-base font-bold tracking-tighter">
                  Reducing waste
                </p>
                <p className="text-sm">
                  Recycled textiles mitigate fashion waste, breathing life into
                  discarded fabrics.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-5 pb-[35px] px-1">
              <div>
                <img src={Dustbin} alt="" srcset="" />
              </div>
              <div className="max-w-[214px] w-full flex flex-col gap-1 text-[#374151]">
                <p className="text-base font-bold tracking-tighter">
                  Reducing waste
                </p>
                <p className="text-sm">
                  Recycled textiles mitigate fashion waste, breathing life into
                  discarded fabrics.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-5 pb-[35px] px-1">
              <div>
                <img src={Dustbin} alt="" srcset="" />
              </div>
              <div className="max-w-[214px] w-full flex flex-col gap-1 text-[#374151]">
                <p className="text-base font-bold tracking-tighter">
                  Reducing waste
                </p>
                <p className="text-sm">
                  Recycled textiles mitigate fashion waste, breathing life into
                  discarded fabrics.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-5 pb-[35px] px-1">
              <div>
                <img src={Dustbin} alt="" srcset="" />
              </div>
              <div className="max-w-[214px] w-full flex flex-col gap-1 text-[#374151]">
                <p className="text-base font-bold tracking-tighter">
                  Reducing waste
                </p>
                <p className="text-sm">
                  Recycled textiles mitigate fashion waste, breathing life into
                  discarded fabrics.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <div className="text-[#333333] flex flex-col gap-1">
              <p className="text-base leading-[23.8px] tracking-[0.1em]">
                Parsley Seed Skin Care
              </p>
              <p className="text-[30px]">Supreme Skin Fortification</p>
            </div>

            <p>
              Discover our potent antioxidant-rich Parsley Seed Skin Care,
              perfect for all skin types.
            </p>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col gap-5 pb-[35px] px-1">
              <div>
                <img src={Dustbin} alt="" srcset="" />
              </div>
              <div className="max-w-[214px] w-full flex flex-col gap-1 text-[#374151]">
                <p className="text-base font-bold tracking-tighter">
                  Reducing waste
                </p>
                <p className="text-sm">
                  Recycled textiles mitigate fashion waste, breathing life into
                  discarded fabrics.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-5 pb-[35px] px-1">
              <div>
                <img src={Dustbin} alt="" srcset="" />
              </div>
              <div className="max-w-[214px] w-full flex flex-col gap-1 text-[#374151]">
                <p className="text-base font-bold tracking-tighter">
                  Reducing waste
                </p>
                <p className="text-sm">
                  Recycled textiles mitigate fashion waste, breathing life into
                  discarded fabrics.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-5 pb-[35px] px-1">
              <div>
                <img src={Dustbin} alt="" srcset="" />
              </div>
              <div className="max-w-[214px] w-full flex flex-col gap-1 text-[#374151]">
                <p className="text-base font-bold tracking-tighter">
                  Reducing waste
                </p>
                <p className="text-sm">
                  Recycled textiles mitigate fashion waste, breathing life into
                  discarded fabrics.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-5 pb-[35px] px-1">
              <div>
                <img src={Dustbin} alt="" srcset="" />
              </div>
              <div className="max-w-[214px] w-full flex flex-col gap-1 text-[#374151]">
                <p className="text-base font-bold tracking-tighter">
                  Reducing waste
                </p>
                <p className="text-sm">
                  Recycled textiles mitigate fashion waste, breathing life into
                  discarded fabrics.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <div className="text-[#333333] flex flex-col gap-1">
              <p className="text-base leading-[23.8px] tracking-[0.1em]">
                Parsley Seed Skin Care
              </p>
              <p className="text-[30px]">Supreme Skin Fortification</p>
            </div>

            <p>
              Discover our potent antioxidant-rich Parsley Seed Skin Care,
              perfect for all skin types.
            </p>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col gap-5 pb-[35px] px-1">
              <div>
                <img src={Dustbin} alt="" srcset="" />
              </div>
              <div className="max-w-[214px] w-full flex flex-col gap-1 text-[#374151]">
                <p className="text-base font-bold tracking-tighter">
                  Reducing waste
                </p>
                <p className="text-sm">
                  Recycled textiles mitigate fashion waste, breathing life into
                  discarded fabrics.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-5 pb-[35px] px-1">
              <div>
                <img src={Dustbin} alt="" srcset="" />
              </div>
              <div className="max-w-[214px] w-full flex flex-col gap-1 text-[#374151]">
                <p className="text-base font-bold tracking-tighter">
                  Reducing waste
                </p>
                <p className="text-sm">
                  Recycled textiles mitigate fashion waste, breathing life into
                  discarded fabrics.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-5 pb-[35px] px-1">
              <div>
                <img src={Dustbin} alt="" srcset="" />
              </div>
              <div className="max-w-[214px] w-full flex flex-col gap-1 text-[#374151]">
                <p className="text-base font-bold tracking-tighter">
                  Reducing waste
                </p>
                <p className="text-sm">
                  Recycled textiles mitigate fashion waste, breathing life into
                  discarded fabrics.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-5 pb-[35px] px-1">
              <div>
                <img src={Dustbin} alt="" srcset="" />
              </div>
              <div className="max-w-[214px] w-full flex flex-col gap-1 text-[#374151]">
                <p className="text-base font-bold tracking-tighter">
                  Reducing waste
                </p>
                <p className="text-sm">
                  Recycled textiles mitigate fashion waste, breathing life into
                  discarded fabrics.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <div className="text-[#333333] flex flex-col gap-1">
              <p className="text-base leading-[23.8px] tracking-[0.1em]">
                Parsley Seed Skin Care
              </p>
              <p className="text-[30px]">Supreme Skin Fortification</p>
            </div>

            <p>
              Discover our potent antioxidant-rich Parsley Seed Skin Care,
              perfect for all skin types.
            </p>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col gap-5 pb-[35px] px-1">
              <div>
                <img src={Dustbin} alt="" srcset="" />
              </div>
              <div className="max-w-[214px] w-full flex flex-col gap-1 text-[#374151]">
                <p className="text-base font-bold tracking-tighter">
                  Reducing waste
                </p>
                <p className="text-sm">
                  Recycled textiles mitigate fashion waste, breathing life into
                  discarded fabrics.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-5 pb-[35px] px-1">
              <div>
                <img src={Dustbin} alt="" srcset="" />
              </div>
              <div className="max-w-[214px] w-full flex flex-col gap-1 text-[#374151]">
                <p className="text-base font-bold tracking-tighter">
                  Reducing waste
                </p>
                <p className="text-sm">
                  Recycled textiles mitigate fashion waste, breathing life into
                  discarded fabrics.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-5 pb-[35px] px-1">
              <div>
                <img src={Dustbin} alt="" srcset="" />
              </div>
              <div className="max-w-[214px] w-full flex flex-col gap-1 text-[#374151]">
                <p className="text-base font-bold tracking-tighter">
                  Reducing waste
                </p>
                <p className="text-sm">
                  Recycled textiles mitigate fashion waste, breathing life into
                  discarded fabrics.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-5 pb-[35px] px-1">
              <div>
                <img src={Dustbin} alt="" srcset="" />
              </div>
              <div className="max-w-[214px] w-full flex flex-col gap-1 text-[#374151]">
                <p className="text-base font-bold tracking-tighter">
                  Reducing waste
                </p>
                <p className="text-sm">
                  Recycled textiles mitigate fashion waste, breathing life into
                  discarded fabrics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
