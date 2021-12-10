import React from 'react'
import { isMobile } from "react-device-detect";
import { Container } from 'reactstrap';

const styles = {
  bannerCoverPc: {
    backgroundImage: 'url("https://i.ibb.co/mJCHJxb/banner.png")',
    backgroundSize: 'cover'
  },
  bannerCoverMobile: {
    backgroundImage: 'url("https://i.ibb.co/mJCHJxb/banner.png")',
    backgroundSize: 'cover'
  },
  textBanner: {
    textShadow: "3px 3px 3px grey",
    textAlign: 'center',
    color:'white'
  },
  centerButtons: {
    textAlign: 'center',
    padding: '30px'
  },
  titleH1Pc: {
    fontSize: '80px'
  },
  titleH1Mobile: {
    fontSize: '60px'
  }
};

const { bannerCoverPc, bannerCoverMobile, textBanner, titleH1Mobile, titleH1Pc } = styles;



const HeroBanner = () => (
  <div fluid style={isMobile? bannerCoverMobile : bannerCoverPc}>
    <Container fluid style={{height: '250px', color: '#FFBEBE'}}>
      <div style={textBanner}>
        <h1 className="display-3" style={isMobile ? titleH1Mobile : titleH1Pc}>LAI</h1>
        <p>Lai Saetern is an independent hairstylist at Tangelo Hair Salon. They specialize in cut, color and styling for women and men.</p>
      </div>
    </Container>
  </div>
);

export default HeroBanner;