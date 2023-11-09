import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  btnType: "button" | "submit" | "reset" | undefined;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
