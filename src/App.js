import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SerachInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import "./styles.css";

const user = {
  name: "aaa",
  email: "dddd@eeeee",
  phone: "02040402919",
  image: "https://source.unsplash.com/2l0CWTpcChI",
  company: {
    name: "qwqwqw"
  },
  website: "https://google.com"
};

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <br />
      <SerachInput />
      <br />
      <UserCard user={user} />
    </div>
  );
}
