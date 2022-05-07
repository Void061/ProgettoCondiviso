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


export default function PrivacyPolicy() {
    return (
      <div>
  
       <Head>
        <meta charSet="UTF-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
          <meta name="description" content="" />
          <meta name="keywords" content=""/>
        <title>SpacelonX</title>
       </Head>
       
    
        <Header />
  
        <Presentation />
  
        <div className="text-white container pt-5 pb-5">
        <div className="text-center"><h1>Privacy Policy</h1></div>

<h3>1. INTRODUCTION</h3>

<b>Who we are?</b> <br />

We are SpacelonX, a project developed in May 2022. <br /><br />

Where we decide the means or purposes of the processing of personal data, we are the &quot;data controller&quot;. <br /><br />

<b>What are your rights?</b> <br />

You have the following rights, although these rights may be limited in some circumstances: <br />

● Ask us to send a copy of your personal data to you or someone else<br />

● Object to the use of personal data for direct marketing purposes<br />

● Ask us to correct inaccuracies in your personal data<br /><br />

<b>How do you contact us?</b><br />

If you have any questions regarding this notice, including how to exercise your rights, please contact us at: info@spacelonx.com<br /><br />

<h3>2. YOUR PERSONAL DATA AND HOW WE USE IT</h3><br />

Information we collect about you in order to provide certain services, including:<br />

● Any personal information you provide to us to enable us to provide you with our services (including information you send us as part of your requests)<br />

You may be required to provide us with certain information to enable us to provide you with our services.<br />

Information we collect to provide you with suggestions and recommendations on: news and updates relating to us, our partners, products, services and content; content, goods and services that may interest you and other promotional activities and events that we believe may be of interest.
<br />
If required by law, we rely on your consent to be able to undertake this data processing activity.
<br />
In some cases (such as with some of our existing customers) the law may allow us to process your personal data in order to send marketing communications based on our legitimate interests, being our legitimate business interests in marketing our businesses and promoting success. of our businesses and our websites, content, products and services.
<br /><br />
<h3>3. COOKIES, ANALYTICS AND SIMILAR TECHNOLOGIES</h3><br />

Cookies, pixels and other technologies store and access data on the user&apos;s device to allow websites and apps to function. We obtain your consent to use them unless they are essential to our sites, apps or services.
<br />
Most browsers allow control over cookies.
<br />
<h3>4. STORAGE, TRANSFERS AND DISCLOSURE</h3>
<br />
We do not store, transfer or disclose your data.<br />
        </div>
  
        <Footer />
  
      </div>
    )
  }
  