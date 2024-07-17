import create from 'zustand';

type CodeStore = {
  code: string;
  setCode: (code: string) => void;
};

export const useCodeStore = create<CodeStore>((set) => ({
  code: `export function func(a: i32, b: i32): i32 {
    return a + b;
  }`,
  setCode: (code: string) => set({ code }),
}));

type OutputStore = {
  output: string;
  setOutput: (output: string) => void;
};

export const useOutputStore = create<OutputStore>((set) => ({
  output: '',
  setOutput: (output: string) => set({
    output
  }),
}));