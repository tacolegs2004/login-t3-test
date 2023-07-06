import type { FormEventHandler, MouseEventHandler } from "react";
// export interface TTPost {
//   header: string;
//   body: string;
//   id: number;
// }

export interface TPost {
  post?: {
    header: string;
    body: string;
    id: number;
  };
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  onSubmit?: FormEventHandler<HTMLButtonElement> | undefined;
}
