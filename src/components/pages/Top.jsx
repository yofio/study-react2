import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { SecondaryButton } from "../atoms/button/SecondaryButton";

export const Top = () => {
  const history = useHistory();

  const onClickAdmin = () =>
    history.push({ pathname: "/users", state: { is_admin: true } });
  const onClickGenerak = () =>
    history.push({ pathname: "/users", state: { is_admin: false } });

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
