import { useParams } from "react-router-dom";

export const Urlparameter = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Urlparameterです</h1>
      <p>パラメーターは{id}です</p>
    </div>
  );
};
