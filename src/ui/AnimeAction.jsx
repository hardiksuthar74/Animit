import Form from "./Form";
import FormRowVertical from "./FormRowVertical";
import Input from "./Input";
import Button from "./Button";
import Heading from "./Heading";
import { useForm } from "react-hook-form";
import { useAddEpisode } from "../features/users/useAddEpisode";

const AnimeAction = ({ anime, onCloseModal }) => {
  const { register, formState, handleSubmit } = useForm();
  const { errors } = formState;

  const { isAdding, addEpisode } = useAddEpisode();

  function onSubmit(data) {
    try {
      const dataToSend = {
        ...data,
        id: anime.id,
        jikanAnimeId: anime.jikanAnimeId,
        process: anime.userAnimeStatus,
      };
      addEpisode(dataToSend, {
        onSuccess: () => {
          onCloseModal();
        },
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Heading as={"h4"}>{anime.title}</Heading>
      <FormRowVertical label="Episode" error={errors?.episodes?.message}>
        <Input
          type="number"
          id="episodes"
          {...register("episodes", {
            required: "This field is required",
            value: anime.userEpisode,
            min: {
              value: 1,
              message: "Episode should be greater than 0",
            },
            max: {
              value: anime?.episodes,
              message: `Episode should not be greater than ${anime?.episodes}`,
            },
          })}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button disabled={false} size="large">
          Add
        </Button>
      </FormRowVertical>
    </Form>
  );
};

export default AnimeAction;
