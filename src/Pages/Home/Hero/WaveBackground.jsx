import { motion } from "framer-motion";

const WaveBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient orbs */}
      <motion.div
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle, hsl(195 85% 35% / 0.4) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/2 -left-32 w-80 h-80 rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, hsl(190 70% 55% / 0.5) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 20, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className="absolute bottom-20 right-1/4 w-64 h-64 rounded-full opacity-25"
        style={{
          background:
            "radial-gradient(circle, hsl(15 90% 60% / 0.3) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.15, 1],
          x: [0, -15, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Wave SVG */}
      <svg
        className="absolute bottom-0 left-0 w-full h-32"
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,90 1440,60 L1440,120 L0,120 Z"
          fill="#e0f2fe"
          initial={{
            d: "M0,60 C360,120 720,0 1080,60 C1260,90 1380,90 1440,60 L1440,120 L0,120 Z",
          }}
          animate={{
            d: [
              "M0,60 C360,120 720,0 1080,60 C1260,90 1380,90 1440,60 L1440,120 L0,120 Z",
              "M0,80 C360,20 720,100 1080,40 C1260,60 1380,70 1440,80 L1440,120 L0,120 Z",
              "M0,60 C360,120 720,0 1080,60 C1260,90 1380,90 1440,60 L1440,120 L0,120 Z",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </svg>
    </div>
  );
};

export default WaveBackground;
