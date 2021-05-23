import * as React from "react";
import cn from "classnames";

import "./Picker.modules.scss";

type Props = {
  onClick?: () => void;
  selected?: boolean;
  color: string; //'darkred' | 'yellow' | 'green' | 'lightblue' | 'darkgreen'
};

const Picker: React.FC<Props> = ({ onClick, color, selected }: Props) => {
  return (
    <div
      onClick={onClick}
      styleName={cn(`picker picker_${color}`, selected && "picker_selected")}
    />
  );
};

Picker.defaultProps = {
  color: "darkred",
  selected: false,
};

export default React.memo(Picker);
