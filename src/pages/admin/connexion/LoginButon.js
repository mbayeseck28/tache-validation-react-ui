import React from "react";
import BoutonAdmin from "./BoutonAdmin";
import IsLogin from "../IsLogin";

const LoginButon = ({className }) => {
  return (
    <div>
      <BoutonAdmin
        type="submit"
        className={className}
        children="Se connecter"
       
      />
    </div>
  );
};

export default LoginButon;
