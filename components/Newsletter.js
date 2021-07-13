import style from '../styles/Newsletter.module.css'

const Newsletter = () => {
    return (
        <div>
            <div className={`${style.newsletter}`}>
                <div className={`row`}>
                    <div className={`${style.section_heading} text-center`}>
                        <h2>Subscribe To Our Newsletter</h2>
                        <p>Don't lose a chance to be among the firsts to know about our upcoming news and updates.</p>
                    </div>
                </div>
                <div className={`row justify-content-center`}>
                   <div className={`col-md-4 align-self-center`}>
                        <div className={`${style.form_area}`}>
                            <form>
                                <div className={`input-group mb-3 ${style.group}`}>
                                    <input type="email" className={`form-control`} placeholder="Enter your email"/>
                                    <button className={`btn btn-outline-secondary ${style.formbtn}`} type="submit"><i className={`fa fa-paper-plane`}></i></button>
                                </div>
                            </form>
                        </div>      
                    </div>          
                </div>
            </div>
        </div>
    )
}

export default Newsletter
