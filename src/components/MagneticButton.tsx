import { useRef, type ReactNode } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  strength?: number;
}

const isFine = typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches;

const MagneticButton = ({ children, strength = 0.35 }: MagneticButtonProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isFine) return;
    const el = ref.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) * strength;
    const y = (e.clientY - top - height / 2) * strength;
    el.style.transform = `translate(${x}px, ${y}px)`;
  };

  const onMouseLeave = () => {
    if (!isFine) return;
    const el = ref.current;
    if (el) el.style.transform = "translate(0, 0)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        display: "inline-block",
        transition: "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      }}
    >
      {children}
    </div>
  );
};

export default MagneticButton;
