import Header from '../components/header'
import Presentation from '../components/presentation'
import Welcome from '../components/welcome'
import Infos from '../components/infos'
import Video from '../components/video'
import Roadmap from '../components/roadmap'
import Community from '../components/community'
import Faq from '../components/faq'
import Footer from '../components/footer'
import Head from 'next/head'
import Story from '../components/story'
import Stars from '../components/stars'


export default function Home() {
  return (
    <div>

     <Head>
      <meta charSet="UTF-8"/>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
  	  <meta name="description" content="" />
  	  <meta name="keywords" content=""/>
      <title>SpacelonX</title>
     </Head>
      <Stars />
      <Header />

      <Presentation />

      <Welcome />

      <Infos />

      <Video />

      <Story />

      <Roadmap />

      <Community />

      <Faq />

      <Footer />

    </div>
  )
}
