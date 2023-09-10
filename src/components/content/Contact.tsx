import { useState } from 'react'
import axios from '@/utils/axios'
import { toast } from 'react-toastify';

interface IApiResponse {
    message: string;
    errCode: number;
    // Add other properties if necessary
}

const Contact = () => {
    const isEmailValid = (email: string) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        // Use the test method to check if the email matches the regex
        return emailRegex.test(email);
    }

    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [message, setMessage] = useState<string>('')

    const handleClickSendEmail = async () => {
        try {
            if (name !== '' && message !== '' && isEmailValid(email)) {
                let dataEmail: object = {
                    name: name,
                    senderEmail: email,
                    body: message,
                }
                let res = await axios.post('/api/send-email', dataEmail);
                console.log('--------check res after:', res)
                if (res) {
                    toast.success('Thank you for your interest in my CV. I will reply as soon as possible.')
                } else {
                    toast.warning('Something wrong with server!')
                }
            } else {
                toast.warning('Please check Name, Email, Message again!')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className="arlo_tm_section" id="contact">
                <div className="container">
                    <div className="arlo_tm_title_holder contact">
                        <h3>Contact Me</h3>
                        <span>Get in touch with me</span>
                    </div>
                </div>
                <div className="arlo_tm_footer_contact_wrapper_all">
                    <div className="arlo_tm_contact_wrap_all">
                        <div className="container">
                            <div className="leftbox">
                                <div className="arlo_tm_mini_title_holder contact">
                                    <h4>Get in Touch</h4>
                                </div>
                                <div className="short_info_wrap">
                                    <ul>
                                        <li><p><label>Email:</label><span><a href="neonguyen.ca@gmail.com">example@gmail.com</a></span></p></li>
                                        <li><p><label>Website:</label><span><a href="mailto:neonguyen.ca@gmail.com" target='_blank'>www.yourdomain.com</a></span></p></li>
                                        <li><p><label>Github:</label><span>+77 022 177 05 05</span></p></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="rightbox">
                                <div className="arlo_tm_contact_wrap">
                                    <div className="main_input_wrap">
                                        <form action="http://frenify.com/" method="post" className="contact_form" id="contact_form">
                                            <div className="returnmessage" data-success="Your message has been received, We will contact you soon."></div>
                                            <div className="empty_notice"><span>Please Fill Required Fields</span></div>
                                            <div className="wrap">
                                                <input id="name"
                                                    type="text"
                                                    placeholder="Your Name"
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)} />
                                            </div>
                                            <div className="wrap">
                                                <input id="email"
                                                    type="text"
                                                    value={email}
                                                    placeholder="Your Email"
                                                    onChange={(e) => setEmail(e.target.value)} />
                                            </div>
                                            <div className="wrap">
                                                <textarea id="message"
                                                    placeholder="Your Message"
                                                    value={message}
                                                    onChange={(e) => setMessage(e.target.value)}>
                                                </textarea>
                                            </div>
                                            <div className="arlo_tm_button">
                                                <a id="send_message" onClick={handleClickSendEmail}>
                                                    <span>
                                                        Send Message
                                                    </span>
                                                </a>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="arlo_tm_footer_wrap">
                        <div className="container">
                            <p>&copy; Copyright 2019. All Rights are Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact