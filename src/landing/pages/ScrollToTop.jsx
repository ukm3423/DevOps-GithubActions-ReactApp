import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); // Trigger the effect when the pathname changes

  return null; // This component does not render anything
}

export default ScrollToTop;
