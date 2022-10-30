import React, { useState } from 'react';
import ReactCanvasConfetti from './CanvasConfetti';

export const COLOR_MAP: Record<string, string> = {
  blue: '#26ccff',
  purple: '#a25afd',
  red: '#ff5e7e',
  green: '#88ff5a',
  yellow: '#fcff42',
  orange: '#ffa62d',
  pink: '#ff36ff',
};

interface Args {
  colors: string[];
}

export function ExplodeAnimation(args: Args) {

  const [fire, setFire] = useState<boolean | number>(false);
  const { ...props } = args;
  // @ts-ignore
  const colors: string[] = (args.colors || []).map<string>((color) => COLOR_MAP[color] as string);

  return (
    <>
      <div className="controls">
        <button
          type="button"
          className="button"
          onClick={setFire.bind(null, Math.random())}>
          Celebrate
        </button>
      </div>
      <ReactCanvasConfetti {...props} fire={fire} colors={colors} className="canvas" />
    </>
  );
}
