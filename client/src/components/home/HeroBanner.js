import React from 'react'
import { isMobile } from "react-device-detect";
import { Container } from 'reactstrap';

const { bannerCoverPc, bannerCoverMobile, textBanner, titleH1Mobile, titleH1Pc } = styles

const HeroBanner = () => (
  <div fluid style={isMobile? bannerCoverMobile : bannerCoverPc}>
    <Container fluid style={{height: '250px'}}>
      <div style={textBanner}>
        <h1 className="display-3" style={isMobile ? titleH1Mobile : titleH1Pc}>SALON NAME</h1>
        <p>BLURB</p>
      </div>
    </Container>
  </div>
);

export default HeroBanner;

