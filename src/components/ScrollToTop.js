import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // "instant" behavior is often better for full page navigation feel
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
        });

        // Double-check scroll position after a slight delay to handle 
        // potential layout shifts or race conditions
        const timer = setTimeout(() => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "instant",
            });
        }, 50);

        return () => clearTimeout(timer);
    }, [pathname]);

    return null;
};

export default ScrollToTop;
