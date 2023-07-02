import '../styles/Home.css'
import Slider from './Slider'
import Footer from './Footer'
import HomepageMain from './HomepageMain'
import PageNavbar from './PageNavbar'


const Home = () => {
  return (
    <>
    <PageNavbar />
    <Slider />
    <HomepageMain />
    <Footer />
    </>
  )
}

export default Home