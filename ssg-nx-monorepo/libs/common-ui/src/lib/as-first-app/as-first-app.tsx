import styles from './as-first-app.module.scss';

/* eslint-disable-next-line */
export interface AsFirstAppProps {}

export function AsFirstApp(props: AsFirstAppProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to AsFirstApp!</h1>
    </div>
  );
}

export default AsFirstApp;
