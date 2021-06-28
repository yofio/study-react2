import { useCallback, useState } from "react";
import { ChiledArea } from "./ChiledArea";
import "./styles.css";

export default function App() {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.value);

  const onClickOpen = () => setOpen(!open);

  const onClickCountUp = () => {
    setCount(count + 1);
  };

  const onClickClose = useCallback(() => setOpen(false), []);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChiledArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
