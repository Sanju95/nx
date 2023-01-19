import styles from './as-first-app.module.scss';

/* eslint-disable-next-line */
export interface AsFirstAppProps {}

export function AsFirstApp(props: AsFirstAppProps) {
  return (
    <div className={styles['container']}>
      <h3>Welcome to AsFirstApp!</h3>
    </div>
  );
}

export default AsFirstApp;
