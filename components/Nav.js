// import Link from 'next/link'
import Image from 'next/image'
import style from '../styles/Nav.module.css'

const Nav = () => {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-light bg-light`}>
                <div className={`container`}>
                    <a className={`navbar-brand`} href="/"><Image src="/logo.svg" alt="Vercel Logo" width={120} height={32} /></a>
                    <button className={`navbar-toggler`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className={`navbar-toggler-icon`}></span>
                    </button>
                    <div className={`collapse navbar-collapse`} id="navbarSupportedContent">
                    <ul className={`navbar-nav ms-auto mb-2 mb-lg-0`}>
                            <li className={`nav-item`}>
                                <a className={`nav-link active`} aria-current="page" href="/">Home</a>
                            </li>
                            <li className={`nav-item`}>
                                <a className={`nav-link`} href="/about">About</a>
                            </li>
                            <li className={`nav-item dropdown`}>
                                <a className={`nav-link dropdown-toggle`} href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Landings</a>
                                <ul className={`dropdown-menu`} aria-labelledby="navbarDropdown">
                                    <li><a className={`dropdown-item`} href="#">Action</a></li>
                                    <li><a className={`dropdown-item`} href="#">Another action</a></li>
                                    <li><hr className={`dropdown-divider`} /></li>
                                    <li><a className={`dropdown-item`} href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className={`nav-item dropdown`}>
                                <a className={`nav-link dropdown-toggle`} href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Packages</a>
                                <ul className={`dropdown-menu`} aria-labelledby="navbarDropdown">
                                    <li><a className={`dropdown-item`} href="#">Action</a></li>
                                    <li><a className={`dropdown-item`} href="#">Another action</a></li>
                                    <li><hr className={`dropdown-divider`} /></li>
                                    <li><a className={`dropdown-item`} href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className={`nav-item dropdown`}>
                                <a className={`nav-link dropdown-toggle`} href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Account</a>
                                <ul className={`dropdown-menu`} aria-labelledby="navbarDropdown">
                                    <li><a className={`dropdown-item`} href="#">Action</a></li>
                                    <li><a className={`dropdown-item`} href="#">Another action</a></li>
                                    <li><hr className={`dropdown-divider`} /></li>
                                    <li><a className={`dropdown-item`} href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li><a href="" className={`btn btn-outline-secondary`}>DOCUMENTATION</a></li>
                            <li><a href="" className={`btn btn-primary active`}>BUY NOW</a></li>
                        </ul>
                       
                    </div>
                </div>
            </nav>



        
        <style jsx global>
            {`
                .navbar-nav li {
                    padding: 0 10px;
                }



            `}
        </style>


        </div>
    )
}

export default Nav
