import { IconsMap } from "../../lib/iconsMap";

const MappedIcon = (props: { id: number;}) => {
    return <>{IconsMap.find((i) => i.icon_id === props.id)?.element}</>;
};

export default MappedIcon;
