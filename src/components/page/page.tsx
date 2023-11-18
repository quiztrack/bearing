// Page
//
// copyright (c) 2023 Ryan Martin

/* -----------------------------------------------------------------------
 *  layout component
 * ---------------------------------------------------------------------*/

import { HTMLAttributes, PropsWithChildren, forwardRef } from "react";
import { pageScrollingXVars, pageScrollingYVars, pageStyle } from "./style.css";
import { clnc } from "@eqpoqpe/classname-utils";

type PageScrolling = "scrolling" | "hidden";
type PageBaseProps = {
  scrollingX?: PageScrolling;
  scrollingY?: PageScrolling;
};
type PageProps = PropsWithChildren<PageBaseProps & HTMLAttributes<HTMLElement>>;

const ComponentName = "Page";
const Page = forwardRef<HTMLElement, PageProps>(function (props, ref) {
  const { children, className, scrollingX, scrollingY, ...moreProps } = props;

  return (
    <main
      {...moreProps}
      className={clnc([
        pageStyle,
        pageScrollingXVars[scrollingX ?? "hidden"],
        pageScrollingYVars[scrollingY ?? "scrolling"],
        className,
      ])}
      ref={ref}
    >
      {children}
    </main>
  );
});

Page.displayName = ComponentName;

export { type PageProps, Page };
