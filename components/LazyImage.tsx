import Image, { ImageProps } from "next/image";
import React, { useState } from "react";

const LazyImage = (props: ImageProps) => {
  const [loading, setLoading] = useState(true);
  return (
    <div className="relative">
      <Image {...props} className={props.className + (loading ? " !opacity-0" : "")} onLoad={() => setLoading(false)}  />
    {loading && <div className="animate-pulse top-0 absolute w-full h-full bg-slate-700"></div>}
    </div>
  );
};

export default LazyImage;
