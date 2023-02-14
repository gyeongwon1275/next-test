import { useSingleWebviewRouter } from '@/page-src/one-webview-poc/use-single-webview-router'

const Index = () => {
  const router = useSingleWebviewRouter()

  return (
    <section>
      <div>메뉴를 선택</div>

      <button
        type='button'
        onClick={() => {
          router.push(`one-webview-poc/dog`)
        }}>
        dog 페이지로 이동
      </button>
    </section>
  )
}

export default Index
