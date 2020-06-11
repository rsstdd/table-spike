import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import TableStyle1 from '../components/size-guide/2-col/style-1'

const IndexPage = () => (
  <Layout className="content">
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <TableStyle1 />
  </Layout>
)

export default IndexPage
