"use client"

import { useOutputStore } from "@/store";
import { useEffect, useState } from "react";

export default function Output() {
  const { output } = useOutputStore();
  const [result, setResult] = useState<string>('');
  useEffect(() => {
    run();
  }, [output]);
  const run = async () => {

  }
  return <textarea className="Output" value={result}>

  </textarea>
}