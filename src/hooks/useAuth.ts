/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import { User } from "../types/api/user";
import { useLoginUser } from "../hooks/providers/useLoginUserProvider";

export const useAuth = () => {
  const history = useHistory();
  const { setLoginUser } = useLoginUser();

  const [loading, setLoading] = useState(false);

  const login = useCallback((id: string) => {
    setLoading(true);
    axios
      .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(async (res) => {
        setLoginUser({ ...res.data });
        console.log("ログイン成功");
        history.push("/home");
      })
      .catch(() => {
        console.log("ユーザーが見つかりません");
        setLoading(false);
      });
  }, []);

  return { login, loading };
};
