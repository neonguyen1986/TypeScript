import { useState } from 'react'
import mobileLogo from '@/assets/img/logo/mobile_logo.png'
import ScrollToContent from '@/utils/ScrollToContent'

const MobileMenu = () => {
    const [activeTab, setActiveTab] = useState<string>('home')
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const style = {
        overflow: "hidden",
        display: isOpen ? 'block' : 'none',
        transition: '1s',
    }
    return (
        <>
            <div className="arlo_tm_mobile_header_wrap">
                <div className="main_wrap">
                    <div className="logo">
                        <a href="index.html"><img src={mobileLogo} alt="mobile_logo" /></a>
                    </div>
                    <div className="arlo_tm_trigger">
                        <div className={isOpen ? "hamburger hamburger--collapse-r is-active" : "hamburger hamburger--collapse-r"}>
                            <div className="hamburger-box">
                                <div className="hamburger-inner"
                                    onClick={() => setIsOpen(!isOpen)}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="arlo_tm_mobile_menu_wrap" style={style}>
                    <div className="mob_menu">
                        <ul className="anchor_nav">
                            <li><a href="#home" className={activeTab === 'home' ? "active" : ""}
                                onClick={(e) => {
                                    ScrollToContent('#home', e)
                                    setActiveTab('home')
                                }}>Home</a>
                            </li>
                            <li><a href="#about" className={activeTab === 'about' ? "active" : ""}
                                onClick={(e) => {
                                    ScrollToContent('#about', e)
                                    setActiveTab('about')
                                }}>About</a>
                            </li>
                            <li><a href="#skills" className={activeTab === 'skills' ? "active" : ""}
                                onClick={(e) => {
                                    ScrollToContent('#skills', e)
                                    setActiveTab('skills')
                                }}>Skills</a>
                            </li>
                            <li><a href="#projects" className={activeTab === 'projects' ? "active" : ""}
                                onClick={(e) => {
                                    ScrollToContent('#projects', e)
                                    setActiveTab('projects')
                                }}>Projects</a>
                            </li>
                            <li><a href="#contact" className={activeTab === 'contact' ? "active" : ""}
                                onClick={(e) => {
                                    ScrollToContent('#contact', e)
                                    setActiveTab('contact')
                                }}>Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MobileMenu