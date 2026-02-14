import { IconsMap } from "../../lib/iconsMap";

const MappedIcon = (props: { id: number,className?:string}) => {
    return <div className={props.className}>{IconsMap.find((i) => i.icon_id === props.id)?.element}</div>;
};

export default MappedIcon;
