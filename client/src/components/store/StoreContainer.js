import React from "react";
import { Container} from "reactstrap";
import NavBarContainer from './StoreNav.js';
import ItemListGender from './ItemListGender.js';
import { Provider } from 'react-redux';

import '../../css/store/store.css';

function StoreContainer() {
    return (
        <Container>
            <Provider>
                <NavBarContainer />
            </Provider>
            <ItemListGender />
        </Container >
    );
}

export default StoreContainer;