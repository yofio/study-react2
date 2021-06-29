import { CssModules } from "./components/cssModules";
import { InlineStyle } from "./components/inlineStyle";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
    </div>
  );
}
