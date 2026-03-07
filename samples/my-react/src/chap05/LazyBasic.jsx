import { Suspense, lazy } from "react";
import MyLoading from "./MyLoading";

const LazyButton = lazy(() => import("./LazyButton"));

// ローディング状態を確認しやすいようにするためのコード↓
// const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
// const LazyButton = lazy(() => sleep(2000).then(() => import('./LazyButton')));

export default function LazyBasic() {
  return (
    <>
      {/* DOM要素を直接記述しているパターン */}
      <Suspense fallback={<p>Now Loading...</p>}>
        <LazyButton />
      </Suspense>

      {/* コンポーネントを渡しているパターン */}
      <Suspense fallback={<MyLoading />}>
        <LazyButton />
      </Suspense>
    </>
  );
}
