import style from '../styles/Features.module.css'

const Features = () => {
    return (
        <div>
            <div className={`features_product ${style.section_padding}`}>
                <div className={`row`}>
                    <div className={`${style.section_heading} ${style.text_center}`}>
                        <h2>Featured products</h2>
                        <p>After 3 days all of your offers will arrive and you will have another 7 days to select your new company.</p>
                    </div>
                </div>
                <div className={`row`}>
                    <div className={`col-md-4`}>
                        <div className={`${style.card_area}`}>
                            <div className={`${style.img_area}`}>
                                <img src="/features/product1.png" alt="product"/>
                            </div>
                            <div className={`${style.text_area}`}>
                                <h3>Music Player</h3>
                                <div className={`${style.ratings}`}>
                                    <i className={`fa fa-star`}></i>
                                    <i className={`fa fa-star`}></i>
                                    <i className={`fa fa-star`}></i>
                                    <i className={`fa fa-star`}></i>
                                    <i className={`fa fa-star`}></i>    
                                                                
                                </div>
                                <div className={`${style.group_item}`}>
                                    <h4>$320</h4>
                                    <a href="" class={`btn btn-primary ${style.cart}`}>Add To Cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`col-md-4`}>
                        <div className={`${style.card_area}`}>
                            <div className={`${style.img_area}`}>
                                <img src="/features/product2.png" alt="product"/>
                            </div>
                            <div className={`${style.text_area}`}>
                                <h3>Music Player</h3>
                                <div className={`${style.ratings}`}>
                                    <i className={`fa fa-star`}></i>
                                    <i className={`fa fa-star`}></i>
                                    <i className={`fa fa-star`}></i>
                                    <i className={`fa fa-star`}></i>
                                    <i className={`fa fa-star`}></i>    
                                                                
                                </div>
                                <div className={`${style.group_item}`}>
                                    <h4>$320</h4>
                                    <a href="" class={`btn btn-primary ${style.cart}`}>Add To Cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`col-md-4`}>
                        <div className={`${style.card_area}`}>
                            <div className={`${style.img_area}`}>
                                <img src="/features/product3.png" alt="product"/>
                            </div>
                            <div className={`${style.text_area}`}>
                                <h3>Music Player</h3>
                                <div className={`${style.ratings}`}>
                                    <i className={`fa fa-star`}></i>
                                    <i className={`fa fa-star`}></i>
                                    <i className={`fa fa-star`}></i>
                                    <i className={`fa fa-star`}></i>
                                    <i className={`fa fa-star`}></i>    
                                                                
                                </div>
                                <div className={`${style.group_item}`}>
                                    <h4>$320</h4>
                                    <a href="" class={`btn btn-primary ${style.cart}`}>Add To Cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`col-md-4`}>
                        <div className={`${style.card_area}`}>
                            <div className={`${style.img_area}`}>
                                <img src="/features/product4.png" alt="product"/>
                            </div>
                            <div className={`${style.text_area}`}>
                                <h3>Music Player</h3>
                                <div className={`${style.ratings}`}>
                                    <i className={`fa fa-star`}></i>
                                    <i className={`fa fa-star`}></i>
                                    <i className={`fa fa-star`}></i>
                                    <i className={`fa fa-star`}></i>
                                    <i className={`fa fa-star`}></i>    
                                                                
                                </div>
                                <div className={`${style.group_item}`}>
                                    <h4>$320</h4>
                                    <a href="" class={`btn btn-primary ${style.cart}`}>Add To Cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`col-md-4`}>
                        <div className={`${style.card_area}`}>
                            <div className={`${style.img_area}`}>
                                <img src="/features/product5.png" alt="product"/>
                            </div>
                            <div className={`${style.text_area}`}>
                                <h3>Music Player</h3>
                                <div className={`${style.ratings}`}>
                                    <i className={`fa fa-star`}></i>
                                    <i className={`fa fa-star`}></i>
                                    <i className={`fa fa-star`}></i>
                                    <i className={`fa fa-star`}></i>
                                    <i className={`fa fa-star`}></i>    
                                                                
                                </div>
                                <div className={`${style.group_item}`}>
                                    <h4>$320</h4>
                                    <a href="" class={`btn btn-primary ${style.cart}`}>Add To Cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`col-md-4`}>
                        <div className={`${style.card_area}`}>
                            <div className={`${style.img_area}`}>
                                <img src="/features/product6.png" alt="product"/>
                            </div>
                            <div className={`${style.text_area}`}>
                                <h3>Music Player</h3>
                                <div className={`${style.ratings}`}>
                                    <i className={`fa fa-star`}></i>
                                    <i className={`fa fa-star`}></i>
                                    <i className={`fa fa-star`}></i>
                                    <i className={`fa fa-star`}></i>
                                    <i className={`fa fa-star`}></i>    
                                                                
                                </div>
                                <div className={`${style.group_item}`}>
                                    <h4>$320</h4>
                                    <a href="" class={`btn btn-primary ${style.cart}`}>Add To Cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`text-center ${style.margin_bottom}`}>
                        <a href="" className={`btn btn-outline-primary ${style.all_list}`}>See All List</a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Features
