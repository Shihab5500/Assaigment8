
import { createContext, useContext, useMemo } from "react";
import useLocalStorage from "../hooks/useLocalStorage";


const InstallCtx = createContext(null);

export function InstallProvider({ children }) {
  // installed = [{ id, title, size, image, companyName, downloads, ratingAvg }, ...]
  const [installed, setInstalled] = useLocalStorage("installedApps", []);

  const value = useMemo(() => {
    const isInstalled = (id) =>
      installed.some((a) => a.id === Number(id));

    const install = (app) =>
      setInstalled((prev) =>
        prev.some((x) => x.id === app.id) ? prev : [app, ...prev]
      );

    const uninstall = (id) =>
      setInstalled((prev) => prev.filter((x) => x.id !== Number(id)));

    return { installed, isInstalled, install, uninstall };
  }, [installed, setInstalled]);

  return <InstallCtx.Provider value={value}>{children}</InstallCtx.Provider>;
}

export function useInstall() {
  return useContext(InstallCtx);
}
