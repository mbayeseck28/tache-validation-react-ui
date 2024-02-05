import { useContext, useEffect } from 'react'
import { SidebareContext } from '../contexte/SidebareContext'

const useSidebare = () => {
    const useSidebare = useContext(SidebareContext)
    const { open, setSmallScreen, screenSize, smallScreen } = useSidebare

    useEffect(() => {
        localStorage.setItem("open", JSON.stringify(open));
        
        setSmallScreen(window.innerWidth)
        console.log(smallScreen, open);
        screenSize()
    }, [open, setSmallScreen, screenSize, smallScreen])

    return useSidebare
}

export default useSidebare
