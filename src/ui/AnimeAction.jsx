import Form from "./Form";
import FormRowVertical from "./FormRowVertical";
import Input from "./Input";
import Button from "./Button";
import Heading from "./Heading";
import { useForm } from "react-hook-form";

const AnimeAction = ({ anime }) => {
  const { register, formState, handleSubmit } = useForm();
  const { errors } = formState;

  function onSubmit() {
    console.log("heyy");
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Heading as={"h4"}>{anime.title}</Heading>
      <FormRowVertical label="Episode" error={errors?.episode?.message}>
        <Input
          type="number"
          id="episode"
          {...register("episode", {
            required: "This field is required",
            value: anime.episodes,
          })}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button size="large">Add</Button>
      </FormRowVertical>
    </Form>
  );
};

export default AnimeAction;
