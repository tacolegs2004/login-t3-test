import type { MouseEventHandler } from "react";

export interface ButtonTypes {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}
