import { useNavigate } from "react-router-dom";

const Test = () => {
  const Navigate = useNavigate();

  return (
    <div>
      test
      <button onClick={() => Navigate("/test?id=xxx")}>jump to test</button>
    </div>
  );
};

export default Test;
