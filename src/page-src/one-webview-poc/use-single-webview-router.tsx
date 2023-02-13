import { useRouter } from 'next/router'

export const useSingleWebviewRouter = () => {
  const router = useRouter()

  const push = (url: string) => {
    window.dispatchEvent(new CustomEvent('push'))
    router.push(url)
  }

  return {
    ...router,
    push,
  }
}
