import React, {useState} from 'react'
import './Onglets.css'
function Onglets() {

    const [toggleState, setToggleState] = useState(1)

    return (
        <div>
            <div className="contBtn">
                <div className={`onglets ${toggleState === 1 && 'active'}`} onClick={() => setToggleState(1)}>Francais</div>
                <div className={`onglets ${toggleState === 2 && 'active'}`} onClick={() => setToggleState(2)}>Anglais</div>
            </div>
            <div className="container">
                {toggleState === 1 ? 
                <p className="contenu fr">FR Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam itaque et incidunt delectus ducimus blanditiis facilis repudiandae, quam amet quis consequuntur culpa! Temporibus quo doloremque exercitationem odio nostrum voluptate reiciendis esse rem est laborum nesciunt non consequatur cum, alias nobis rerum necessitatibus vitae quaerat, cumque tempore soluta sed ipsa. Soluta dolores labore autem quisquam voluptatum ducimus ipsum qui rerum? Sequi fugiat sit atque, harum at non excepturi quo magni debitis consequatur quas ipsa illo nulla veniam quaerat perspiciatis, rem architecto, perferendis laboriosam fugit nisi quasi quis velit maxime. Aspernatur, quaerat? Suscipit deserunt nisi cum esse qui beatae dolores cumque minima?</p>
                :
                <p className="contenu en">EN Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam itaque et incidunt delectus ducimus blanditiis facilis repudiandae, quam amet quis consequuntur culpa! Temporibus quo doloremque exercitationem odio nostrum voluptate reiciendis esse rem est laborum nesciunt non consequatur cum, alias nobis rerum necessitatibus vitae quaerat, cumque tempore soluta sed ipsa. Soluta dolores labore autem quisquam voluptatum ducimus ipsum qui rerum? Sequi fugiat sit atque, harum at non excepturi quo magni debitis consequatur quas ipsa illo nulla veniam quaerat perspiciatis, rem architecto, perferendis laboriosam fugit nisi quasi quis velit maxime. Aspernatur, quaerat? Suscipit deserunt nisi cum esse qui beatae dolores cumque minima?</p>}
            </div>
        </div>
    )
}

export default Onglets
