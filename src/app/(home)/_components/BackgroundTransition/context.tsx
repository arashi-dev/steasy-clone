import { createContext } from "react";

export const BackgroundContext = createContext<(className: string) => void>(
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  () => {},
);
