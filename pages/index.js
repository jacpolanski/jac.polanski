import React from "react";
import {Splide, SplideSlide} from '@splidejs/react-splide';
import Container from "react-bootstrap/Container";



export default function Home() {
    return (
        <div className="wrapper-index">
            <Container className="d-flex justify-content-center align-items-center">
                <Splide options={{
                    type: "loop",
                    width: "90%",
                    height: "80vh",
                    gap: "2rem",
                    arrows: false,
                    autoplay: true,
                    interval: "15000",
                    speed: "2000",
                }}
                >

                    <SplideSlide>
                        <div
                            className="h-100 w-100 d-flex flex-column justify-content-center align-items-start text-light">
                            <h2 className="text-white mb-5">Hi, my name is Jacek,</h2>
                            <p className="text-light col-xl-8 col-md-9 col-sm-12">
                                I`m a Front-End developer, with former experience in
                                Merchant Navy. Interested in wide range of frontend
                                technologies and working on ambitious projects with
                                positive people.
                            </p>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div
                            className="h-100 w-100 d-flex flex-column justify-content-center align-items-start text-light">
                            {/*<h2 className="text-white mb-5 fs-1">Hi, my name is Jacek,</h2>*/}
                            <p className="text-light col-xl-8 col-md-9 col-sm-12">
                                I am well organized person, good at problem solving, eager
                                to learn new technologies. Fan of hiking, aquarium
                                hobbyist and fish-keeper.
                            </p>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div
                            className="h-100 w-100 d-flex flex-column justify-content-center align-items-start text-light">
                            {/*<h2 className="text-white mb-5 fs-1">Hi, my name is Jacek,</h2>*/}
                            <p className="text-light col-xl-8 col-md-9 col-sm-12">
                                Father of two, girl and boy and family person. Looking for
                                interesting job opportunities. Do not hesitate contact me
                                on below socials if you have any questions.
                            </p>
                        </div>
                    </SplideSlide>

                </Splide>
            </Container>
        </div>
    )
}
