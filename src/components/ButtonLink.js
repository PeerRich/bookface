import React from 'react'
import Link from 'next/link'
import Button from '@material-ui/core/Button'

export const ButtonLink = React.forwardRef(({ className, href, hrefAs, children, prefetch }, ref) => (
  <Link href={href} as={hrefAs} prefetch ref={ref}>
    <a className={className}>
      {children}
    </a>
  </Link>
));
