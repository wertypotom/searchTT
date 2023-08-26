import styles from './Loader.module.css';

export const Loader = () => (
  <div className={styles['lds-ellipsis']}>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
);
