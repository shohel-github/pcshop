// import Image from 'next/image'
import style from '../styles/Footer.module.css'

const Footer = () => {
    return (
        <div>
           <div className={`${style.footer_section}`}>
               <div className={`container`}>
                    <div className={`row`}>
                        <div className={`col-md-2`}>
                            <div className={`logo`}>
                                <img src="/logo-negative.svg" alt="Vercel Logo" width="144" height="32"/>
                            </div>
                            <div className={`${style.social}`}>
                                <ul>
                                    <li><a href=""><i className={`fa fa-facebook`}></i></a></li>
                                    <li><a href=""><i className={`fa fa-facebook`}></i></a></li>
                                    <li><a href=""><i className={`fa fa-facebook`}></i></a></li>
                                    <li><a href=""><i className={`fa fa-facebook`}></i></a></li>                                    
                                </ul>
                            </div>
                        </div>
                        <div className={`col-md-3`}>
                            <div className={`row`}>
                                <div className={`col-md-6`}>
                                    <div className={`footer_menu_area`}>
                                        <div className={`${style.menu_group}`}>
                                            <p>Services</p>
                                            <ul>
                                                <li><a href="">Coworking</a></li>
                                                <li><a href="">Rental</a></li>
                                                <li><a href="">Job Listing</a></li>
                                                <li><a href="">E-Learning</a></li>
                                                <li><a href="">E-Commerce</a></li>
                                                <li><a href="">Expo</a></li>
                                            </ul>
                                        </div>
                                        <div className={`${style.menu_group}`}>
                                            <p>Apps</p>
                                            <ul>
                                                <li><a href="">Desktop App</a></li>
                                                <li><a href="">Mobile App</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className={`col-md-6`}>
                                    <div className={`footer_menu_area`}>
                                        <div className={`${style.menu_group}`}>
                                            <p>Web</p>
                                            <ul>
                                                <li><a href="">Marketing</a></li>
                                                <li><a href="">Overview</a></li>
                                                <li><a href="">Basic</a></li>
                                                <li><a href="">Service</a></li>
                                                <li><a href="">Startup</a></li>
                                                <li><a href="">Enterprise</a></li>
                                                <li><a href="">Cloud Hosting</a></li>
                                                <li><a href="">Agency</a></li>
                                                <li><a href="">Design Company</a></li>
                                                <li><a href="">Logistics</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`col-md-4`}>
                            <div className={`row`}>
                                <div className={`col-md-4`}>
                                    <div className={`footer_menu_area`}>
                                        <div className={`${style.menu_group}`}>
                                            <p>Career</p>
                                            <ul>
                                                <li><a href="">Lising</a></li>
                                                <li><a href="">Lising Minimal</a></li>
                                                <li><a href="">Opening</a></li>
                                            </ul>
                                        </div>
                                        <div className={`${style.menu_group}`}>
                                            <p>Help Center</p>
                                            <ul>
                                                <li><a href="">Overview</a></li>
                                                <li><a href="">Article</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className={`col-md-4`}>
                                    <div className={`footer_menu_area`}>
                                        <div className={`${style.menu_group}`}>
                                            <p>Company</p>
                                            <ul>
                                                <li><a href="">About</a></li>
                                                <li><a href="">About (Cover)</a></li>
                                                <li><a href="">Pricing</a></li>
                                                <li><a href="">Terms</a></li>
                                            </ul>
                                        </div>
                                        <div className={`${style.menu_group}`}>
                                            <p>Contact</p>
                                            <ul>
                                                <li><a href="">Reach View</a></li>
                                                <li><a href="">Sidebar Map</a></li>
                                                <li><a href="">Cover</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className={`col-md-4`}>
                                    <div className={`footer_menu_area`}>
                                        <div className={`${style.menu_group}`}>
                                            <p>Blog</p>
                                            <ul>
                                                <li><a href="">Newsroom</a></li>
                                                <li><a href="">Reach View</a></li>
                                                <li><a href="">Search</a></li>
                                                <li><a href="">Article</a></li>
                                            </ul>
                                        </div>
                                        <div className={`${style.menu_group}`}>
                                            <p>Portfolio</p>
                                            <ul>
                                                <li><a href="">Basic</a></li>
                                                <li><a href="">Masonry</a></li>
                                                <li><a href="">Grid View</a></li>
                                                <li><a href="">Parallax Effect</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`col-md-3`}>
                            <div className={`row`}>
                                <div className={`col-md-6`}>
                                    <div className={`footer_menu_area`}>
                                        <div className={`${style.menu_group}`}>
                                            <p>Settings</p>
                                            <ul>
                                                <li><a href="">General</a></li>
                                                <li><a href="">Securityy</a></li>
                                                <li><a href="">Notifications</a></li>
                                                <li><a href="">Billing</a></li>
                                            </ul>
                                        </div>
                                        <div className={`${style.menu_group}`}>
                                            <p>Sign Up</p>
                                            <ul>
                                                <li><a href="">Simple</a></li>
                                                <li><a href="">Cover</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className={`col-md-6`}>
                                    <div className={`footer_menu_area`}>
                                        <div className={`${style.menu_group}`}>
                                            <p>Sign In</p>
                                            <ul>
                                                <li><a href="">Simple</a></li>
                                                <li><a href="">Cover</a></li>
                                            </ul>
                                        </div>
                                        <div className={`${style.menu_group}`}>
                                            <p>Password Reset</p>
                                            <ul>
                                                <li><a href="">Simple</a></li>
                                                <li><a href="">Cover</a></li>
                                            </ul>
                                        </div>
                                        <div className={`${style.menu_group}`}>
                                            <p>Error</p>
                                            <ul>
                                                <li><a href="">Simple</a></li>
                                                <li><a href="">Cover</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
               </div>
            </div> 
        </div>
    )
}

export default Footer
