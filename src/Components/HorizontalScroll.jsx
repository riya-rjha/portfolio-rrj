/* eslint-disable react/prop-types */
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";

function ParallaxText({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax leading-tight">
      <motion.div className="scroller" style={{ x }}>
        <span className="parallax-heading">{children} </span>
        <span className="parallax-heading">{children} </span>
        <span className="parallax-heading">{children} </span>
        <span className="parallax-heading">{children} </span>
      </motion.div>
    </div>
  );
}

export default function App() {
  return (
    <section>
      <ParallaxText baseVelocity={-5}>PROJECTS &nbsp;</ParallaxText>
      <ParallaxText baseVelocity={5}>&nbsp; MINI PROJECTS</ParallaxText>
    </section>
  );
}