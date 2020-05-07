import React from 'react'

import Layout from 'components/Layout'
import Seo from 'components/Seo'
import OpenLetter from 'components/OpenLetter'
import Petitioners from 'components/Petitioners'
import CallToAction from 'components/CallToAction'
import Supporters from 'components/Supporters'

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Offener Brief an den Petitionsausschuss" />
      <OpenLetter />
      <Petitioners />
      <CallToAction />
      <Supporters />
    </Layout>
  )
}

export default IndexPage
