import React from 'react'

import Layout from 'components/Layout'
import Seo from 'components/Seo'
import Imprint from 'components/Imprint'

const ImprintPage = () => {
  return (
    <Layout>
      <Seo title="Impressum" />
      <Imprint />
    </Layout>
  )
}

export default ImprintPage
