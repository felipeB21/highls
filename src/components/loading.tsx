"use client";

import { useEffect, useState } from "react";

export default function Loading() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);
  return <div>{loading && <div>Loading...</div>}</div>;
}
