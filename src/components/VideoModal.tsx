import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import carVideo from "@/assets/drift.mp4";

const VideoModal = ({ onClose }: { onClose: () => void }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[9990] bg-black/95 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 flex items-center gap-2 font-rajdhani text-white/60 hover:text-white transition-colors"
        >
          <X size={18} /> Press ESC or click outside to close
        </button>
        <video
          ref={videoRef}
          src={carVideo}
          autoPlay
          controls
          className="w-full rounded-2xl border border-neon-red/30"
          style={{ boxShadow: "0 0 60px rgba(255,51,85,0.25)" }}
        />
      </div>
    </div>
  );
};

export default VideoModal;
