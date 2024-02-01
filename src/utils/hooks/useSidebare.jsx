import { useContext, useEffect } from 'react'
import { SidebareContext } from '../contexte/SidebareContext'

const useSidebare = () => {
    const useSidebare = useContext(SidebareContext)
    const { open, setSmallScreen, screenSize } = useSidebare

    useEffect(() => {
        localStorage.setItem("open", JSON.stringify(open));
        
        setSmallScreen(window.innerWidth)
        screenSize()
    }, [])

    return useSidebare
}

export default useSidebare
