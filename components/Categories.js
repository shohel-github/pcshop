import style from '../styles/Categories.module.css'

const Categories = () => {
    return (
        <div>
            <div className={`${style.categories}`}>
                <div className={`${style.section_title}`}>
                    <h2>Categories</h2>
                </div>
                <div className={`row`}>
                    <div className={`col-md-2`}>
                        <div className={`${style.cat_area}`}>
                            <div className={`${style.cat_icon}`}>
                                <img src="/categories/icon-headphone.png" alt="category icon" className={`img_icon`}/>
                            </div>
                            <div className={`${style.cat_title}`}>
                                <h3>Headphones</h3>
                            </div>
                        </div>
                    </div>
                    <div className={`col-md-2`}>
                        <div className={`${style.cat_area}`}>
                            <div className={`${style.cat_icon}`}>
                                <img src="/categories/icon-music.png" alt="category icon" className={`img_icon`}/>
                            </div>
                            <div className={`${style.cat_title}`}>
                                <h3>Beats</h3>
                            </div>
                        </div>
                    </div>
                    <div className={`col-md-2`}>
                        <div className={`${style.cat_area}`}>
                            <div className={`${style.cat_icon}`}>
                                <img src="/categories/icon-laptop.png" alt="category icon" className={`img_icon`}/>
                            </div>
                            <div className={`${style.cat_title}`}>
                                <h3>Notebooks</h3>
                            </div>
                        </div>
                    </div>
                    <div className={`col-md-2`}>
                        <div className={`${style.cat_area}`}>
                            <div className={`${style.cat_icon}`}>
                                <img src="/categories/icon-camera.png" alt="category icon" className={`img_icon`}/>
                            </div>
                            <div className={`${style.cat_title}`}>
                                <h3>Cameras</h3>
                            </div>
                        </div>
                    </div>
                    <div className={`col-md-2`}>
                        <div className={`${style.cat_area}`}>
                            <div className={`${style.cat_icon}`}>
                                <img src="/categories/icon-game.png" alt="category icon" className={`img_icon`}/>
                            </div>
                            <div className={`${style.cat_title}`}>
                                <h3>Gaming</h3>
                            </div>
                        </div>
                    </div>
                    <div className={`col-md-2`}>
                        <div className={`${style.cat_area}`}>
                            <div className={`${style.cat_icon}`}>
                                <img src="/categories/icon-camera.png" alt="category icon" className={`img_icon`}/>
                            </div>
                            <div className={`${style.cat_title}`}>
                                <h3>Video</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories
