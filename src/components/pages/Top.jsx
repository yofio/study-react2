import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
// import { useContext } from "react";
// import { UserContext } from "../../providers/Userprovider";
import { userState } from "../../store/userState";

export const Top = () => {
  const history = useHistory();

  // const { setUserinfo } = useContext(UserContext);
  // const { setUserinfo } = useSetRecoilState(userState);
  const [userInfo, setUserinfo] = useRecoilState(userState);

  const onClickAdmin = () => {
    setUserinfo({ isAdmin: true });
    history.push("/users");
  };
  const onClickGenerak = () => {
    setUserinfo({ isAdmin: false });
    history.push("/users");
  };

  return (
    <SContainer>
      <h2>トップページです</h2>
      <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
      <br />
      <br />

      <SecondaryButton onClick={onClickGenerak}>一般ユーザー</SecondaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
