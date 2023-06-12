import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"
import Header from "../components/Header"

globalStyles()
function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <Header/>
      <Component {...pageProps} />
    </>
  )
}

export default App
