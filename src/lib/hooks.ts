import { RefObject, useRef, useState } from 'react';

export function getRefValue<C>(ref: RefObject<C>) {
  return ref.current as C;
}

export function useSatateRef<S>(
  defaultValue: S
): [S, (value: S) => void, RefObject<S>] {
  const ref = useRef(defaultValue);
  const [state, _setState] = useState(defaultValue);
  const setState = (value: S) => {
    _setState(value);
    ref.current = value;
  };
  return [state, setState, ref];
}

// function SampleComponent(){
//  const numberRef = useRef(0)
//
//  const number = getRefValue(numberRef)
//}

// function SampleComponent(){
//  const numberRef = useRef('string')
//
//  const number = getRefValue(numberRef)
//}
