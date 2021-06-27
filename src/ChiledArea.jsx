const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};
export const ChiledArea = (props) => {
  const { open } = props;
  console.log("ChileAreaがレンダリングされた");

  const date = [...Array(2000).keys()];
  date.forEach(() => {
    console.log("....");
  });

  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
        </div>
      ) : null}
    </>
  );
};
