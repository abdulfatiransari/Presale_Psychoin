import { Card, Skeleton } from "@nextui-org/react";
import Image, { ImageProps } from "next/image";
import React, { useState } from "react";

const LazyImage = (props: ImageProps) => {
  const [loading, setLoading] = useState(true);
  return (
    <Skeleton isLoaded={!loading} className="bg-gray-600">
      <Image onLoad={() => setLoading(false)} {...props} />
    </Skeleton>
  );
};

export default LazyImage;
