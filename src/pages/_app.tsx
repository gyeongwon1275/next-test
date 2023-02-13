import { ActivityAnimationController } from '@/page-src/one-webview-poc/activity-animation-controller'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ActivityAnimationController>
      <Component {...pageProps} />
    </ActivityAnimationController>
  )
}
