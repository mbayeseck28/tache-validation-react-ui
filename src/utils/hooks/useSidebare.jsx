import { useCallback, useContext, useEffect } from 'react'
import { SidebareContext } from '../contexte/SidebareContext'

const useSidebare = () => {
    const useSidebare = useContext(SidebareContext)
    const { open, setSmallScreen, screenSize, smallScreen } = useSidebare

    const updateScreenSize = useCallback(() => {
        setSmallScreen(window.innerWidth);
        screenSize()
    }, [setSmallScreen, screenSize]);

    useEffect(() => {
        const handleResize = () => {
            updateScreenSize();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [updateScreenSize]);

    useEffect(() => {
        localStorage.setItem('open', JSON.stringify(open));
        updateScreenSize();
        screenSize()
    }, [open, setSmallScreen, screenSize, updateScreenSize, smallScreen]);

    return useSidebare
}

export default useSidebare
