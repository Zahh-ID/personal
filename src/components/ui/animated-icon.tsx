import { useRef, useEffect, useState } from "react";
import Lottie from "lottie-react";
import type { LottieRefCurrentProps } from "lottie-react";

interface AnimatedIconProps {
  src: string;
  className?: string;
  loop?: boolean;
  playOnHover?: boolean;
}

export const AnimatedIcon = ({
  src,
  className,
  loop = false,
  playOnHover = true,
}: AnimatedIconProps) => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const [data, setData] = useState<object | null>(null);

  useEffect(() => {
    fetch(src)
      .then((r) => r.json())
      .then(setData);
  }, [src]);

  if (!data) return <div className={className} />;

  return (
    <div
      onMouseEnter={() => {
        if (playOnHover && lottieRef.current) {
          lottieRef.current.goToAndPlay(0);
        }
      }}
      className={className}
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={data}
        loop={loop}
        autoplay={!playOnHover}
      />
    </div>
  );
};
