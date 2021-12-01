import React from "react";
import { Container} from "reactstrap";
import NavBarContainer from '../components/store/StoreNav.js';
import ItemListGender from '../components/store/ItemListGender.js';
import '../css/store/store.css';
import { Provider } from 'react-redux';

// layout idea- see Example from '../../assets/images/example1.png';
// import Placeholder from '../assets/images/placeholder.png';
// import { BiStore } from "react-icons/bi";



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