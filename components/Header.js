import Head from 'next/head'
import headerStyle from '../styles/Header.module.css'

const Header = () => {
    return (
        <div>
            <Head>
                <title>PCShop</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
            </Head>
        </div>
    )
}

export default Header
