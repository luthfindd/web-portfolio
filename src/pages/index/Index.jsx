import React from "react";
import Nav from "@/components/nav/Nav";

import indexCSS from './../index/Index.module.css';

import heroImg from '@/assets/pasfoto2.jpg';
import aboutImage from '@/assets/about.jpeg';
import frontend from '@/assets/Frontend.png';
import Backend from '@/assets/Backend.png';
import UiUxDesign from '@/assets/UiUx.png';

import { ReactTyped } from "react-typed";

import projectImg01 from '@/assets/portfolio-image-01.png'
import projectImg02 from '@/assets/portfolio-image-02.png'
import projectImg03 from '@/assets/portfolio-image-03.png'
import projectImg04 from '@/assets/portfolio-image-04.png'

function Index () {
    return (
        <div>
             {/*-----Header-----*/}
            <div id="Home" className={indexCSS.headerWrapper}>
             <Nav/>

            <div className={indexCSS.headerContainer}>
                 <div className={indexCSS.headerContent}>
                        <h5>Hello  I m </h5>
                        <h1>Luthfi</h1>
                        <p>A Passionate &nbsp;
                        <span>
                            <ReactTyped 
                            strings={['Web Designer', 'App designer', 'UI / UX Designer']}
                            typeSpeed={40}
                            loop={true}
                            backSpeed={40}
                            ></ReactTyped>
                        </span>
                        </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis assumenda deleniti corrupti incidunt magnam totam beatae facilis temporibus quidem illo! Ratione, dolore assumenda amet quas enim corporis explicabo ducimus cum!</p>

                        <div className={indexCSS.social}>
                            <i className="ri-facebook-line"></i>
                            <i className="ri-instagram-line"></i>
                            <i className="ri-twitter-x-line"></i>
                            <i className="ri-github-line"></i>
                        </div>

                        <button>
                            CV <i className="ri-file-list-3-line"></i>
                        </button>
                 </div>
                 <div className={indexCSS.headerImage}>
                    <img src={heroImg} alt="hero-image"/>

                    <div className={indexCSS.borderAnimation}></div>

                 </div>
            </div>
            </div>

            <section id="about" className={`${indexCSS.about_wrapper}`}>

                <h2 className="SectionTitle">About Me</h2>
                
                <div className={indexCSS.about}>
                <div className={indexCSS.aboutImage}>
                    <img src={aboutImage} alt=""/>
                </div>
                <div className={indexCSS.aboutContent}>
                    <div className={indexCSS.aboutCard}>
                        <img src={frontend} alt="front-end"></img>
                        <div className={indexCSS.aboutCardContent}>
                            <h3>Frontend Developer</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit in, alias quae nam voluptatum doloribus et maxime nisi, ad perferendis corporis adipisci! Expedita explicabo veritatis sit ab laborum! Aperiam, molestias!</p>
                        </div>
                    </div>
                    <div className={indexCSS.aboutCard}>
                        <img src={Backend} alt="front-end"></img>
                            <div className={indexCSS.aboutCardContent}>
                                <h3>Backend Developer</h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit in, alias quae nam voluptatum doloribus et maxime nisi, ad perferendis corporis adipisci! Expedita explicabo veritatis sit ab laborum! Aperiam, molestias!</p>
                            </div>
                    </div>
                    <div className={indexCSS.aboutCard}>
                        <img src={UiUxDesign} alt="front-end"></img>
                            <div className={indexCSS.aboutCardContent}>
                                <h3>Ui / UX Designer</h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit in, alias quae nam voluptatum doloribus et maxime nisi, ad perferendis corporis adipisci! Expedita explicabo veritatis sit ab laborum! Aperiam, molestias!</p>
                            </div>
                    </div>
                </div>
                </div>
            </section>

            <section id="Experience" className={indexCSS.Experience_container}>
                <h2 className="SectionTitle">My Experience</h2>

                <div className={indexCSS.Experience}> 
                    <div className={indexCSS.Skils_wrapper}>
                        <h3>My Skills</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ratione, assumenda iure labore quam adipisci, ipsum vero illo, optio repellat rerum! Veniam, aut rerum. Hic.</p>

                        <div className={indexCSS.Skils}>
                            <div className={indexCSS.Skill}>
                                <h4>HTML</h4>
                                <div className={`${indexCSS.SkillBar} ${indexCSS.Skill_HTML}`} data-value="60%"></div>
                            </div>

                            <div className={indexCSS.Skill}>
                            <h4>CSS</h4>
                                <div className={`${indexCSS.SkillBar} ${indexCSS.Skill_CSS}`} data-value="70%"></div>
                            </div>

                            <div className={indexCSS.Skill}>
                            <h4>JavaScript</h4>
                                <div className={`${indexCSS.SkillBar} ${indexCSS.Skill_JS}`} data-value="85%"></div>
                            </div>

                            <div className={indexCSS.Skill}>
                            <h4>React JS</h4>
                                <div className={`${indexCSS.SkillBar} ${indexCSS.Skill_REACT}`} data-value="75%"></div>
                            </div>

                            <div className={indexCSS.Skill}>
                            <h4>Java</h4>
                                <div className={`${indexCSS.SkillBar} ${indexCSS.Skill_JAVA}`} data-value="90%"></div>
                            </div>

                        </div>

                    </div>
                    <div className={indexCSS.Experience_wrapper}>
                        <div className={indexCSS.Experience_card}>
                            <h3>BackEnd Dev PLN Icon Plus</h3>
                            <p>Dec , 2022 - present</p>
                            <ul>
                                <li>Develop and maintenance bugs for the PLN employee attendance Application.</li>
                                <li> Porting the operating system Adjusting the software from spring to quarkus for the SCM Marketplace Application.</li>
                            </ul>
                        </div>

                        <div className={indexCSS.Experience_card}>
                            <h3>UI Designer, Freelance</h3>
                            <p>Jan 2023 - 2024  </p>
                            <ul>
                                <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae asperiores nemo maiores nulla est sint!</li>
                                <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae asperiores nemo maiores nulla est sint!</li>
                                <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae asperiores nemo maiores nulla est sint!</li>
                            </ul>
                        </div>

                        <div className={indexCSS.Experience_card}>
                            <h3>FrontEnd Dev, Freelance</h3>
                            <p>Jun 2024 - present</p>
                            <ul>
                                <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae asperiores nemo maiores nulla est sint!</li>
                                <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae asperiores nemo maiores nulla est sint!</li>
                                <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae asperiores nemo maiores nulla est sint!</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            <section id="Projects" className={indexCSS.projects_container}>
                <h2 className="SectionTitle">My Projects</h2>

                <div className={indexCSS.projects}>
                    <div className={indexCSS.project}>
                        <img src={projectImg01} alt="project-image-01" />

                        <div className={indexCSS.project_content}>
                                <h3>Mobile App Development</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, debitis.</p>
                                <i className="ri-arrow-right-line"></i>
                        </div>
                    </div>
                    <div className={indexCSS.project}>
                        <img src={projectImg02} alt="project-image-01" />

                        <div className={indexCSS.project_content}>
                                <h3>Software Development</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, debitis.</p>
                                <i className="ri-arrow-right-line"></i>
                        </div>
                    </div>
                    <div className={indexCSS.project}>
                        <img src={projectImg03} alt="project-image-01" />

                        <div className={indexCSS.project_content}>
                                <h3>Website Development</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, debitis.</p>
                                <i className="ri-arrow-right-line"></i>
                        </div>
                    </div>
                    <div className={indexCSS.project}>
                        <img src={projectImg04} alt="project-image-01" />

                        <div className={indexCSS.project_content}>
                                <h3>eCommerce Development</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, debitis.</p>
                                <i className="ri-arrow-right-line"></i>
                        </div>
                    </div>
                </div>
            </section>

            <section id="Contacts"className={indexCSS.contact_wrapper}>
                <h3 className="SectionTitle">Get In Touch</h3>

                <div className={indexCSS.contact}>
                    <div className={indexCSS.contact_form}>
                        <h4>Send a Message</h4>

                        <div className={indexCSS.input_wrapper}>
                            <input type="text" placeholder="First Name"/>
                            <input type="text" placeholder="Last Name"/>
                        </div>

                        <div className={indexCSS.input_wrapper}>
                            <input type="emai;" placeholder="Email"/>
                            <input type="phone" placeholder="Enter Phone"/>
                        </div>

                        <textarea placeholder="Message"></textarea>

                        <button>Submit</button>

                    </div>
                    <div className={indexCSS.contact_details}>
                        <h4>contact Info</h4>

                        <div className={indexCSS.info_wrapper}>
                            <i className="ri-phone-line"></i>
                            <span>+62 3456789</span>
                        </div>

                        <div className={indexCSS.info_wrapper}>
                            <i className="ri-mail-line"></i>
                            <span>example@gmail.com</span>
                        </div>

                        <div className={indexCSS.info_social}>
                            <i className="ri-instagram-line"></i>
                            <i className="ri-facebook-line"></i>
                            <i className="ri-twitter-x-line"></i>
                            <i className="ri-github-line"></i>
                        </div>

                        

                    </div>
                </div>
            </section>

            <section className={indexCSS.footer}>
                <div className={indexCSS.footerLinks}>
                    <a href="#Home">Home</a>
                    <a href="#about">About</a>
                    <a href="#Experience">Experience</a>
                    <a href="#Projects">Projects</a>
                    <a href="#Contact">Contact</a>
                </div>
                <p>
                    @copyright Luthfi Nd
                </p>
            </section>

        </div>
    )
}

export default Index