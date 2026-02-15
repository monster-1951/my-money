import type { Icons } from "../../types/types";
import MappedIcon from "./MappedIcon";

interface IconsInputProps {
  Icon: number;
  setIcon: React.Dispatch<React.SetStateAction<number>>;
  Icons: Icons[];
}

const IconsInput = (props: IconsInputProps) => {
  const handleIconChange = (icon_id: number) => {
    props.setIcon(icon_id);
  };
  return (
    <div className="flex flex-col gap-3">
      <span>Icon</span>
      <div className="grid grid-rows-2 grid-flow-col overflow-x-auto max-w-75 p-3 border shadow-inner gap-3">
        {props.Icons.map((i) => (
          <button
            onClick={() => {
              handleIconChange(i.icon_id);
            }}
            key={i.icon_id}
          >
            <MappedIcon
              key={i.icon_id}
              id={i.icon_id}
              className={`p-2 rounded w-fit ${props.Icon === i.icon_id && "border"}`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default IconsInput