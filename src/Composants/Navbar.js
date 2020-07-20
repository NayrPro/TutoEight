import React, {useState, useEffect} from 'react'
import './Navbar.css'

function Navbar() {
    
    const [largeur, setLargeur] = useState(window.innerWidth)
    const [toggleMenu, setToggleMenu] = useState(false)
    
    const toggleNavScrollScreen = () => {
        setToggleMenu(!toggleMenu)
    }
    
    const changeWidth = (e) => {
        setLargeur(window.innerWidth)
        if(window.innerWidth > 500){
            setToggleMenu(false)
        }
        console.log(largeur)
    }
    
    useEffect(() => {
        window.addEventListener("resize", changeWidth)

            // return () => {
            //     window.removeEventListener("resize", changeWidth)
            // }
            
        },[])
        
        return (
            <div>
            <nav>
                {(toggleMenu || largeur > 500) && (
                    <div className="liste">
                        <div className="items">Accueil</div>
                        <div className="items">Service</div>
                        <div className="items">Contact</div>
                    </div>       
                )}
            </nav>
            <div onClick={toggleNavScrollScreen} className="btn">BTN</div>
        </div>
    )
}

export default Navbar
