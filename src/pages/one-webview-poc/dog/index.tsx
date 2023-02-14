import { useSingleWebviewRouter } from '@/page-src/one-webview-poc/use-single-webview-router'

const Index = () => {
  const router = useSingleWebviewRouter()

  const onClick = () => {
    router.push(`/one-webview-poc/dog/retriever`)
  }

  return (
    <section>
      <div>
        <button onClick={onClick} type='button'>
          retriever 페이지로 이동
        </button>
      </div>
    </section>
  )
}

export default Index
