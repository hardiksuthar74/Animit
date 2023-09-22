import Form from "./Form";
import FormRowVertical from "./FormRowVertical";
import Input from "./Input";
import Button from "./Button";
import Heading from "./Heading";
import NormalText from "./NormalText";
import { useForm } from "react-hook-form";
import { useRegisterUser } from "../features/users/useRegsiterUser";

const RegisterForm = ({ setFormType, closeModal }) => {
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  const { isCreating, addUser } = useRegisterUser();

  function onSubmit(data) {
    try {
      console.log(data);
      addUser(data, {
        onSuccess: () => {
          reset();
          closeModal();
        },
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Heading as={"h4"}>Create an Account</Heading>
      <FormRowVertical label="Name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          {...register("name", { required: "Please provide your name" })}
        />
      </FormRowVertical>
      <FormRowVertical label="EMAIL" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide a valid email address",
            },
          })}
        />
      </FormRowVertical>
      <FormRowVertical label="PASSWORD" error={errors?.password?.message}>
        <Input
          type="password"
          id="password"
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password needs a minimum of 8 characters",
            },
          })}
        />
      </FormRowVertical>
      <FormRowVertical
        label="CONFIRM PASSWORD"
        error={errors?.confirmPassword?.message}
      >
        <Input
          type="password"
          id="confirmPassword"
          {...register("confirmPassword", {
            required: "This field is required",
            validate: (value) =>
              value === getValues().password || "Passwords need to match",
          })}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button disabled={isCreating}>Register</Button>
      </FormRowVertical>
      <FormRowVertical>
        <p>
          {"Have an account?"}
          <NormalText
            onClick={() => setFormType("login")}
            as={"span"}
            style={{ marginLeft: "0.2rem", color: "#cf9fff" }}
          >
            Login
          </NormalText>
        </p>
      </FormRowVertical>
    </Form>
  );
};

export default RegisterForm;
