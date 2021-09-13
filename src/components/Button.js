import { forwardRef } from 'react';

const FancyButton = forwardRef(({ href, text, className }, ref) => (
  <a ref={ref} href={href} className={className}>
    {text}
  </a>
));

export default FancyButton;
