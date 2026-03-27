import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const CursorFollower = () => {
  const [isHovering, setIsHovering] = useState(false);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target as HTMLElement;
      const isClickable = 
        target.closest("button") || 
        target.closest("a") || 
        target.classList.contains("cursor-pointer");
      
      setIsHovering(!!isClickable);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
      {/* Main Cursor Ring */}
      <motion.div
        style={{
          translateX: cursorX,
          translateY: cursorY,
          x: "-50%",
          y: "-50%",
        }}
        className="absolute w-8 h-8 rounded-full border border-primary/50 mix-blend-exclusion"
        animate={{
          scale: isHovering ? 2.5 : 1,
          backgroundColor: isHovering ? "rgba(255, 59, 59, 0.1)" : "transparent",
          borderColor: isHovering ? "rgba(255, 59, 59, 0.8)" : "rgba(255, 59, 59, 0.4)",
        }}
        transition={{ type: "spring", damping: 20, stiffness: 300, mass: 0.5 }}
      />
      
      {/* Center Dot */}
      <motion.div
        style={{
          translateX: mouseX,
          translateY: mouseY,
          x: "-50%",
          y: "-50%",
        }}
        className="absolute w-1.5 h-1.5 bg-primary rounded-full"
        animate={{
          scale: isHovering ? 0 : 1,
        }}
      />
    </div>
  );
};

export default CursorFollower;
