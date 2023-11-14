import { HTMLAttributes, forwardRef, useEffect, useRef } from "react";

type RenderImageElementProps = {
  src: string;
  onDecode?: () => void;
  onError?: () => void;
} & HTMLAttributes<HTMLImageElement>;

const RenderImageElement = forwardRef<
  HTMLImageElement,
  RenderImageElementProps
>(function (props, ref) {
  const { src, onDecode, onError, ...moreProps } = props;
  const renderRef = useRef<HTMLImageElement | null>(null);
  const handleImg = async () => {
    console.log(renderRef.current);

    if (renderRef.current !== null) {
      renderRef.current.src = src;

      try {
        await renderRef.current.decode();
        onDecode?.();
        console.log("decode");
      } catch (error) {
        onError?.();
      }
    }
  };

  useEffect(() => {
    handleImg();
    console.log(src);
  }, []);

  return (
    <>
      <img {...moreProps} ref={renderRef} />
    </>
  );
});

export { RenderImageElement };
