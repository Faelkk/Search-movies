import { useState } from "react";
import { Wrapper, SkeletonDiv, Img } from "./Style";

interface SkeletonProps {
  alt: string;
  src: string;
  className: string;
}

const SkeletonImage = ({ alt, src, className }: SkeletonProps) => {
  const [skeleton, setSkeleton] = useState(true);

  function handleLoad(event: React.SyntheticEvent) {
    const target = event.target as HTMLImageElement;
    setSkeleton(false);
    target.style.opacity = "1";
  }

  return (
    <Wrapper className={className}>
      {skeleton && <SkeletonDiv></SkeletonDiv>}
      <Img onLoad={handleLoad} alt={alt} src={src} className={className} />
    </Wrapper>
  );
};

export default SkeletonImage;
