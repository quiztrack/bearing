import { forwardRef } from "react";

const ComponentName = "Page";
const Page = forwardRef<HTMLDivElement>(function (props, ref) {
  return <div ref={ref}></div>;
});

Page.displayName = ComponentName;

export { Page };
