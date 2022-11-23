import { memo, VFC, useState } from "react";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export const Login: VFC = memo(() => {
  const [text, setText] = useState("");
  const { login, loading } = useAuth();

  const history = useHistory();
  const onClickLogin = () => {
    console.log(text);
    login(text);
  };
  const style = {
    marginBottom: "8px"
  };

  return (
    <>
      <div>ログインページです</div>
      <br />
      <div>・ログインIDを入力してください。</div>
      <br />
      <input style={style} onChange={(e) => setText(e.target.value)} />
      <br />
      <PrimaryButton onClick={onClickLogin} isLoading={loading}>
        ログイン
      </PrimaryButton>
    </>
  );
});
