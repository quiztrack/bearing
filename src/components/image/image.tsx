import {
  ImgHTMLAttributes,
  ReactNode,
  forwardRef,
  useLayoutEffect,
  useState,
} from "react";

const ComponentName = "Image";

type ImageProps = {
  src: string;
  /**
   * if set fallback, component will default enabled display after at loaded
   */
  fallback?: ReactNode;
} & ImgHTMLAttributes<HTMLImageElement>;
type ImageLoadStatus = "loading" | "loaded" | "error";

const Image = forwardRef<HTMLImageElement, ImageProps>(function (props, ref) {
  const { fallback, src, ...moreProps } = props;
  const [imageLoadStatus, setImageLoadStatus] =
    useState<ImageLoadStatus>("loading");
  const handleImg = async () => {
    const image = new window.Image();

    image.onerror = () => setImageLoadStatus("error");
    image.src = src;

    try {
      await image.decode();
      setImageLoadStatus("loaded");
    } catch (error) {
      setImageLoadStatus("error");
    }
  };

  useLayoutEffect(() => {
    handleImg();
  }, []);

  if (imageLoadStatus === "loading" && fallback) {
    return fallback;
  } else if (imageLoadStatus === "loaded") {
    return <img {...moreProps} src={src} ref={ref} />;
  }
});

Image.displayName = ComponentName;

export { Image, type ImageProps };
