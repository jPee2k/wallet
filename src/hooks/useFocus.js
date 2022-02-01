import { useRef } from 'react';

const useFocus = () => {
  const htmlRef = useRef(null);
  const setFocus = () => htmlRef.current && htmlRef.current.focus();

  return [htmlRef, setFocus];
};

export default useFocus;
