import { memo, VFC } from "react";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { useHistory } from "react-router-dom";

export const Top: VFC = memo(() => {
  const history = useHistory();

  const onClickLogin = () => {
    history.push("/login");
  };

  return (
    <>
      <p>TOP画面です。</p>
      <br />
      <PrimaryButton onClick={onClickLogin}>ログインページへ</PrimaryButton>
    </>
  );
});
