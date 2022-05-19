import { useEffect, useState } from 'react'
import '../../styles/globals.scss'
import type { AppProps } from 'next/app'
import Router from "next/router"
import Loader from '../components/loader/Loader'

function MyApp({ Component, pageProps }: AppProps) {

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  return (
    <>
      <Loader />
      {/* {loading ? (<Loader />) :
        <Component {...pageProps} />
      } */}
    </>
  )
}

export default MyApp
