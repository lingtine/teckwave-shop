import classNames from "classnames";
import { Button as ButtonMaterial } from "@material-tailwind/react/components/Button";
function Button({
  children,
  leftIcon,
  rightIcon,

  //styles
  primary,
  secondary,
  primary1,
  warning,
  success,
  danger,
  rounded,

  className,
  outline,
  gradient,
  text,
  //size
  large,
  small,
  full,
  //
  hidden,
  ...props
}) {
  const styles = classNames(
    "flex items-center border rounded-md",
    {
      "border-slate-500 bg-teal-500 text-white hover:bg-teal-400": primary,
      "border-secondary-3 bg-secondary-3 text-white": secondary,
      "": primary1,
      "border-yellow-500 bg-yellow-500 text-white": warning,
      "border-green-500 bg-green-500 text-white": success,
      "border-red-500 bg-red-500 text-white": danger,
      "rounded-full": rounded,
      "bg-white": outline,
      "text-black": outline && primary,
      "text-gray": outline && secondary,
      "text-yellow-500": outline && warning,
      "text-green-500": outline && success,
      "text-red-500": outline && danger,
      "py-2 px-4 text-sm": small,
      "py-4 px-12 text-lg": large,
      "w-full flex justify-center py-2 ": full,
      "opacity-50 cursor-not-allowed": hidden,
    },
    className
  );

  let size = "md";
  if (small) {
    size = "sm";
  } else if (large) {
    size = "lg";
  }

  let variants = "filled";
  if (outline) {
    variants = "outlined";
  } else if (gradient) {
    variants = "gradient";
  } else if (text) {
    variants = "text";
  }
  return (
    <ButtonMaterial
      variant={variants}
      size={size}
      className={styles}
      {...props}
      fullWidth={full}
    >
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </ButtonMaterial>
  );
}

export default Button;
