export const fadeIn = {
  hidden: { opacity: 0 },
  show: { 
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

export const fadeInDown = {
  hidden: { opacity: 0, y: -20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -20 },
  show: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5 }
  }
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 20 },
  show: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5 }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const staggerItem = {
  hidden: { opacity: 0, y: 10 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4 }
  }
};

export const pulse = {
  initial: { scale: 1 },
  animate: { 
    scale: [0.95, 1.05, 0.95],
    transition: { 
      repeat: Infinity, 
      duration: 3, 
      ease: "easeInOut" 
    }
  }
};

export const hoverScale = {
  initial: { scale: 1 },
  whileHover: { 
    scale: 1.05,
    transition: { duration: 0.2 }
  }
};
