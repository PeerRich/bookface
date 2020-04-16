import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default ({ href, children, passHref }) => {
  const router = useRouter();


  let className = children.props.className || '';

  if (router.pathname === href) {
    className = `${className} selected`
  }

  return <Link href={href} passHref>{React.cloneElement(children, { className })}</Link>
}
