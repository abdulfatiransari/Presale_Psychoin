import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div className="flex px-28 justify-center mt-10 gap-6 mb-10 max-md:px-10 max-sm:px-8 max-sm:flex-wrap">
      <h1 className="text-[#6D00CC] text-[48px] font-semibold max-sm:text-[28px] max-md:text-[32px]">I’m Here For You!</h1>
      <div className="flex flex-col gap-4">
        <p>I’m here whenever you need me, just send me an email.</p>
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
