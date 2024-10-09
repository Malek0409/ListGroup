import React from "react";

interface Props {
  children: string;
  onClick: () => void;
  color?: "primary" | "secondary";
}

const Button = ({ children, onClick, color }: Props) => {
  return (
    <div>
      <button onClick={onClick} className={"btn btn-" + color}>
        {children}
      </button>
    </div>
  );
};

export default Button;
