import type { NextPage } from 'next'
import Layout from '../../comoponents/Layout'
import { Posts } from 'type'
import SearchForm from 'comoponents/SearchForm'

const Search: NextPage<Posts> = ({ posts }) => {
  return (
    <Layout>
      <SearchForm />
    </Layout>
  )
}

export default Search
