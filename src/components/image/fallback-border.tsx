import { PropsWithChildren } from "react";

function FallbackBorder(props: PropsWithChildren) {
  const { children } = props;

  return <div>{children}</div>;
}

export { FallbackBorder };
