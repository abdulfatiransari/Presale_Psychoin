import { Button } from "@nextui-org/react";
import React from "react";

const Contact = () => {
  return (
    <div id="support" className="flex px-[250px]  justify-around  items-center gap-16 max-sm:gap-6 mb-10 max-md:px-20 max-sm:px-8 max-lg:px-44 max-sm:flex-wrap">
      <h1 className="text-[#6D00CC] text-[48px] font-semibold max-sm:text-[28px]    max-md:text-[32px]">I’m Here For <br /> You!</h1>
      <div className="flex flex-col gap-4 justify-center leading-[28px] tracking-wide ">
        <p className="font-semibold">I’m here whenever you need me, just send me an email</p>
        <div>
          <Button className="font-semibold flex text-white bg-[#6D00CC] rounded-[100px] px-8 py-6 text-base">
            Send Message
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
