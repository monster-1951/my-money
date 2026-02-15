import MappedIcon from "../../../../../UtilityComponents/MappedIcon";


interface SingleDetailProps {
  icon_id: number;
  name: string;
  label: string;
}
const SingleDetail = (props: SingleDetailProps) => {
  return (
    <div className="flex justify-between">
      <div className="my-auto text-lg">{props.label}</div>
      <div className=" border rounded-lg flex gap-3 p-2">
        <MappedIcon id={props.icon_id} />
        <span>{props.name}</span>
      </div>
    </div>
  );
};

export default SingleDetail