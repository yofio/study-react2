import clsses from "./CssModules.module.scss";
export const CssModules = () => {
  return (
    <div className={clsses.container}>
      <p className={clsses.titleStyle}>- CSS Modules -</p>
      <button className={clsses.buttonStyle}>FIGHT!!</button>
    </div>
  );
};
