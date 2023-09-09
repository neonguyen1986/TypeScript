import desktopLogo from '@/assets/img/logo/desktop-logo.png'
import ScrollToContent from '@/utils/ScrollToContent';
import { useState, useEffect } from 'react'

interface IProps {
    hideLeftPart: boolean;
    setHideLeftPart: (value: boolean) => void;
}

const LeftPart = (props: IProps) => {
    const [activeTab, setActiveTab] = useState<string>('home')

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
                            <li><a href="#home" className={activeTab === 'home' ? "active" : ""}
                                onClick={(e) => {
                                    ScrollToContent('#home', e)
                                    setActiveTab('home')
                                }}>Home</a></li>
                            <li><a href="#about" className={activeTab === 'about' ? "active" : ""}
                                onClick={(e) => {
                                    ScrollToContent('#about', e)
                                    setActiveTab('about')
                                }}>About</a></li>
                            <li><a href="#skills" className={activeTab === 'skills' ? "active" : ""}
                                onClick={(e) => {
                                    ScrollToContent('#skills', e)
                                    setActiveTab('skills')
                                }}>Skills</a></li>
                            <li><a href="#projects" className={activeTab === 'projects' ? "active" : ""}
                                onClick={(e) => {
                                    ScrollToContent('#projects', e)
                                    setActiveTab('projects')
                                }}>Projects</a></li>
                            <li><a href="#contact" className={activeTab === 'contact' ? "active" : ""}
                                onClick={(e) => {
                                    ScrollToContent('#contact', e)
                                    setActiveTab('contact')
                                }}>Contact</a></li>
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
                    <a
                        className={props.hideLeftPart ? "arlo_tm_resize opened" : "arlo_tm_resize"}
                        href="#"
                        onClick={(e) => {
                            e.preventDefault()
                            props.setHideLeftPart(!props.hideLeftPart)
                        }}//toggle
                    ><i className={props.hideLeftPart ? "xcon-angle-left opened" : "xcon-angle-left"}></i></a>
                </div>
            </div>
        </>
    )
}

export default LeftPart