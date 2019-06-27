import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
        "mdbreact";
import style from './style';
import {css} from "emotion";

const CarouselPage = () => {
    return (
        <MDBContainer className={css(style.containerInner)}>
            <MDBCarousel
                activeItem={1}
                length={3}
                showControls={true}
                showIndicators={true}
                className="z-depth-1"
            >
                <MDBCarouselInner className={css(style.carouselInner)}>
                    <MDBCarouselItem itemId="1">
                        <MDBView>
                            <img
                                // className="d-block w-100"
                                className={css(style.imageResize)}
                                src="./banner/banner_msi.jpg"
                                alt="First slide"
                            />
                            {/* <MDBMask overlay="black-light" /> */}
                        </MDBView>
                        {/* <MDBCarouselCaption>
                            <h3 className="h3-responsive">Light mask</h3>
                            <p>First text</p>
                        </MDBCarouselCaption> */}
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="2">
                        <MDBView>
                            <img
                                // className="d-block w-100"
                                className={css(style.imageResize)}
                                src="./banner/banner_asus.jpg"
                                alt="Second slide"
                            />
                            {/* <MDBMask overlay="black-strong" /> */}
                        </MDBView>
                        {/* <MDBCarouselCaption>
                            <h3 className="h3-responsive">Strong mask</h3>
                            <p>Second text</p>
                        </MDBCarouselCaption> */}
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="3">
                        <MDBView>
                            <img
                                // className="d-block w-100"
                                className={css(style.imageResize)}
                                src="./banner/CrazyGamer.jpg"
                                alt="Third slide"
                            />
                            {/* <MDBMask overlay="black-slight" /> */}
                        </MDBView>
                        {/* <MDBCarouselCaption>
                            <h3 className="h3-responsive">Slight Mast</h3>
                            <p>Third text</p>
                        </MDBCarouselCaption> */}
                    </MDBCarouselItem>
                </MDBCarouselInner>
            </MDBCarousel>
        </MDBContainer>
    );
}

export default CarouselPage;