import { HTMLAttributes, ReactNode } from "react";
import { clnc } from "@eqpoqpe/classname-utils";

type ImageProps = {
  fallback?: ReactNode;
} & HTMLAttributes<HTMLImageElement>;

function Image(props: ImageProps) {
  const { className, fallback } = props;

  return (
    <img className={clnc([className])} />
  );
}

export { type ImageProps, Image };
