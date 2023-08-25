import { Input as InputMaterial } from "@material-tailwind/react/components/Input";

function Input({ label, required, type = "text", ...props }) {
  return <InputMaterial label={label} {...props} type={type} />;
}

export default Input;
