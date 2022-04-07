import React from 'react';

import imgSec from '../assets/img/960x640/4.jpg';



export const Home = () => {
  return (
    <>
            <div className="container position-relative py-9 py-lg-11">
                <div className="row justify-content-between align-items-center">
                    <div className="col-lg-6 mb-5 mb-lg-0 order-lg-last" data-aos="fade-up" data-aos-delay="50">
                        <div className="position-relative p-2">

                            {/* <!--Feature Image shape--> */}
                            <svg className="w-100 h-auto" preserveAspectRatio="xMidYMid meet" width="880" height="880" viewBox="0 0 880 880" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M488.983 10.2896C457.62 -2.7016 422.38 -2.7016 391.017 10.2896L170.785 101.512C139.422 114.504 114.504 139.422 101.512 170.785L10.2896 391.017C-2.7016 422.38 -2.70161 457.62 10.2896 488.983L101.512 709.215C114.504 740.578 139.422 765.496 170.785 778.488L391.017 869.71C422.38 882.702 457.62 882.702 488.983 869.71L709.215 778.488C740.578 765.496 765.496 740.578 778.488 709.215L869.71 488.983C882.702 457.62 882.702 422.38 869.71 391.017L778.488 170.785C765.496 139.422 740.578 114.504 709.215 101.512L488.983 10.2896Z"
                                        fill="url(#pattern0)" />
                                    <defs>
                                        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1"
                                            height="1">
                                            <use xlinkHref="#image0_57_4"
                                                transform="translate(-0.0333333) scale(0.00111111)" />
                                        </pattern>
                                        <image id="image0_57_4" width="960" height="900" xlinkHref={imgSec} />
                                    </defs>
                                </svg>
                        </div>
                    </div>
                    <div className="col-lg-5 order-lg-1" data-aos="fade-up" data-aos-delay="100">
                        <h2 className="mb-4 display-5"> <span className="text-gradient-light text-uppercase">Nosotros</span></h2>

                        <p className="mb-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        {/* <!--Feature-card--> */}
                        <div className="d-flex mb-4">
                            <div className="me-3 mt-1">
                                <i className="bx bx-check-circle fs-4"></i>
                            </div>
                            <div>
                                <p className="mb-0">
                                    Viverra nam libero justo laoreet uscipit adipiscing bibendum est ultricies integer.
                                </p>
                            </div>
                        </div>
                        {/* <!--Feature-card--> */}
                        <div className="d-flex">
                            <div className="me-3 mt-1">
                                <i className="bx bx-check-circle fs-4"></i>
                            </div>
                            <div>
                                <p className="mb-0">
                                    Viverra nam libero justo laoreet uscipit adipiscing bibendum est ultricies integer.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container position-relative py-9 py-lg-11">
                {/* <!--feature icons row--> */}
                <div className="row justify-content-center">
                    <div className="col-md-6 text-center mb-7" data-aos="fade-up" data-aos-delay="50">
                        {/* <!--Feature icon--> */}
                        <div className="mb-4 width-10x height-10x flex-center position-relative">
                            {/* <!--Icon bg--> */}
                            <svg className="position-absolute text-primary start-0 top-0 w-100 h-100" preserveAspectRatio="none" width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M55.4078 1.90215C58.3481 0.684225 61.6519 0.684225 64.5922 1.90215L97.8342 15.6714C100.775 16.8894 103.111 19.2255 104.329 22.1658L118.098 55.4078C119.316 58.3481 119.316 61.6519 118.098 64.5922L104.329 97.8342C103.111 100.775 100.775 103.111 97.8342 104.329L64.5922 118.098C61.6519 119.316 58.3481 119.316 55.4078 118.098L22.1658 104.329C19.2255 103.111 16.8894 100.775 15.6714 97.8342L1.90215 64.5922C0.684225 61.6519 0.684225 58.3481 1.90215 55.4078L15.6714 22.1658C16.8894 19.2255 19.2255 16.8894 22.1658 15.6714L55.4078 1.90215Z"
                                        fill="currentColor" />
                                </svg>
                            {/* <!--Icon--> */}
                            <i className="icon-Idea-3 fs-1 text-white position-relative"></i>
                        </div>
                        <div className="d-flex align-items-center mb-3 justify-content-center">
                            <h5 className="mb-0">Creative & elegant</h5>
                        </div>
                        <p className="mb-0 w-lg-75 px-lg-6 mx-auto">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                        </p>
                    </div>
                    <div className="col-md-6 text-center mb-7" data-aos="fade-up" data-aos-delay="100">

                        {/* <!--Feature icon--> */}
                        <div className="mb-4 width-10x height-10x flex-center position-relative">
                            {/* <!--Icon bg--> */}
                            <svg className="position-absolute text-primary start-0 top-0 w-100 h-100" preserveAspectRatio="none" width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M55.4078 1.90215C58.3481 0.684225 61.6519 0.684225 64.5922 1.90215L97.8342 15.6714C100.775 16.8894 103.111 19.2255 104.329 22.1658L118.098 55.4078C119.316 58.3481 119.316 61.6519 118.098 64.5922L104.329 97.8342C103.111 100.775 100.775 103.111 97.8342 104.329L64.5922 118.098C61.6519 119.316 58.3481 119.316 55.4078 118.098L22.1658 104.329C19.2255 103.111 16.8894 100.775 15.6714 97.8342L1.90215 64.5922C0.684225 61.6519 0.684225 58.3481 1.90215 55.4078L15.6714 22.1658C16.8894 19.2255 19.2255 16.8894 22.1658 15.6714L55.4078 1.90215Z"
                                        fill="currentColor" />
                                </svg>
                            {/* <!--Icon--> */}
                            <i className="icon-Code-Window text-white fs-2 position-relative"></i>
                        </div>

                        {/* <!--Feature Text--> */}
                        <div className="d-flex align-items-center mb-3 justify-content-center">
                            <h5 className="mb-0">Reusable components</h5>
                        </div>
                        <p className="mb-0 w-lg-75 px-lg-6 mx-auto">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                        </p>
                    </div>
                    <div className="col-md-6 text-center mb-7" data-aos="fade-up" data-aos-delay="150">

                        {/* <!--Feature icon--> */}
                        <div className="mb-4 width-10x height-10x flex-center position-relative">
                            {/* <!--Icon bg--> */}
                            <svg className="position-absolute text-primary start-0 top-0 w-100 h-100" preserveAspectRatio="none" width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M55.4078 1.90215C58.3481 0.684225 61.6519 0.684225 64.5922 1.90215L97.8342 15.6714C100.775 16.8894 103.111 19.2255 104.329 22.1658L118.098 55.4078C119.316 58.3481 119.316 61.6519 118.098 64.5922L104.329 97.8342C103.111 100.775 100.775 103.111 97.8342 104.329L64.5922 118.098C61.6519 119.316 58.3481 119.316 55.4078 118.098L22.1658 104.329C19.2255 103.111 16.8894 100.775 15.6714 97.8342L1.90215 64.5922C0.684225 61.6519 0.684225 58.3481 1.90215 55.4078L15.6714 22.1658C16.8894 19.2255 19.2255 16.8894 22.1658 15.6714L55.4078 1.90215Z"
                                        fill="currentColor" />
                                </svg>
                            {/* <!--Icon--> */}
                            <i className="icon-Layer-Forward text-white fs-1 position-relative"></i>
                        </div>

                        {/* <!--Feature Text--> */}
                        <div className="d-flex align-items-center mb-3 justify-content-center">
                            <h5 className="mb-0">Unlimited features</h5>
                        </div>
                        <p className="mb-0 w-lg-75 px-lg-6 mx-auto">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                        </p>
                    </div>
                    <div className="col-md-6 text-center mb-7" data-aos="fade-up" data-aos-delay="200">

                        {/* <!--Feature icon--> */}
                        <div className="mb-4 width-10x height-10x flex-center position-relative">
                            {/* <!--Icon bg--> */}
                            <svg className="position-absolute text-primary start-0 top-0 w-100 h-100" preserveAspectRatio="none" width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M55.4078 1.90215C58.3481 0.684225 61.6519 0.684225 64.5922 1.90215L97.8342 15.6714C100.775 16.8894 103.111 19.2255 104.329 22.1658L118.098 55.4078C119.316 58.3481 119.316 61.6519 118.098 64.5922L104.329 97.8342C103.111 100.775 100.775 103.111 97.8342 104.329L64.5922 118.098C61.6519 119.316 58.3481 119.316 55.4078 118.098L22.1658 104.329C19.2255 103.111 16.8894 100.775 15.6714 97.8342L1.90215 64.5922C0.684225 61.6519 0.684225 58.3481 1.90215 55.4078L15.6714 22.1658C16.8894 19.2255 19.2255 16.8894 22.1658 15.6714L55.4078 1.90215Z"
                                        fill="currentColor" />
                                </svg>
                            {/* <!--Icon--> */}
                            <i className="icon-Coffee-toGo text-white fs-1 position-relative"></i>
                        </div>

                        {/* <!--Feature Text--> */}
                        <div className="d-flex align-items-center mb-3 justify-content-center">
                            <h5 className="mb-0">Modern build tools</h5>
                        </div>
                        <p className="mb-0 w-lg-75 px-lg-6 mx-auto">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                        </p>
                    </div>
                    <div className="col-md-6 text-center mb-7 mb-md-0" data-aos="fade-up" data-aos-delay="250">

                        {/* <!--Feature icon--> */}
                        <div className="mb-4 width-10x height-10x flex-center position-relative">
                            {/* <!--Icon bg--> */}
                            <svg className="position-absolute text-primary start-0 top-0 w-100 h-100" preserveAspectRatio="none" width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M55.4078 1.90215C58.3481 0.684225 61.6519 0.684225 64.5922 1.90215L97.8342 15.6714C100.775 16.8894 103.111 19.2255 104.329 22.1658L118.098 55.4078C119.316 58.3481 119.316 61.6519 118.098 64.5922L104.329 97.8342C103.111 100.775 100.775 103.111 97.8342 104.329L64.5922 118.098C61.6519 119.316 58.3481 119.316 55.4078 118.098L22.1658 104.329C19.2255 103.111 16.8894 100.775 15.6714 97.8342L1.90215 64.5922C0.684225 61.6519 0.684225 58.3481 1.90215 55.4078L15.6714 22.1658C16.8894 19.2255 19.2255 16.8894 22.1658 15.6714L55.4078 1.90215Z"
                                        fill="currentColor" />
                                </svg>
                            {/* <!--Icon--> */}
                            <i className="icon-Consulting fs-1 text-white position-relative"></i>
                        </div>

                        {/* <!--Feature Text--> */}
                        <div className="d-flex align-items-center mb-3 justify-content-center">
                            <h5 className="mb-0">Instant support</h5>
                        </div>
                        <p className="mb-0 w-lg-75 px-lg-6 mx-auto">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                        </p>
                    </div>
                    <div className="col-md-6 text-center" data-aos="fade-up" data-aos-delay="300">

                        {/* <!--Feature icon--> */}
                        <div className="mb-4 width-10x height-10x flex-center position-relative">
                            {/* <!--Icon bg--> */}
                            <svg className="position-absolute text-primary start-0 top-0 w-100 h-100" preserveAspectRatio="none" width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M55.4078 1.90215C58.3481 0.684225 61.6519 0.684225 64.5922 1.90215L97.8342 15.6714C100.775 16.8894 103.111 19.2255 104.329 22.1658L118.098 55.4078C119.316 58.3481 119.316 61.6519 118.098 64.5922L104.329 97.8342C103.111 100.775 100.775 103.111 97.8342 104.329L64.5922 118.098C61.6519 119.316 58.3481 119.316 55.4078 118.098L22.1658 104.329C19.2255 103.111 16.8894 100.775 15.6714 97.8342L1.90215 64.5922C0.684225 61.6519 0.684225 58.3481 1.90215 55.4078L15.6714 22.1658C16.8894 19.2255 19.2255 16.8894 22.1658 15.6714L55.4078 1.90215Z"
                                        fill="currentColor" />
                                </svg>
                            {/* <!--Icon--> */}
                            <i className="icon-Coding fs-1 text-white position-relative"></i>
                        </div>

                        {/* <!--Feature Text--> */}
                        <div className="d-flex align-items-center mb-3 justify-content-center">
                            <h5 className="mb-0">Valid code</h5>
                        </div>
                        <p className="mb-0 w-lg-75 px-lg-6 mx-auto">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                        </p>
                    </div>
                </div>

            </div>
    </>
  )
}
