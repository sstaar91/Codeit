import { useEffect } from "react";

const useScrollBlock = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);
};

export default useScrollBlock;
