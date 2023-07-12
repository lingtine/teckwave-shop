import classNames from "classnames";

function Button({
  children,
  leftIcon,
  rightIcon,

  //styles
  primary,
  secondary,
  warning,
  success,
  danger,
  rounded,
  outline,
  className,
  ...props
}) {
  const styles = classNames(
    "flex items-center px-5 py-1.5 border rounded-md ",
    {
      "border-slate-500 bg-teal-500 text-white hover:bg-teal-400": primary,
      "border-slate-500 bg-slate-900 text-white": secondary,
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
    },
    className
  );
  return (
    <button className={styles} {...props}>
      <span>{leftIcon}</span>
      <span>{children}</span>
      <span>{rightIcon}</span>
    </button>
  );
}

export default Button;
