import { useRouter } from 'next/router';

export const useSingleWebviewRouter = () => {
  const router = useRouter();

  const push = (url: string) => {
    window.dispatchEvent(new CustomEvent('push', { detail: url }));
    router.push(url);
  };
  const back = () => {
    window.dispatchEvent(new CustomEvent('pop', { detail: router.route }));
    router.back();
  };

  return {
    ...router,
    push,
    back,
  };
};
