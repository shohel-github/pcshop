import Header from './Header'
import Nav from './Nav'
import Footer from './Footer'
import style from '../styles/Layout.module.css'


const Layout = ({children}) => {
    return (
        <>
        <Header />
        <Nav />
        <div class="container">
            <main className={style.main}>
                {children}
            </main>
        </div>
        <Footer />
        </>
    )
}

export default Layout
