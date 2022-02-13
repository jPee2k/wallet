import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const useEscapeButton = (closeModal) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const closeOnPress = (evt) => (evt.code === 'Escape') && dispatch(closeModal());
    window.addEventListener('keyup', closeOnPress);
    return () => window.removeEventListener('keyup', closeOnPress);
  }, []);
};

export default useEscapeButton;
