import React from 'react';
import styles from './Button.module.css';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  icon?: React.ReactNode;
}

export const Button = ({ icon, title = 'Click', ...rest }: Props) => {
  return (
    <button className={styles['btn']} {...rest}>
      {icon || title}
    </button>
  );
};
