interface SaveCancelButtonProps {
  setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  save: () => Promise<void>;
}

const SaveCancelButton = (props: SaveCancelButtonProps) => {
  return (
    <div className="flex w-full justify-around">
      <button
        onClick={() => {
          props.setDialogOpen((prev) => !prev);
        }}
        className="border py-2 px-3 rounded"
      >
        Cancel
      </button>
      <button className="border py-2 px-3 rounded" onClick={async () => {
        props.save()
      }}>
        Save
      </button>
    </div>
  );
};

export default SaveCancelButton