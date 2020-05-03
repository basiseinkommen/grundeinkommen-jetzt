import React from 'react'

import Layout from 'components/Layout'
import Seo from 'components/Seo'
import Container from 'components/ui/Container'
import TitleSection from 'components/ui/TitleSection'

const NotFoundPage = () => (
  <Layout>
    <Seo title='404: Not found' />
    <Container section>
      <TitleSection title='404' subtitle='Page not found' center />
      <p className='mt-4 text-center w-full'>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Container>
  </Layout>
)

export default NotFoundPage
