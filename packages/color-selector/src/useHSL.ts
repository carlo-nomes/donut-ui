import { Dispatch, SetStateAction, useState, useMemo } from 'react';

export const parseStringToHSL = (string: string): HSL => {
  const match = string.match(/^hsl\s*\(\s*(\d+)\D*,\s*(\d+)\D*,\s*(\d+)\D*\)$/i);

  const h = Number(match?.[1]) || 0;
  const s = Number(match?.[2]) || 0;
  const l = Number(match?.[3]) || 0;

  return { h, s, l };
};

export type HSL = { h: number; s: number; l: number };
export type UseHSL = (initial?: HSL) => [
  string,
  {
    setH: Dispatch<SetStateAction<number>>;
    setS: Dispatch<SetStateAction<number>>;
    setL: Dispatch<SetStateAction<number>>;
  },
  { h: number; s: number; l: number },
];

const useHSL: UseHSL = (initial) => {
  const { h: initialH = 0, s: initialS = 0, l: initialL = 0 } = initial ?? {};

  const [h, setH] = useState(initialH);
  const [s, setS] = useState(initialS);
  const [l, setL] = useState(initialL);

  const hsl = useMemo(() => `hsl(${h}deg, ${s}%, ${l}%)`, [h, s, l]);

  return [hsl, { setH, setS, setL }, { h, s, l }];
};

export default useHSL;
