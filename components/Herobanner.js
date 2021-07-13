import style from '../styles/Herobanner.module.css'
import responsiveStyle from '../styles/Responsive.module.css'

const Herobanner = () => {
    return (
        <div>
             <div className={`${style.hero_after_banner}`}>
                <div className={`row`}>
                    <div className={`col-md-4`}>
                        <div className={`${style.img_area}`}>
                            <img src="/overview-cover-left.png" className={`leftimg`} alt="cover"/>
                        </div>
                    </div>
                    <div className={`col-md-4`}>
                        <div className={`${style.text_area}`}>
                            <h4>Find More Products</h4>
                            <p>If we're no longer the right solution for you, we'll<br/> allow you to export and take your data at<br/> anytime for any reason.</p>
                            <div className={`${style.btn_area}`}>
                                <button type="button" className={`btn btn-light`}>Learn More</button>
                            </div>
                        </div>
                    </div>
                    <div className={`col-md-4`}>
                        <div className={`${style.img_area} ${responsiveStyle.img_area}`}>
                            <img src="/overview-cover-right.png" className={`rightimg`} alt="cover"/>
                        </div>
                    </div>
                </div>
             </div>
        </div>
    )
}

export default Herobanner
