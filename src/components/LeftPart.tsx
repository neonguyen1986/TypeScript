import desktopLogo from '@/assets/img/logo/desktop-logo.png'
import ScrollToContent from '@/utils/ScrollToContent';
import { useState, useEffect } from 'react'
import { isMobile } from 'react-device-detect'


interface IProps {
    hideLeftPart: boolean;
    setHideLeftPart: (value: boolean) => void;
}

const LeftPart = (props: IProps) => {
    useEffect(() => {
        const { hash } = window.location
        if (hash) {
            const section = document.querySelector(`${hash}`);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                setTimeout(() => {
                    window.location.hash = '#home'
                }, 1000)
            }
        }
    }, [])
    return (
        <>
            <div className={props.hideLeftPart ? "arlo_tm_leftpart_wrap opened" : "arlo_tm_leftpart_wrap"}>
                <div className="leftpart_inner">
                    <div className="logo_wrap">
                        <a href="#"><img src={desktopLogo} alt="desktop-logo" /></a>
                    </div>
                    <div className="menu_list_wrap">
                        <ul className="anchor_nav">
                            <li><a href="#home" onClick={(e) => { ScrollToContent('#home', e) }}>Home</a></li>
                            <li><a href="#about" onClick={(e) => { ScrollToContent('#about', e) }}>About</a></li>
                            <li><a href="#skills" onClick={(e) => { ScrollToContent('#skills', e) }}>Skills</a></li>
                            <li><a href="#projects" onClick={(e) => { ScrollToContent('#projects', e) }}>Projects</a></li>
                            <li><a href="#contact" onClick={(e) => { ScrollToContent('#contact', e) }}>Contact</a></li>
                        </ul>
                    </div>
                    <div className="leftpart_bottom">
                        <div className="social_wrap">
                            <ul>
                                <li><a href="#"><i className="xcon-facebook"></i></a></li>
                                <li><a href="#"><i className="xcon-twitter"></i></a></li>
                                <li><a href="#"><i className="xcon-linkedin"></i></a></li>
                                <li><a href="#"><i className="xcon-instagram"></i></a></li>
                                <li><a href="#"><i className="xcon-behance"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    {!isMobile &&
                        <a
                            className={props.hideLeftPart ? "arlo_tm_resize opened" : "arlo_tm_resize"}
                            href="#"
                            onClick={(e) => {
                                e.preventDefault()
                                props.setHideLeftPart(!props.hideLeftPart)
                            }}//toggle
                        ><i className={props.hideLeftPart ? "xcon-angle-left opened" : "xcon-angle-left"}></i></a>
                    }
                </div>
            </div>
        </>
    )
}

export default LeftPart