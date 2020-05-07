import React from 'react'

import Layout from 'components/Layout'
import Seo from 'components/Seo'
import Privacy from 'components/Privacy'

const PrivacyPage = () => {
  return (
    <Layout>
      <Seo title="Datenschutz" />
      <Privacy />
    </Layout>
  )
}

export default PrivacyPage
