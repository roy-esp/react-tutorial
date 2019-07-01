import React from 'react';
import PropTypes from 'prop-types';
import Auxl from '../../hoc/Auxl';
import classes from './Layout.css';

const layout = (props) => (
    <Auxl>
        <div>Toolbar, Sidedrawer, Backdrop</div>
        <main className={classes.Content}>
        {props.children}
        </main>
    </Auxl>
);

export default layout;