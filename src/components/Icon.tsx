import React from "react";
import IcomoonReact from "icomoon-react";
import iconSet from "../assets/fonts/selection.json";
const Icon: React.FC<{
     color?: string,
     size: string | number,
     icon: string,
     fill?: string,
     className?: string
}> = props => {

const { color, size = "100%", icon, className = "", fill } = props;
return (
  <IcomoonReact
    className={className}
    iconSet={iconSet}
    color={color}
    size={size}
    icon={icon}
    fill={fill}
    />
  );
};
export default Icon;