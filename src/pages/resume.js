import React from 'react'

import Layout from 'components/Layout'
import Seo from 'components/Seo'
import Experience from 'components/Experience'
import Education from 'components/Education'
import Skills from 'components/Skills'

const ResumePage = () => (
  <Layout>
    <Seo title="Resume" />
    <Experience />
    <hr />
    <Education />
    <hr />
    <Skills />
  </Layout>
)

export default ResumePage
