import style from '../styles/Needs.module.css'

const Needs = () => {
    return (
        <div>
            <div className={`${style.section_needs}`}>
                <div className={`row`}>
                    <div className={`${style.section_heading} text-center`}>
                        <h2>What is your real need?</h2>
                        <p>After 3 days all of your offers will arrive and you will have another 7 days to select your new company.</p>
                    </div>
                </div>
                <div className={`row`}>
                    <div className={`col-md-6 ${style.mg_bottom_2}`}>
                        <div className={`${style.card_area}`}>
                            <div className={`${style.img_area}`}>
                                <img src="/relax-working.svg" alt="working"/>
                            </div>
                            <div className={`${style.text_area}`}>
                                <h3>Comfortable devices</h3>
                                <p>Over 20,000 users searching for devices</p>
                                <a href="" class={`btn btn-primary ${style.search}`}>Search</a>
                            </div>
                        </div>
                    </div>
                    <div className={`col-md-6 ${style.mg_bottom_2}`}>
                        <div className={`${style.card_area}`}>
                            <div className={`${style.img_area}`}>
                                <img src="/relax-working.svg" alt="working"/>
                            </div>
                            <div className={`${style.text_area}`}>
                                <h3>Delivery Solutions</h3>
                                <p>Over 20,000 users searching for devices</p>
                                <a href="" class={`btn btn-primary ${style.search}`}>Search</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Needs
