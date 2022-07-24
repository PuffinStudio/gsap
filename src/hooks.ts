import { gsap } from './gsap';
import { MutableRefObject, useMemo, useRef } from 'react';


// source https://greensock.com/react-advanced#useSelector

function useSelector(): [gsap.utils.SelectorFunc, MutableRefObject<null>] {
  const ref = useRef(null);
  const q = useMemo(() => gsap.utils.selector(ref), [ref]);
  return [q, ref];
}

function useArrayRef<T>(): [MutableRefObject<T[]>, (ref: T) => void] {
  const refs = useRef<T[]>([]);
  refs.current = [];
  return [refs, ref => ref && refs.current.push(ref)];
}

export { useSelector, useArrayRef };
