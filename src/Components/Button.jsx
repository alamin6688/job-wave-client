import { motion } from "framer-motion";

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    primary:
      "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 focus:ring-blue-500 border border-transparent",
    secondary:
      "bg-white text-gray-900 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 focus:ring-gray-200",
    outline:
      "bg-transparent border-2 border-white/20 text-white hover:bg-white/10 focus:ring-white/50",
  };
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.95,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
