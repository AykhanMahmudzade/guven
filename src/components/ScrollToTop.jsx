import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Мгновенная прокрутка в самое начало (0,0) при каждой смене пути
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Компонент ничего не рисует, только выполняет логику
};

export default ScrollToTop;