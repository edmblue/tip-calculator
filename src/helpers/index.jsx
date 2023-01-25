import { useEffect, useRef } from 'react';

export const isFirstRender = () => {
  const isMount = useRef(true);
  useEffect(() => {
    isMount.current = false;
  }, []);

  return isMount.current;
};
