import { useEffect } from "react";

// getting the view port width each time the user resizes the window.

const getViewportWidth = (viewportWidth, setViewportWidth) => {
    

    useEffect(() => {
        const handleResize = () => {
            setViewportWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [viewportWidth]);

}

export default getViewportWidth;