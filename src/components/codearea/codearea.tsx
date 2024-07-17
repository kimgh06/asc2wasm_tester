'use client'

import { useCodeStore } from "@/store";
import { ChangeEvent, useEffect } from "react";
import './style.scss'

export default function CodeArea() {
  const { code, setCode } = useCodeStore();
  useEffect(() => {
    console.log(code.split('\n').length);
  }, [code]);
  return <textarea className="CodeArea" value={code}
    onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setCode(e.target.value)}>
  </textarea>
}