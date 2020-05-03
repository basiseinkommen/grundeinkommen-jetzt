import React from 'react'

import Layout from 'components/Layout'
import Seo from 'components/Seo'
import HeroBanner from 'components/HeroBanner'
import Services from 'components/Services'
import Testimonials from 'components/Testimonials'

const IndexPage = () => {
  return (
    <Layout>
      <Seo title='About Me' />
      <HeroBanner />
      <Services />
      <hr />
      <Testimonials />
    </Layout>
  )
}

export default IndexPage
