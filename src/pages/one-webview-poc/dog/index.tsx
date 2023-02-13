import { useSingleWebviewRouter } from '@/page-src/one-webview-poc/use-single-webview-router'

export const Index = () => {
  const router = useSingleWebviewRouter()

  const onClick = (e) => {
    router.push(`${e.target.dataset.name}`)
  }

  return (
    <section>
      <div>
        <button data-name='retriever' onClick={onClick} type='button'>
          retriever
        </button>
      </div>
      <div>
        <button data-name='siba' onClick={onClick} type='button'>
          siba
        </button>
      </div>
    </section>
  )
}
