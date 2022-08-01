import { useEffect } from "react";

export const useBgColor = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#ccc";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
};
