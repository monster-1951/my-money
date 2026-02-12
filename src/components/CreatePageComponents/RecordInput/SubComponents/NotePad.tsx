interface NotePadProps {
      notes: string;
  setNotes: React.Dispatch<React.SetStateAction<string>>;
}

const NotePad = (props:NotePadProps) => {
      const noteChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    props.setNotes(e.target.value);
  };
   return <>
        <div className="p-1 flex-1 border mx-1">
          <textarea
            className="rounded px-1 w-full h-full min-h-5 resize-none"
            placeholder="Add notes"
            value={props.notes}
            onChange={noteChange}
          />
        </div>
      </>
}

export default NotePad