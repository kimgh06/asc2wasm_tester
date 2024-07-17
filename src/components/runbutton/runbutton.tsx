"use client"

import { useCodeStore, useOutputStore } from "@/store";
import axios from "axios";
import dynamic, { Loader } from "next/dynamic";

interface AscModule {
  compileString: (
    input: string,
    options: {
      optimizeLevel: number;
      shrinkLevel: number;
      converge: boolean;
      noAssert: boolean;
    }
  ) => Promise<{ binary: { buffer: ArrayBuffer } }>;
}

export default function RunButton() {
  const { code } = useCodeStore();
  const { setOutput } = useOutputStore();
  const compile = async () => {
    const output = await axios.get('/api/convert?code=' + encodeURIComponent(code))
    // const { error, binary } = await asc.compileString(code, { optimize: true });
    // if (error) {
    //   console.log(error);
    //   return;
    // }
    // const blob = new Blob([binary as Uint8Array], { type: 'application/wasm' });
    // const url = URL.createObjectURL(blob);
    // setOutput(url);
  };
  return <button onClick={compile}>Run</button>
}