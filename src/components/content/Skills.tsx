import CustomProgressBar from "@/utils/CustomProgressBar"

const Skills = () => {

    return (
        <>
            <div className="arlo_tm_section" id='skills'>
                <div className="arlo_tm_skills_wrap">
                    <div className="container">
                        <div className="inner_wrap">
                            <div className="leftbox">
                                <div className="arlo_tm_mini_title_holder">
                                    <h4><strong>Frontend Abilities</strong></h4>
                                </div>
                                <ul>
                                    <li><b>HTML-CSS-Bootstrap:</b> Responsive Web Design</li>
                                    <li><b>JavaScript and Frameworks:</b> React, JavaScript (ES6+), Typescript</li>
                                    <li><b>Development Tools and Processes:</b> Github, npm, Hosting Platforms: Vercel</li>
                                    <li><b>State Management:</b> React Hook, React Class Components, Redux, Redux Toolkit</li>
                                    <li><b>API Integration:</b> Fetching and Displaying Data from APIs</li>
                                </ul>
                            </div>
                            <div className="rightbox">
                                <div className="progress_bar_wrap_total">
                                    <div className="arlo_tm_progress_wrap" data-size="small" data-round="c" data-strip="off">
                                        <div className="arlo_tm_progress" data-value="95" data-color="#000">
                                            <span><span className="label">HTML/CSS/Bootstrap<span className="experience"></span></span><span className="number">90%</span></span>
                                            {CustomProgressBar(90)}
                                        </div>
                                        <div className="arlo_tm_progress" data-value="85" data-color="#000">
                                            <span><span className="label">React (Typescript) <span className="experience"></span></span><span className="number">85%</span></span>
                                            {CustomProgressBar(85)}
                                        </div>
                                        <div className="arlo_tm_progress" data-value="75" data-color="#000">
                                            <span><span className="label">Design UI/UX <span className="experience"></span></span><span className="number">75%</span></span>
                                            {CustomProgressBar(75)}
                                        </div>
                                        <div className="arlo_tm_progress" data-value="90" data-color="#000">
                                            <span><span className="label">State Management<span className="experience"></span></span><span className="number">90%</span></span>
                                            {CustomProgressBar(85)}
                                        </div>
                                        <div className="arlo_tm_progress" data-value="90" data-color="#000">
                                            <span><span className="label">Frontend Website Conversion (HTML to React)<span className="experience"></span></span><span className="number">90%</span></span>
                                            {CustomProgressBar(80)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="arlo_tm_skills_wrap-extra">
                    <div className="container">
                        <div className="inner_wrap">
                            <div className="leftbox">
                                <div className="arlo_tm_mini_title_holder">
                                    <h4><strong>Backend Abilities</strong></h4>
                                </div>
                                <ul>
                                    <li><b>Programming Languages:</b> JavaScript, Python(basic), Java(basic)</li>
                                    <li><b>Backend Frameworks:</b> Node.js, Express.js</li>
                                    <li><b>Database:</b> MySQL, PostgresSQL, MongoDB. (Sequelize)</li>
                                    <li><b>API Development:</b> RESTful APIs</li>
                                    <li><b>Authentication - Authorization:</b> JWT for secure authentication. Role-based access control</li>
                                </ul>
                            </div>
                            <div className="rightbox">
                                <div className="progress_bar_wrap_total">
                                    <div className="arlo_tm_progress_wrap" data-size="small" data-round="c" data-strip="off">
                                        <div className="arlo_tm_progress" data-color="#000">
                                            <span><span className="label">Programming Languages<span className="experience"></span></span><span className="number">85%</span></span>
                                            {CustomProgressBar(85)}
                                        </div>
                                        <div className="arlo_tm_progress" data-color="#000">
                                            <span><span className="label">Backend Frameworks<span className="experience"></span></span><span className="number">80%</span></span>
                                            {CustomProgressBar(80)}
                                        </div>
                                        <div className="arlo_tm_progress" data-color="#000">
                                            <span><span className="label">Database<span className="experience"></span></span><span className="number">80%</span></span>
                                            {CustomProgressBar(80)}
                                        </div>
                                        <div className="arlo_tm_progress" data-color="#000">
                                            <span><span className="label">API Development<span className="experience"></span></span><span className="number">85%</span></span>
                                            {CustomProgressBar(85)}
                                        </div>
                                        <div className="arlo_tm_progress" data-color="#000">
                                            <span><span className="label">Authentication - Authorization<span className="experience"></span></span><span className="number">75%</span></span>
                                            {CustomProgressBar(75)}
                                        </div>
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

export default Skills