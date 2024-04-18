import React from "react";
import PlasticBottles from "../assets/plastic-bottles.png";
import WomanDumpingPlasticBottles from "../assets/woman-dumping-plastics.png";
import Dustbin from "../assets/dustbin.png";

export const Main = () => {
  return (
    <main className="flex flex-col gap-20 py-[90px] max-w-[1200px] mx-auto">
      {/* statistics */}
      <div className="flex flex-col gap-2">
        <h3 className="text-4xl font-bold text-[#374151]">
          What are the Percentages <span className="text-[#3b82f6]">?</span>
        </h3>
        <hr className="max-w-[90px] w-full h-[4px] bg-[#3b82f6]" />
        <p className="text-[#374151] text-sm font-medium">
          What is good about recycling?
        </p>
      </div>
      <div className="flex gap-[70px] items-center">
        <div className="flex flex-col gap-5 py-[35px] px-10 border-4 border-[#3b82f6] rounded-[20px]">
          <div>
            <img src="" alt="" srcset="" />
          </div>
          <div className="flex flex-col gap-5 text-[#374151]">
            <p className="text-base font-bold tracking-tighter">
              Reducing waste
            </p>
            <p className="text-sm">
              Recycled textiles mitigate fashion waste, breathing life into
              discarded fabrics.
            </p>
          </div>
        </div>
        <div className=" w-full flex flex-col gap-5 text-[#374151]">
          <div>
            <p className="text-4xl font-bold tracking-tighter">
              Recycled cotton
            </p>
            <p className="text-[#737373]">In cotton form</p>
          </div>

          <p className="text-sm">
            Recycled textiles mitigate fashion waste, breathing life into
            discarded fabrics.
          </p>
        </div>
      </div>
      {/* how to manage your garbage or something */}
      <div className="flex flex-col gap-2">
        <h3 className="text-4xl font-bold text-[#374151]">
          Why Recycle <span className="text-[#3b82f6]">?</span>
        </h3>
        <hr className="max-w-[90px] w-full h-[4px] bg-[#3b82f6]" />
        <p className="text-[#374151] text-sm font-medium">
          What are the main benefits of recycling?
        </p>
      </div>
      <div className="flex justify-between">
        <div
          className="flex flex-col gap-5 py-[35px] px-10"
          style={{
            boxShadow: "0 10px 10px rgba(0,0,0,0.07)",
          }}
        >
          <div>
            <img src={PlasticBottles} alt="" srcset="" />
          </div>
          <div className="max-w-[214px] w-full flex flex-col gap-5 text-[#374151]">
            <p className="text-base font-bold tracking-tighter">
              Reducing waste
            </p>
            <p className="text-sm">
              Recycled textiles mitigate fashion waste, breathing life into
              discarded fabrics.
            </p>
          </div>
        </div>
        <div
          className="flex flex-col gap-5 py-[35px] px-10"
          style={{
            boxShadow: "0 10px 10px rgba(0,0,0,0.07)",
          }}
        >
          <div>
            <img src={WomanDumpingPlasticBottles} alt="" srcset="" />
          </div>
          <div className="max-w-[214px] w-full flex flex-col gap-5 text-[#374151]">
            <p className="text-base font-bold tracking-tighter">
              Reducing waste
            </p>
            <p className="text-sm">
              Recycled textiles mitigate fashion waste, breathing life into
              discarded fabrics.
            </p>
          </div>
        </div>
        <div
          className="flex flex-col gap-5 py-[35px] px-10 "
          style={{
            boxShadow: "0 10px 10px rgba(0,0,0,0.07)",
          }}
        >
          <div>
            <img src={Dustbin} alt="" srcset="" />
          </div>
          <div className="max-w-[214px] w-full flex flex-col gap-5 text-[#374151]">
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
    </main>
  );
};
