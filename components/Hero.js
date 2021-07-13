//import Image from 'next/image'
import style from '../styles/Hero.module.css'
const Hero = () => {
    return (
        <div className={`${style.hero_section} hero`}>
            <div className={`row`}>
                <div className={`col-md-6`}>
                    <div className={`${style.content_area} content-area text-area`}>
                        <h1 className={`${style.content_h1} ${style.equal_margin}`}>Experience your music like never before.</h1>
                        <h2 className={`${style.content_h2} ${style.equal_margin}`}>$299</h2>
                        <a href="#" className={`${style.herobtn} ${style.equal_margin} btn btn-primary active`}>BUY NOW</a>
                        <p className={`${style.content_p} ${style.equal_margin}`}>$60 Apple Music gift card with purchase of select Beats products.*</p>
                    </div>
                </div>
                <div className={`col-md-6`}>
                    <div className={`content-area`}>
                        <img className={style.coverimg} src="/hero-cover.png" alt="cover"/>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Hero
