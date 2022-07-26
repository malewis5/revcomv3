import { Link as UILink } from '@nextui-org/react';
import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Link href="/">Next Home Link</Link>
      <br />
      <UILink href="/">Next UI Home Link</UILink>
    </>
  );
}
