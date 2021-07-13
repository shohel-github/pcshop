import style from '../styles/CatAfterBanner.module.css'

const CategoriesAfterBanner = () => {
    return (
        <div>
            <div className={`${style.categories_after_banner}`}>
                <div className={`row ${style.container_padding}`}>
                    <div className={`col-md-8 ${style.align_middle}`}>
                        <div className={`${style.text_area}`}>
                            <h2>Experience your music like never<br/> before.</h2>
                            <p>If we're no longer the right solution for you, we'll allow you to<br/> export and take your data at anytime for any reason.</p>
                            <a href="" class={`btn btn-light ${style.custombtn1}`}>Buy Now</a>
                        </div>
                    </div>
                    <div className={`col-md-4 ${style.align_middle}`}>
                        <div className={`${style.img_area}`}>
                            <img src="/headphone-cover.png" alt="headphone cover"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoriesAfterBanner
