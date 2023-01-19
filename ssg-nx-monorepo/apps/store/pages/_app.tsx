import { AppProps } from 'next/app';
import Head from 'next/head';

import { Banner } from '@ssg-nx-monorepo/common-ui';
import { exampleProducts } from '@ssg-nx-monorepo/products';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to store!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
        <>
          <Banner text="Welcome to the store!" />
          <ul>
            {exampleProducts.map((product) => (
              <li key={product.id}>
                <strong>{product.name}</strong> Price: {product.price}
              </li>
            ))}
          </ul>
        </>
      </main>
    </>
  );
}

export default CustomApp;
