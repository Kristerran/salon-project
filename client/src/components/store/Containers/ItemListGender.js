import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
 import { oneKeywordForFilter } from '../actions/DataFetchAction';
import { Row, Col, Card, CardImg, Container } from 'reactstrap';

const styles = {
  cardTitle: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: '20px'
  },
  cardBtn: {
    textAlign:'center'
  },
  card: {
    marginBottom: '20px'
  }
};

const categoryWomen = [
    {
      imgSrc:'',
      cardTitle:'Shampoo',
      linkCategory:'Shampoo & Conditioner'
    },
    {
        imgSrc:'',
        cardTitle:'Shampoo',
        linkCategory:'Shampoo & Conditioner'
    },
    {
        imgSrc:'',
        cardTitle:'Shampoo',
        linkCategory:'Shampoo & Conditioner'
    },
    {
        imgSrc:'',
        cardTitle:'Shampoo',
        linkCategory:'Shampoo & Conditioner'
    }
  ];

const categoryMen = [
  {
    imgSrc:'',
      cardTitle:'Shampoo',
      linkCategory:'Shampoo & Conditioner'
  },
  {
    imgSrc:'',
      cardTitle:'Shampoo',
      linkCategory:'Shampoo & Conditioner'
  },
  {
    imgSrc:'',
      cardTitle:'Shampoo',
      linkCategory:'Shampoo & Conditioner'
  },
  {
    imgSrc:'',
      cardTitle:'Shampoo',
      linkCategory:'Shampoo & Conditioner'
  }
];


const decorationData = gender => gender === 'women' ? categoryWomen : categoryMen;

const eachCategory = (gender, oneKeywordForFilter) => (
  decorationData(gender).map(x=>(
    <Col md='4' style={styles.card} key={x.cardTitle}>
      <Card>
          <div style={styles.cardBtn} onClick={()=>oneKeywordForFilter(x.cardTitle)}>
            <Link to={`/ItemList/${gender}/`}>
              <CardImg src={x.imgSrc} alt="Card image cap" style={{boxShadow: '0px 0px 7px 0px rgba(0,0,0,0.75)'}}/>
              <div style={{position: 'absolute', top: '40%', textAlign: 'center', width: '100%', color: 'white', fontSize: '200%'}}>
                <b> {x.cardTitle} </b>
              </div>
            </Link>
          </div>

      </Card>
    </Col>
  ))
);


const ItemListGender = props => {
  const { gender } = props.match.params
  const { oneKeywordForFilter } = props
  return (
  <Container style={{paddingTop:'30px', paddingBottom:'50px'}}>
    <Col md="12">
      <h1 style={{fontSize: '40px', textAlign:'center', padding:'20px'}}>{gender.charAt(0).toUpperCase()+gender.slice(1)} selection</h1>
      <Row>
        {eachCategory(gender, oneKeywordForFilter)}
      </Row>
    </Col>
  </Container>

)};

const mapDispatchToProps = dispatch => ({oneKeywordForFilter: x => dispatch(oneKeywordForFilter(x))});
const mapStateToProps = state => ({oneKeywordForFilter: state.oneKeywordForFilter});

export default connect(mapStateToProps, mapDispatchToProps)(ItemListGender);

