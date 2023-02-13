import { useSingleWebviewRouter } from '@/page-src/one-webview-poc/use-single-webview-router'

export const Retriever = () => {
  const router = useSingleWebviewRouter()

  return (
    <div>
      <h2>Retriever</h2>

      <button onClick={() => router.back()}>go back!</button>
    </div>
  )
}
