import style from '../styles/FeaturesBanner.module.css'

const FeaturesAfterBanner = () => {
    return (
        <div>
            <div className={`${style.features_after_banner}`}>
                <div className={`row ${style.container_padding}`}>
                    <div className={`${style.section_heading}`}>
                        <h2>The most sold products</h2>
                        <p>After 3 days all of your offers will arrive and you will have another 7 days to select your new company.</p>
                    </div>
                    <div className={`row`}>
                        <div className={`col-md-3`}>
                            <div className={`${style.card_area_sold}`}>
                                <div className={`${style.img_area}`}>
                                    <img src="/sold/product7.png" alt="product"/>
                                </div>
                                <div className={`${style.text_area} text-center`}>
                                    <h3>Laptops and computers</h3>
                                </div>
                            </div>
                        </div>
                        <div className={`col-md-3`}>
                            <div className={`${style.card_area_sold}`}>
                                <div className={`${style.img_area}`}>
                                    <img src="/sold/product8.png" alt="product"/>
                                </div>
                                <div className={`${style.text_area} text-center`}>
                                    <h3>Phones and tablets</h3>
                                </div>
                            </div>
                        </div>
                        <div className={`col-md-3`}>
                            <div className={`${style.card_area_sold}`}>
                                <div className={`${style.img_area}`}>
                                    <img src="/sold/product9.png" alt="product"/>
                                </div>
                                <div className={`${style.text_area} text-center`}>
                                    <h3>Headphones and airpods</h3>
                                </div>
                            </div>
                        </div>
                        <div className={`col-md-3`}>
                            <div className={`${style.card_area_sold}`}>
                                <div className={`${style.img_area}`}>
                                    <img src="/sold/product8.png" alt="product"/>
                                </div>
                                <div className={`${style.text_area} text-center`}>
                                    <h3>iWatch and smartwatch</h3>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturesAfterBanner
