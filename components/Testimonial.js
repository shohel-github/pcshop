import style from '../styles/Testimonial.module.css'

const Testimonial = () => {
    return (
        <div>
            <div className={`${style.testimonial}`}>
                <div className={`row ${style.container_padding}`}>
                    <div className={`${style.section_heading} text-center`}>
                        <h2>Trusted by the world’s most innovative businesses – big and small</h2>
                        <p>After 3 days all of your offers will arrive and you will have another 7 days to select your new company.</p>
                    </div>
                    <div className={`row`}>
                        <div className={`col-md-6`}>
                            <div className={`${style.card_area_testimonial}`}>
                                <div className={`${style.header_area}`}>
                                    <div className={`${style.header_img}`}>
                                        <img src="/testimonial/veronica-adams.jpg" alt="veronica adams"/>
                                    </div>
                                    <div className={`${style.header_title}`}>
                                        <h3>Veronica Adams</h3>
                                        <p>Growth Marketer, Crealytics</p>
                                    </div>
                                </div>
                                <div className={`${style.text_area}`}>
                                    <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</q>
                                </div>
                            </div>
                        </div>
                        <div className={`col-md-6`}>
                            <div className={`${style.card_area_testimonial}`}>
                                <div className={`${style.header_area}`}>
                                    <div className={`${style.header_img}`}>
                                        <img src="/testimonial/akachi-luccini.jpg" alt="akachi luccini"/>
                                    </div>
                                    <div className={`${style.header_title}`}>
                                        <h3>Veronica Adams</h3>
                                        <p>Growth Marketer, Crealytics</p>
                                    </div>
                                </div>
                                <div className={`${style.text_area}`}>
                                    <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</q>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
