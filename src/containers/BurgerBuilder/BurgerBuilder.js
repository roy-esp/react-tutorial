import React, {Component} from 'react';
import Auxl from '../../hoc/Auxl'
import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends Component{
    render() {
        return(
            <Auxl>
                <Burger/>
                <div>Build controls</div>
            </Auxl>
        );
    }
}

export default BurgerBuilder;