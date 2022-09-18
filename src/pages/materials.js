import React from 'react'

import Layout from 'components/Layout'
import Seo from 'components/Seo'

import Materials from 'components/Materials'

const MaterialsPage = () => {
  return (
    <Layout>
      <Seo title="Social Media Materialien" />
      <Materials />
    </Layout>
  )
}

export default MaterialsPage
