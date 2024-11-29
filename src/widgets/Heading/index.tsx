import React, { PropsWithChildren } from "react";
import "./index.scss";

type Props = PropsWithChildren & {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLHeadingElement>;
};

const Heading: React.FC<Props> = ({ children, className, onClick }) => {
  return (
    <h1 className={className ? `heading ${className}` : `heading`}>
      {children}
    </h1>
  );
};

export default Heading;
