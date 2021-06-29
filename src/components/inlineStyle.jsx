export const InlineStyle = () => {
  const contanerStyle = {
    border: "solid 2px #392eff",
    borderRadius: "20px",
    padding: "19px",
    margin: "8px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  };
  const titleStyle = {
    margin: "0",
    color: "#3b84a8"
  };
  const buttonStyle = {
    backgroundColor: "#abedd8",
    border: "none",
    padding: "8px",
    borderRadius: "10px"
  };

  return (
    <div style={contanerStyle}>
      <p style={titleStyle}>- inline style -</p>
      <button style={buttonStyle}>Fight!!</button>
    </div>
  );
};
