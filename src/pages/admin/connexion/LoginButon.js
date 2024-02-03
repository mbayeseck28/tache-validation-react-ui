import React from "react";
import BoutonAdmin from "./BoutonAdmin";

const LoginButon = ({ onClick, className }) => {
  return (
    <div>
      <BoutonAdmin
        type="submit"
        className={className}
        children="Se connecter"
        onClick={onClick}
      />
    </div>
  );
};

export default LoginButon;
