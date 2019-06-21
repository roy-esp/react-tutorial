import React, {Component} from 'react';
import Auxl from '../../hoc/Auxl'


class BurgerBuilder extends Component{
    render() {
        return(
            <Auxl>
                <div>Burger</div>
                <div>Build controls</div>
            </Auxl>
        );
    }
}

export default BurgerBuilder;