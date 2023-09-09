import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import { IoLogInSharp } from 'react-icons/io5'
import { GiHealthNormal } from 'react-icons/gi'
import { CgFileDocument } from 'react-icons/cg'

import ReactMarkdown from 'react-markdown';

interface IProject {
    image: JSX.Element;
    title: string;
    shortDescription: string;
    detail: {
        description: string;
        technology: string;
        link: string;
        github: string;
    };
}

const Projects = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [dataDetail, setDataDetail] = useState<IProject | null>(null);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const dataProjects: IProject[] = [
        {
            image: <GiHealthNormal size={50} color={'#E3872D'} />,
            title: 'Book Now',
            shortDescription: 'Through this website, patients can choose the appropriate Doctor and Specialty to schedule an online medical examination.',
            detail: {
                technology: 'React Class, React Hook, Node Express, JWT, Redux, PostgresSQL',
                link: 'youtube',
                github: 'git',
                description: `
Built with 2 main pages: Homepage and admin page

**Admin page:**

* Only admins and doctors can access this page.
* Used to add/ edit / delete users, add specialties, add information for doctors...
* Doctor management, patient list management
* Send an email to the patient after making an appointment.Email the prescription after the patient has completed the examination.
* Delegate login rights to doctors and admins.


**Homepage:**

* Patients will be able to access this page.
* Includes components that are dynamically retrieved from the Database.
* This page will contain detailed information for each specialty.
* Contains detailed information of each doctor.
* Displays each doctor's available calendar and allows patients to book appointments.
* After scheduling and completing the examination, the patient will receive an email from Book Now.
* Patients can filter doctors by specialty and by province.
                `,
            }
        },
        {
            image: <IoLogInSharp size={50} color={'#E3872D'} />,
            title: 'JWT project',
            shortDescription: 'JWT practice project. A simple website providing basic functions such as Login, Logout, Delete users.',
            detail: {
                description: `
* A simple project that provides a login form.
* Users can create accounts, log in, delete themselves
* Admin can log in and delete other users
* JWT: This entire project when a user logs in will be given an accessToken, and a refreshToken is also used.
                `,
                technology: 'React Hook, Node Express, JWT, Redux Toolkit, Redux Persist, MongoDB',
                link: 'abc',
                github: 'cde',
            }
        },
        {
            image: <CgFileDocument size={50} color={'#E3872D'} />,
            title: 'Profile project',
            shortDescription: 'Make a CV project. This project will convert code from HTML to React',
            detail: {
                description: `
* Decompose existing HTML components into React components
* Handles all animations from jQuery to React libraries
* Add a backend so users can send emails to my private mailbox.
* Complete the Mobile interface so it can be displayed without using jQuery.
                `,
                technology: 'React Hook, Node Express, Ant Design, some animation library: parallax, progressBar...',
                link: 'abc',
                github: 'cde',
            }
        },
    ]
    return (
        <>
            {/* <Button type="primary" onClick={showModal}>
                Open Modal
            </Button> */}
            {dataDetail !== null &&
                <Modal
                    width={'70vw'}
                    bodyStyle={{ paddingLeft: '20px' }}
                    title={dataDetail.title}
                    open={isModalOpen}
                    onOk={handleOk}
                    okText="Go To Project"
                    okButtonProps={{ style: { backgroundColor: '#E3872D', color: 'white', border: 'none' } }}
                    onCancel={handleCancel}>
                    <ReactMarkdown>{dataDetail.detail.description}</ReactMarkdown>
                    <div style={{ marginTop: '20px' }}> <b>Technology:</b> {dataDetail.detail.technology}</div>
                    <div> <b>Link:</b> {dataDetail.detail.link}</div>
                    <div> <b>Github:</b> {dataDetail.detail.github}</div>

                </Modal >
            }
            <div className="arlo_tm_section" id="projects">
                <div className="arlo_tm_services_wrap">
                    <div className="container">
                        <div className="arlo_tm_title_holder">
                            <h3>My Projects</h3>
                            <span>Check my projects</span>

                        </div>
                        <div className="list_wrap">
                            <ul>
                                {dataProjects?.length > 0
                                    && dataProjects.map((item, index) => {
                                        return (
                                            <li key={index}>
                                                <div className="inner"
                                                    style={{ cursor: 'pointer' }}
                                                    onClick={() => {
                                                        setDataDetail(item)
                                                        setIsModalOpen(true)
                                                    }}
                                                >
                                                    <div className="icon">
                                                        {item.image}
                                                    </div>
                                                    <div className="title_service">
                                                        <h3>{item.title}</h3>
                                                    </div>
                                                    <div className="text">
                                                        <p>{item.shortDescription} ...</p>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    })
                                }

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects