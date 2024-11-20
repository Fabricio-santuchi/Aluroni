import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Admin() {
  const params = useParams();
  console.log(params);
  const navigate = useNavigate();

  useEffect(() => {
    if (params.user !== "validado") {
      navigate("/");
    }
  }, [params, navigate]);
  return (
    <>
      <h1>Área restrita!</h1>
    </>
  );
}
