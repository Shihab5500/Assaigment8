import { useEffect, useState } from "react";

export default function useAppsData() {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ok = true;
    fetch("/data1.json")
      .then(r => r.json())
      .then(d => ok && setApps(d))
      .finally(() => ok && setLoading(false));
    return () => { ok = false; };
  }, []);

  return { apps, loading };
}
