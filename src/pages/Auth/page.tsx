import React, { useState } from "react";
import { login, register } from "../../api/auth";
import AuthLayout from "./Layout";
import AuthForm from "../../components/AuthForm";
import type { formField } from "../../types/types";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

interface AuthProps {
  register: boolean;
}

interface FormActionFooterProps {
  Link_Text: string;
  Submit_Text: string;
  Link: string;
}

const Auth = (props: AuthProps) => {
  const [passwordInputType] = useState("password")
  const [formData, setFormdata] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const FormInputElementClassName =
    "border-0 border-b-2 focus:outline-none py-3";
  const FormFieldRequired = true;
  const handleFormDataChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormdata((prevData) => ({ ...prevData, [name]: value }));
  };

  const LoginUser = async () => {
    try {
      const response = await login({
        email: formData.email,
        password: formData.password,
      });
      console.log(response.success);
      return response
    } catch (error) {
      console.log(error);
      return error
    }
  };

  const RegisterUser = async () => {
    if(formData.confirmPassword!==formData.password){
      toast.error("Password and Confirm Password must be same")
      return
    }
    try {
      await register({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });
      const userLoginResponse = await login({
        email: formData.email,
        password: formData.password,
      });
      toast.success(userLoginResponse.message)
      return userLoginResponse
    } catch (error) {
      console.log(error);
      return error
    }
  };
  const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
    setLoading(true);
    console.log("Submitted", formData);
    event.preventDefault();
    try {
      let response;
      if (props.register) {
        response = await RegisterUser();
      } else {
        response = await LoginUser();
      }
      if(response.success){
        toast.success("Login Successful")
        window.location.href = "/"
      } else {
        toast.error(response.message)
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const RegisterFormFields: formField[] = [
    {
      label: "Name *",
      name: "name",
      type: "text",
      value: formData.name,
      placeholder: "Enter your Name",
      required: FormFieldRequired,
      InputElementClassName: FormInputElementClassName,
      onChange: handleFormDataChange,
    },
    {
      label: "Email *",
      name: "email",
      type: "email",
      value: formData.email,
      placeholder: "Enter your email",
      required: FormFieldRequired,
      InputElementClassName: FormInputElementClassName,
      onChange: handleFormDataChange,
    },
    {
      label: "Password *",
      name: "password",
      type: passwordInputType,
      value: formData.password,
      placeholder: "Enter your password",
      required: FormFieldRequired,
      InputElementClassName: FormInputElementClassName,
      onChange: handleFormDataChange,
    },
    {
      label: "Confirm Password *",
      name: "confirmPassword",
      type: passwordInputType,
      value: formData.confirmPassword,
      placeholder: "Confirm password",
      required: FormFieldRequired,
      InputElementClassName: FormInputElementClassName,
      onChange: handleFormDataChange,
    },
  ];

  const LoginFormFields: formField[] = [
    {
      label: "Email",
      name: "email",
      type: "email",
      value: formData.email,
      placeholder: "Enter your email",
      required: FormFieldRequired,
      InputElementClassName: FormInputElementClassName,
      onChange: handleFormDataChange,
    },
    {
      label: "Password",
      name: "password",
      type: passwordInputType,
      value: formData.password,
      placeholder: "Enter your password",
      required: FormFieldRequired,
      InputElementClassName: FormInputElementClassName,
      onChange: handleFormDataChange,
    },
  ];

  if (loading)
    return (
      <AuthLayout>
        <div className="w-fit mx-auto">Please wait...</div>
      </AuthLayout>
    );
  return (
    <AuthLayout>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-[80%] md:w-[60%] xl:w-[40%] mx-auto p-5 h-fit rounded-2xl mb-[30%]"
      >
        {props.register ? (
          <AuthForm
            Heading="Create a new account"
            formFields={RegisterFormFields}
            register={props.register}
          />
        ) : (
          <AuthForm
            Heading="Login Into My-Money"
            formFields={LoginFormFields}
            register={props.register}
          />
        )}
        <div className="flex justify-between px-5">
          {props.register ? (
            <FormActionFooter
              Link="/Login"
              Link_Text="Login"
              Submit_Text="Sign-Up"
            />
          ) : (
            <FormActionFooter
              Link="/register"
              Link_Text="Sign-Up"
              Submit_Text="Login"
            />
          )}
        </div>
      </form>
    </AuthLayout>
  );
};

const FormActionFooter = (props: FormActionFooterProps) => {
  return (
    <>
      <Link to={props.Link} className="border px-3 py-2 rounded ">
        {props.Link_Text}
      </Link>
      <button type="submit" className="border px-3 py-2 rounded ">
        {props.Submit_Text}
      </button>
    </>
  );
};

export default Auth;
