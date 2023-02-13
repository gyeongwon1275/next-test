import { useSingleWebviewRouter } from '@/page-src/one-webview-poc/use-single-webview-router';


export const Index = () => {
  const router = useSingleWebviewRouter()

  return (
    <section>
      <div>메뉴를 선택해!</div>

      <button
        type="button"
        onClick={() => {
          router.push(`dog`);
        }}
      >
        개로 이동
      </button>
    </section>
  );
};
