import { Textarea } from "@material-tailwind/react/components/Textarea";

function InputTextArea({ label, required, ...props }) {
  return <Textarea label={label} {...props}></Textarea>;
}

export default InputTextArea;
