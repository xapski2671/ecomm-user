import Head from "next/head"
import { createGlobalStyle } from "styled-components"

const GLobalStyles = createGlobalStyle`
body {
  padding: 0;
  margin: 0;
}
`

export default function App({ Component, pageProps }) {
	return (
		<>
			<GLobalStyles />
			<Component {...pageProps} />
		</>
	)
}
