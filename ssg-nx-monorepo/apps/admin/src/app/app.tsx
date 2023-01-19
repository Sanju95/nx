// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import NxWelcome from './nx-welcome';
import { Banner } from '@ssg-nx-monorepo/common-ui';

export function App() {
  return (
    <>
      <NxWelcome title="admin" />
      <div />
      <Banner text="Welcome to our admin app." />
      
    </>
  );
}

export default App;
