import { CssModules } from "./components/cssModules";
import { InlineStyle } from "./components/inlineStyle";
import { StyledComponents } from "./components/styledComponents";
import { StyledJsx } from "./components/styledJsx";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponents />
    </div>
  );
}
