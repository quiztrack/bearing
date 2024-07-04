import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export type AppearanceContext = {
  theme: "dark" | "light" | "system";
  setTheme: (theme: AppearanceContext["theme"]) => void;
};
export type AppearanceProviderProps = PropsWithChildren<
  { prefersToken: string, dataName: string } & Pick<AppearanceContext, "theme">
>;

const appearanceContext = createContext<AppearanceContext | undefined>(
  undefined
);

export function AppearanceProvider(props: AppearanceProviderProps) {
  const { children, theme = "system", dataName = "data-theme", prefersToken } = props;
  const [currTheme, setTheme] = useState(theme);

  useEffect(() => {
    const themeTagger = () => {
      const appearanceTheme = localStorage.getItem(prefersToken);
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

      if (appearanceTheme === "system" || appearanceTheme === null) {
        if (isDark) document.documentElement.setAttribute(dataName, "dark");
        else document.documentElement.setAttribute(dataName, "light");

        setTheme(isDark ? "dark" : "light");
      }
    };

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", themeTagger);

    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", themeTagger);
    };
  }, []);

  return (
    <appearanceContext.Provider value={{ theme: currTheme, setTheme }}>
      {children}
    </appearanceContext.Provider>
  );
}

export const useAppearance = () => useContext(appearanceContext)!;
