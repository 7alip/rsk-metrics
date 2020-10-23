import { Fragment, PropsWithChildren } from 'react'
import NextHead from 'next/head'
import GoogleFonts from 'next-google-fonts'

export const Head = ({
  children,
  title,
}: PropsWithChildren<{ title?: string }>): JSX.Element => (
  <Fragment>
    <GoogleFonts href='https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;700&display=swap' />
    <NextHead>
      <title>{title}</title>
      {children}
    </NextHead>
  </Fragment>
)
