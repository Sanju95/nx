import styles from './as-first-app.module.scss';

/* eslint-disable-next-line */
export interface AsFirstAppProps {}

export function AsFirstApp(props: AsFirstAppProps) {
  return (
    <div className={styles['container']}>
      <h2>Welcome to AsFirstApp!</h2>
    </div>
  );
}

export default AsFirstApp;
