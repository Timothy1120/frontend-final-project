import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Button({
  id,
  name,
  text,
  to,
  icon,
  variant,
  className,
  disabled,
  textSize,
  ...props
}) {
  let buttonColor = "";
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
          className={`flex px-6 py-[1.125rem] ${buttonColor} text-neutral-01 rounded-lg justify-center ${className}`}
        >
          <div>
            {icon && (
              <Image
                src={icon}
                height={22}
                width={22}
                alt="icon-button"
                className="mr-2 text-white"
              ></Image>
            )}
          </div>
          <div className={`${textSize}`}>{text}</div>
        </div>
      </Link>
    </div>
  );
}
