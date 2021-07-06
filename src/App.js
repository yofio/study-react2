import { RecoilRoot } from "recoil";
import { UserProvider } from "./providers/Userprovider";
import { Router2 } from "./router/Rouer2";
import "./styles.css";

export default function App() {
  return (
    <RecoilRoot>
      <UserProvider>
        <Router2 />
      </UserProvider>
    </RecoilRoot>
  );
}
