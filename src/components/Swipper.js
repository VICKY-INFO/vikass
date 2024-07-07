import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../css/swiper.css';

import { FaCode } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";
import { IoLogoGithub } from "react-icons/io";

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import smith from '../imgs/Group_5.png'
import Gym from '../imgs/Gym.png'
import fire_system from '../imgs/fire_system.png'
import lcd_game from '../imgs/lcd_game.png'
import smart_home from '../imgs/smart_home.png'
import calculator from '../imgs/calculator.png'
import converter from '../imgs/converter.png'
import autoParking from '../imgs/Automatic barrier and security syste.jpg'
import WebProjects from './WebProject';
import EmbeddedProject from './EmbeddedProject';
import '../css/project.css'

export default function Swipper(props) {
    return (
        <>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper"
            >

                {/* Web Projects */}

                {
                    props.webTitle == 'web' ? (
                        <>
                            <SwiperSlide webTitle={props.webTitle}>
                                <WebProjects projectImg={smith} icon1={<FaCode />} icon2={<FaExternalLinkAlt />} projectType='web design' projectName='smith' codeUrl='https://github.com/' previewUrl='https://www.linkedin.com/' />
                            </SwiperSlide>

                            <SwiperSlide webTitle={props.webTitle}>
                                <WebProjects projectImg={Gym} icon1={<FaCode />} icon2={<FaExternalLinkAlt />} projectType='web design' projectName='Gym' codeUrl='https://github.com/' previewUrl='https://github.com/' />
                            </SwiperSlide>
                        </>

                    ) : null
                }


                {/* Embedded Projects */}
                {
                    props.embeddedTitle == 'embedded' ? (
                        <>
                            <SwiperSlide embeddedTitle={props.embeddedTitle}>
                                <EmbeddedProject projectImg={fire_system} icon1={<ImLinkedin2 />} projectType='embedded system' projectName='fire system' href1='https://www.linkedin' />
                            </SwiperSlide>

                            <SwiperSlide embeddedTitle={props.embeddedTitle}>
                                <EmbeddedProject projectImg={lcd_game} icon1={<ImLinkedin2 />} icon2={<IoLogoGithub />} projectType='embedded system' projectName='LCD game' href1='https://www.linkedin.com/' href2='https://github.com/' />
                            </SwiperSlide>

                            <SwiperSlide embeddedTitle={props.embeddedTitle}>
                                <EmbeddedProject projectImg={smart_home} icon1={<ImLinkedin2 />} icon2={<IoLogoGithub />} projectType='embedded system' projectName='smart home' href1='https://www.linkedin.com/' href2='https://github.com/' />
                            </SwiperSlide>

                            <SwiperSlide embeddedTitle={props.embeddedTitle}>
                                <EmbeddedProject projectImg={calculator} icon1={<ImLinkedin2 />} icon2={<IoLogoGithub />} projectType='embedded system' projectName='calculator' href1='https://www.linkedin.com/' href2='https://github.com/' />
                            </SwiperSlide>

                            <SwiperSlide embeddedTitle={props.embeddedTitle}>
                                <EmbeddedProject projectImg={converter} icon1={<ImLinkedin2 />} icon2={<IoLogoGithub />} projectType='embedded system' projectName='converter' href1='https://www.linkedin.com/' href2='https://github.com/' />
                            </SwiperSlide>

                            <SwiperSlide embeddedTitle={props.embeddedTitle}>
                                <EmbeddedProject projectImg={autoParking} icon1={<ImLinkedin2 />} projectType='embedded system' projectName='auto parking' href1='https://www.linkedin.co/' />
                            </SwiperSlide>

                        </>
                    ) : null
                }






            </Swiper>
        </>
    );
}
