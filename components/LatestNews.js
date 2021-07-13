import style from '../styles/Latestnews.module.css'

const LatestNews = () => {
    return (
        <div>
            <div className={`${style.latest_news}`}>
                <div className={`row`}>
                    <div className={`${style.section_heading} text-center`}>
                        <h2>Our latest news</h2>
                        <p>After 3 days all of your offers will arrive and you will have another 7 days to select your new company.</p>
                    </div>
                </div>
                <div className={`row`}>
                    <div className={`col-md-8`}>
                        <div className={`${style.blog_area}`}>
                            <img src="/news/los-angeles.jpg" alt="news"/>
                            <div className={`${style.text_area}`}>
                                <h3>The products you need</h3>
                                <p>The Nike Zoom SB Stefan Janoski SE Men's Skateboarding Shoe is made with smooth suede and Nubuck… Properties</p>
                            </div>
                        </div>
                    </div>
                    <div className={`col-md-4`}>
                        <div className={`${style.blog_area}`}>
                            <img src="/news/san-francisco.jpg" alt="news"/>
                            <div className={`${style.text_area}`}>
                                <h3>The most viewed products of the month</h3>
                                <p>The Nike Zoom SB Stefan Janoski SE Men's Skateboarding Shoe is made with smooth suede and Nubuck… Properties</p>
                            </div>
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <div className={`${style.blog_area}`}>
                            <img src="/news/seattle.jpg" alt="news"/>
                            <div className={`${style.text_area}`}>
                                <h3>Why you need to have these products?</h3>
                                <p>The Nike Zoom SB Stefan Janoski SE Men's Skateboarding Shoe is made with smooth suede and Nubuck… Properties</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LatestNews
