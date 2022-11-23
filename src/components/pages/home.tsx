import { memo, VFC } from "react";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { useHistory } from "react-router-dom";
import { useLoginUser } from "../../hooks/providers/useLoginUserProvider";

export const Home: VFC = memo(() => {
  const { loginUser } = useLoginUser();
  console.log(loginUser);

  return (
    <>
      <p>ホーム画面です。</p>
    </>
  );
});
