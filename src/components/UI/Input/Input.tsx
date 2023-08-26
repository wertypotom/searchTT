import React from 'react';
import style from './Input.module.css';
import { Button } from '../Button/Button';
import { ClearIcon } from '../Icons/ClearIcon';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  clearInputField?: () => void;
}

export const Input = ({ clearInputField, ...props }: Props) => {
  return (
    <div className={style['text-field']}>
      <input className={style['text-field__input']} {...props} autoFocus />
      {clearInputField && props.value && (
        <div className={style['text-field__btn']}>
          <Button onClick={clearInputField} icon={<ClearIcon />} />
        </div>
      )}
    </div>
  );
};
