import { useEffect, useRef } from "react";

interface ScrollListenerProps {
  onScrollUp: () => void;
  onScrollDown: () => void;
}

const ScrollListener: React.FC<ScrollListenerProps> = ({
  onScrollUp,
  onScrollDown,
}) => {
  const lastScrollY = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        onScrollDown();
      } else if (currentScrollY < lastScrollY.current) {
        onScrollUp();
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [onScrollUp, onScrollDown]);

  return null;
};

export default ScrollListener;
