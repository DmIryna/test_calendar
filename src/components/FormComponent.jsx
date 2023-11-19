import { useForm } from "react-hook-form"
import { format, parseISO } from "date-fns"
import { IoCloseSharp, IoTrashOutline } from "react-icons/io5"
import Heading from "./styles/Heading"
import Row from "./styles/Row"
import Button from "./styles/Button"
import {
  ButtonsGroup,
  ErrorMsg,
  Input,
  Label,
  Form,
} from "./styles/StyledFormComponent"

function FormComponent({
  title,
  currentEvent,
  onSubmit,
  closeWindow,
  handleDeleteEvent,
  isLoading,
  id,
  initialDate,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      title: currentEvent?.title || "",
      description: currentEvent?.description || "",
      date:
        (currentEvent && format(parseISO(currentEvent?.date), "yyyy-MM-dd")) ||
        initialDate,
      time: currentEvent?.time || "",
    },
  })

  return (
    <>
      <Heading as="h2">{title}</Heading>
      {currentEvent && (
        <Label>
          {currentEvent.updatedAt
            ? `Updated at: ${currentEvent.updatedAt}`
            : `Created at: ${currentEvent.createdAt}`}
        </Label>
      )}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Button $variant="close" onClick={closeWindow} aria-label="Close">
          <IoCloseSharp />
        </Button>
        <div>
          <Label className="required" htmlFor="title">
            Title
          </Label>
          <Input
            type="text"
            id="title"
            {...register("title", {
              required: "Please enter the title",
              minLength: {
                value: 3,
                message: "Title must be at least 3 characters length.",
              },
            })}
            placeholder="Title goes here..."
            aria-required="true"
          />
          {errors.title && <ErrorMsg>{errors.title.message}</ErrorMsg>}
        </div>
        <div>
          <Label htmlFor="description">Description</Label>
          <Input as="textarea" id="description" {...register("description")} />
        </div>
        <Row>
          <div>
            <Label className="required" htmlFor="date">
              Date
            </Label>
            <Input
              type="date"
              {...register("date", { required: "Date is required" })}
              aria-required="true"
            />
            {errors.date && <ErrorMsg>{errors.date.message}</ErrorMsg>}
          </div>
          <div>
            <Label htmlFor="time">Begin time</Label>
            <Input type="time" {...register("time")} />
          </div>
        </Row>

        <ButtonsGroup>
          {currentEvent && (
            <Button
              $variant="danger"
              onClick={() => handleDeleteEvent(id)}
              aria-label="Delete"
            >
              <IoTrashOutline />
            </Button>
          )}
          <Button
            $variant="primary"
            type="submit"
            disabled={isLoading || !isValid}
            aria-label="Save"
          >
            Save
          </Button>
        </ButtonsGroup>
      </Form>
    </>
  )
}

export default FormComponent
