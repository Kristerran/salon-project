import React from "react";
import { Container} from "reactstrap";
import NavBarContainer from './StoreNav.js';
import ItemListGender from './Containers/ItemListGender';

import '../../css/store/store.css';

function StoreContainer() {
    return (
        <Container>
            <NavBarContainer />
            <ItemListGender />
        </Container >
    );
}

export default StoreContainer;