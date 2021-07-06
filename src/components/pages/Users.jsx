import styled from "styled-components";
import { SerachInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
import { useLocation } from "react-router-dom";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
// import { UserContext } from "../../providers/Userprovider";
// import { useContext } from "react";
import { useRecoilState } from "recoil";
import { userState } from "../../store/userState";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `aaa${val}`,
    email: "dddd@eeeee",
    phone: "02040402919",
    image: "https://source.unsplash.com/2l0CWTpcChI",
    company: {
      name: "qwqwqw"
    },
    website: "https://google.com"
  };
});

export const Users = () => {
  // const { userInfo, setUserinfo } = useContext(UserContext);
  const [userInfo, setUserinfo] = useRecoilState(userState);

  const onClickSwich = () => setUserinfo({ isAdmin: !userInfo.isAdmin });

  const { state } = useLocation();
  console.log(state);
  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SerachInput />
      <br />
      <SecondaryButton onClick={onClickSwich}>切り替え</SecondaryButton>
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
