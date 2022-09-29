import React, { useEffect } from 'react';
import s from './Modal.module.css';

export const Modal = ({ onClose, largeimg }: { onClose: () => void , largeimg: string}): JSX.Element => {
  useEffect(():void => {
    window.addEventListener('keydown', event => {
      if (event.code === 'Escape') {
        onClose();
      }
    });

    return window.removeEventListener('keydown', (event: KeyboardEvent): void=> {
      if (event.code === 'Escape') {
        onClose();
      }
    });
  }, [onClose]);

  const backDropClick = (event: React.MouseEvent<HTMLElement>) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };
  return (
    <div onClick={backDropClick} className={s.backDrop}>
      <div className={s.modal}>
        <img src={largeimg} alt="pictr" />
      </div>
    </div>
  );
};
