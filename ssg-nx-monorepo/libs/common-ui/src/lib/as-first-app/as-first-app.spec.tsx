import { render } from '@testing-library/react';

import AsFirstApp from './as-first-app';

describe('AsFirstApp', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AsFirstApp />);
    expect(baseElement).toBeTruthy();
  });
});
