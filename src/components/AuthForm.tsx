import type { formField } from "../types/types";
// import {Icon} from "react-icons-kit";
// import { eyeOff } from "react-icons-kit/feather/eyeOff";
// import { eye } from "react-icons-kit/feather/eye";

interface AuthFormProps {
  Heading: string;
  formFields: formField[];
  register: boolean;
}
const AuthForm = (props: AuthFormProps) => {
  return (
    <>
      <div className="text-2xl text-center font-bold p-3">{props.Heading}</div>
      <div className="flex flex-col p-3">
        {props.formFields.map((f) => {
          return (
            <div className="flex flex-col py-5 space-y-3" key={f.name}>
              <label htmlFor="Email" className="text-xl">
                {f.label}
              </label>
              <input
                type={f.type}
                name={f.name}
                value={f.value}
                onChange={f.onChange}
                required={f.required}
                className={f.InputElementClassName}
                placeholder={f.placeholder}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AuthForm;
