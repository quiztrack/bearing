import { FunctionComponent, ReactElement } from "react";
import { spinnerStyles } from "./style.css";

type SpinnerProps = {
  visible?: boolean;
};

export const Spinner: FunctionComponent<SpinnerProps> = ({
  visible = true,
}): ReactElement | null => {
  return !visible ? null : (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={spinnerStyles}
    >
      <rect x="7" width="2" height="5" rx="1" fill="black" fillOpacity="0.8" />
      <rect
        x="12.9498"
        y="1.63604"
        width="2"
        height="5"
        rx="1"
        transform="rotate(45 12.9498 1.63604)"
        fill="black"
        fillOpacity="0.1"
      />
      <rect
        x="16"
        y="7"
        width="2"
        height="5"
        rx="1"
        transform="rotate(90 16 7)"
        fill="black"
        fillOpacity="0.2"
      />
      <rect
        x="14.364"
        y="12.9497"
        width="2"
        height="5"
        rx="1"
        transform="rotate(135 14.364 12.9497)"
        fill="black"
        fillOpacity="0.3"
      />
      <rect
        x="9"
        y="16"
        width="2"
        height="5"
        rx="1"
        transform="rotate(180 9 16)"
        fill="black"
        fillOpacity="0.4"
      />
      <rect
        x="3.05025"
        y="14.364"
        width="2"
        height="5"
        rx="1"
        transform="rotate(-135 3.05025 14.364)"
        fill="black"
        fillOpacity="0.5"
      />
      <rect
        y="9"
        width="2"
        height="5"
        rx="1"
        transform="rotate(-90 0 9)"
        fill="black"
        fillOpacity="0.6"
      />
      <rect
        x="1.63603"
        y="3.05025"
        width="2"
        height="5"
        rx="1"
        transform="rotate(-45 1.63603 3.05025)"
        fill="black"
        fillOpacity="0.7"
      />
    </svg>
  );
};
