import type { NextPage } from 'next'
import Layout from '../components/layout/Layout'
import Banner from '../components/banner/Banner'
import Cursor from '../components/cursor/Cursor'
import Desc from '../components/desc/Desc'

const Home: NextPage = () => {

  return (
    <Layout>
      <Banner />
      <Desc />
    </Layout >
  )
}

export default Home
