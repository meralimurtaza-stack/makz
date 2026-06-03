"use client";

import { useEffect } from "react";

const REB2B_KEY = "46DJ4HW2RP61";

export default function Reb2b() {
  useEffect(() => {
    const country = document.cookie
      .split("; ")
      .find((row) => row.startsWith("country="))
      ?.split("=")[1];

    if (country !== "US") return;

    const w = window as unknown as { reb2b?: { loaded: boolean } };
    if (w.reb2b) return;
    w.reb2b = { loaded: true };

    const s = document.createElement("script");
    s.async = true;
    s.src =
      "https://b2bjsstore.s3.us-west-2.amazonaws.com/b/" +
      REB2B_KEY +
      "/" +
      REB2B_KEY +
      ".js.gz";
    const first = document.getElementsByTagName("script")[0];
    first.parentNode?.insertBefore(s, first);
  }, []);

  return null;
}
