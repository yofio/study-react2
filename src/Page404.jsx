import { Link } from "react-router-dom";

export const Page404 = () => {
  return (
    <div>
      <h1>ページは見つかりません</h1>
      <Link to="/">トップに戻る</Link>
    </div>
  );
};
