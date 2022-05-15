import Head from 'next/head'
import MainLayout from '../components/layouts/MainLayout'
import HeroSection from '../components/HeroSection/HeroSection'
import AboutSection from '../components/AboutSection/AboutSection'
import PartnersSection from '../components/PartnersSection/PartnersSection'
import CollectionsSection from '../components/CollectionsSection/CollectionsSection'
import SubscriptionsSection from '../components/SubscriptionsSection/SubscriptionsSection'
import Script from 'next/script'

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>AJS Landing Page Project 1</title>
        <meta name="project" content="Landing Page Project" />
        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6QZQ32GWGF"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-6QZQ32GWGF');
          `}
        </Script>
      </Head>
      <HeroSection />
      <AboutSection />
      <PartnersSection />
      <CollectionsSection />
      <SubscriptionsSection />
    </MainLayout>
  )
}