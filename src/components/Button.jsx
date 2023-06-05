import React from "react";
import Link from "next/link";

export default function Button({
  id,
  name,
  text,
  to,
  size,
  icon,
  variant,
  className,
  disabled,
  textSize,
  onChange,
  ...props
}) {
  let buttonColor,
    buttonSize = "";
  if (variant === "primary") {
    buttonColor = "bg-darkblue-04";
  } else if (variant === "danger") {
    buttonColor = "bg-danger";
  } else if (variant === "warning") {
    buttonColor = "bg-warning";
  } else if (variant === "success") {
    buttonColor = "bg-success";
  } else if (variant === "disable") {
    buttonColor = "bg-disable";
  }

  if (size === "small") {
    buttonSize = "px-3 py-2";
  } else {
    buttonSize = "px-6 py-[1.125rem]";
  }

  return (
    <div>
      <Link
        className={`${
          disabled ? "cursor-not-allowed pointer-events-none" : ""
        }`}
        href={to}
      >
        <div
          id={id}
          name={name}
          {...props}
          className={`inline-flex ${buttonSize} ${buttonColor} text-neutral-01 rounded-lg items-center ${className}`}
        >
          <div>{icon}</div>
          <di className={` font-bold ${textSize}`}>{text}</di>
        </div>
      </Link>
    </div>
  );
}
