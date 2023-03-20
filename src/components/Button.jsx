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
  }

  return (
    <div>
      <Link href={to}>
        <button
          id={id}
          name={name}
          {...props}
          className={`flex px-6 py-[1.125rem] bg-darkblue-04 ${buttonColor} text-neutral-01 rounded-lg`}
        >
          <div>
            {icon && (
              <Image
                src={icon}
                height={20}
                width={20}
                alt="icon-button"
                className="mr-2 text-white"
              ></Image>
            )}
          </div>
          <div>{text}</div>
        </button>
      </Link>
    </div>
  );
}
