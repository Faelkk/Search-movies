import React from "react";

import { Wrapper, SkeletonDiv, Img } from "./Style";

interface SkeletonProps {
  alt: string;
  src: string;
}

const SkeletonImage = ({ alt, src }: SkeletonProps) => {
  const [skeleton, setSkeleton] = React.useState(true);

  function handleLoad(event: React.SyntheticEvent) {
    const target = event.target as HTMLImageElement;
    setSkeleton(false);
    target.style.opacity = "1";
  }

  return (
    <Wrapper>
      {skeleton && <SkeletonDiv></SkeletonDiv>}
      <Img onLoad={handleLoad} alt={alt} src={src} />
    </Wrapper>
  );
};

export default SkeletonImage;
