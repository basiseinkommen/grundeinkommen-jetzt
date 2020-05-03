import React from 'react'

import Layout from 'components/Layout'
import Seo from 'components/Seo'
import ContactInfo from 'components/ContactInfo'

const ContactPage = () => {
  return (
    <Layout>
      <Seo title='Contact' />
      <ContactInfo />
    </Layout>
  )
}

export default ContactPage
