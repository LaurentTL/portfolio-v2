import '../../styles/globals.scss'
import { useEffect, useState } from 'react'
import type { AppProps } from 'next/app'
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
      {loading ? (<Loader />) :
        <Component {...pageProps} />
      }
    </>
  )
}

export default MyApp
