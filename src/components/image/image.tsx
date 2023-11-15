import { Transition } from "@headlessui/react";
import {
  ImgHTMLAttributes,
  ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  imageEnterFromStyle,
  imageEnterStyle,
  imageEnterToStyle,
  imageLeaveFromStyle,
  imageLeaveStyle,
  imageLeaveToStyle,
} from "./style.css";
import { RenderImageElement } from "./render-image-element";
import { FallbackBorder } from "./fallback-border";

type ImageProps = {
  src: string;
  fallback?: ReactNode;
} & ImgHTMLAttributes<HTMLImageElement>;
type ImageLoadStatus = "loading" | "loaded" | "error";

function Image(props: ImageProps) {
  const { fallback, ...moreProps } = props;
  const [sourceLoadStatus, setSourceLoadStatus] =
    useState<ImageLoadStatus>("loading");

  return (
    <div>
      {sourceLoadStatus === "loading" && (
        <FallbackBorder>{fallback}</FallbackBorder>
      )}
      <Transition
        appear={true}
        show={sourceLoadStatus === "loaded"}
        enter={imageEnterStyle}
        enterFrom={imageEnterFromStyle}
        enterTo={imageEnterToStyle}
        leave={imageLeaveStyle}
        leaveFrom={imageLeaveFromStyle}
        leaveTo={imageLeaveToStyle}
      ></Transition>
    </div>
  );
}

export { Image, type ImageProps };
