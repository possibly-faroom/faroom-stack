import "../styles/globals.scss"
import type { AppProps } from "next/app"
import { Provider, useAtom } from "jotai"
import { useEffect } from "react"
import { countingState } from "utils/atoms"

const CountUpdater: React.FC = () => {
  const [Count, setCount] = useAtom(countingState)
  useEffect(() => {
    const timer = setInterval(() => {
      setCount({ value: Count.value + 1 })
    }, 3000)

    return () => {
      clearInterval(timer)
    }
  }, [Count.value, setCount])

  return null
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <CountUpdater />
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
