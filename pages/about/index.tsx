import AboutMain from 'comoponents/AboutMain'
import Meta from 'comoponents/Head'
import Layout from 'comoponents/Layout'
import { NextSeo, SocialProfileJsonLd } from 'next-seo'
import React from 'react'

const About = () => {
  return (
    <Layout>
      <NextSeo title="" description="" />
      <SocialProfileJsonLd
        type="Person"
        name="shuhei komori"
        url="https://komosyu.com/"
        sameAs={[
          'https://github.com/komosyu4649',
          'https://twitter.com/komosyu4649',
          'https://www.instagram.com/komosyu/',
          'https://www.facebook.com/profile.php?id=100011362350005',
        ]}
      />
      <AboutMain />
    </Layout>
  )
}

export default About
