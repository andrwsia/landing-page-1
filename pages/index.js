import Head from 'next/head'
import MainLayout from '../components/layouts/MainLayout'
import HeroSection from '../components/HeroSection/HeroSection'
import AboutSection from '../components/AboutSection/AboutSection'
import PartnersSection from '../components/PartnersSection/PartnersSection'
import CollectionsSection from '../components/CollectionsSection/CollectionsSection'
import SubscriptionsSection from '../components/SubscriptionsSection/SubscriptionsSection'

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>Landing Page Project</title>
        <meta name="project" content="Landing Page Project" />
      </Head>
      <HeroSection />
      <AboutSection />
      <PartnersSection />
      <CollectionsSection />
      <SubscriptionsSection />
    </MainLayout>
  )
}