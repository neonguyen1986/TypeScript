import { TypeAnimation } from 'react-type-animation';
import aboutImg from '@/assets/img/about/1.jpg';
import animationImg from '@/assets/img/about/550x640.jpg';
import myCV from '@/assets/Neo_Nguyen_Resume.pdf'

const About = () => {
    return (
        <>
            <div className="arlo_tm_section relative" id="about">
                <div className="arlo_tm_about_wrapper_all">
                    <div className="container">
                        <div className="arlo_tm_title_holder">
                            <h3>About Me</h3>
                            <span>Main informations about me</span>
                        </div>
                        <div className="arlo_tm_about_wrap">
                            <div className="author_wrap">
                                <div className="leftbox">
                                    <div className="about_image_wrap parallax" data-relative-input="true">
                                        <div className="image layer" data-depth="0.1">
                                            <img src={animationImg} alt="550x640" />
                                            <div className="inner" data-img-url={aboutImg}></div>
                                        </div>
                                        <div className="border layer" data-depth="0.2">
                                            <img src={animationImg} alt="550x640" />
                                            <div className="inner"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="rightbox">
                                    <div className="arlo_tm_mini_title_holder">
                                        <h4>I'm Neo Nguyen. I'm a &nbsp;
                                            <TypeAnimation
                                                sequence={[
                                                    // Same substring at the start will only be typed out once, initially
                                                    "Freelancer",
                                                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                                                    "UI/UX Designer",
                                                    1000,
                                                    "Web Developer",
                                                    1000,
                                                ]}
                                                wrapper="span"
                                                speed={50}
                                                style={{ fontSize: '1.2em', color: '#E3872D', display: 'inline-block' }}
                                                repeat={Infinity}
                                            />
                                        </h4>
                                    </div>
                                    <div className="definition">
                                        <p>Hi! My name is <strong>Neo Nguyen</strong>. I am a Web Developer, I am passionate about creating innovative web solutions. With hands-on experience in technologies like ReactJS, NodeJS, Redux, JWT, MySQL, MongoDB, and Typescript, I am eager to contribute my skills and dedication to drive digital excellence and deliver dynamic web experiences.</p>
                                    </div>
                                    <div className="about_short_contact_wrap">
                                        <ul>
                                            <li>
                                                <span><label>Birthday:</label> 05.25.1986</span>
                                            </li>
                                            <li>
                                                <span><label>Age:</label> 37</span>
                                            </li>
                                            <li>
                                                <span><label>City:</label> Calgary, Alberta, Canada</span>
                                            </li>
                                            <li>
                                                <span><label>Interests:</label> Soccer, Table Tennis</span>
                                            </li>
                                            <li>
                                                <span><label>Study:</label><br /> HCM University of Education - Vietnam <br />George Brown College - Canada</span>
                                            </li>
                                            <li>
                                                <span><label>Degree:</label> Bachelor - Diploma</span>
                                            </li>
                                            <li>
                                                <span><label>Website:</label> <a href="#">www.mywebsite.com</a></span>
                                            </li>
                                            <li>
                                                <span><label>Mail:</label> <a href="mailto:example@gmail.com">neonguyen.ca&#64;gmail.com</a></span>
                                            </li>
                                            <li>
                                                <span><label>Phone:</label> <a href="#">+999 999 9999</a></span>
                                            </li>
                                            <li>
                                                <span><label>Facebook:</label> <a href="https://www.facebook.com/profile.php?id=100010807712082" target='_blank'>&#64;neo_facebook</a></span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="buttons_wrap">
                                        <ul>
                                            <li>
                                                <a href={myCV} download><span>Download CV</span></a>
                                            </li>
                                            {/* <li className="anchor">
                                                <a href="#contact"><span>Send Message</span></a>
                                            </li> */}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About