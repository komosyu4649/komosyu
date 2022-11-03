import Meta from 'comoponents/Meta'
import Layout from 'comoponents/Layout'
import NotFoundMain from 'comoponents/NotFoundMain'
import { NextSeo } from 'next-seo'
import React from 'react'

const NotFound = () => {
  return (
    <Layout>
      <NextSeo title="page not found" description="お探しのページは見つかりませんでした" />
      <NotFoundMain />
    </Layout>
  )
}

export default NotFound
