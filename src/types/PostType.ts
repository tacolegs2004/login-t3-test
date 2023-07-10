import type { FormEventHandler, MouseEvent, MouseEventHandler } from "react";
// export interface TTPost {
//   header: string;
//   body: string;
//   id: number;
// }

export interface TPostEventTypes {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  onSubmit?: FormEventHandler<HTMLButtonElement> | undefined;
}

export interface TPost extends TPostEventTypes {
  post?: {
    header: string;
    body: string;
    id: number;
  };
}
