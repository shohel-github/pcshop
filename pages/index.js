import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Hero from '../components/Hero'
import Herobanner from '../components/Herobanner'
import Categories from '../components/Categories'
import CategoriesAfterBanner from '../components/CategoriesAfterBanner'
import Features from '../components/Features'
import FeaturesAfterBanner from '../components/FeaturesAfterBanner'
import LatestNews from '../components/LatestNews'
import LatestProducts from '../components/LatestProducts'
import Needs from '../components/Needs'
import Testimonial from '../components/Testimonial'
import Newsletter from '../components/Newsletter'

export default function Home() {
  return (
    <div>
        <Hero />
        <Herobanner />
        <Categories />
        <CategoriesAfterBanner />
        <Features />
        <FeaturesAfterBanner />
        <LatestNews />
        <LatestProducts />
        <Needs />
        <Testimonial />
        <Newsletter />
    </div>
  )
}
