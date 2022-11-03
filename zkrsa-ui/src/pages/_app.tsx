import '../../styles/globals.css';

import type { AppProps } from 'next/app';
import { useState } from 'react';

function MyApp ({ Component, pageProps }: AppProps) {
  const [ vkeyVerifier, setvkeyVerifier ] = useState<null | any>(null);
  const [ vkeyProof, setvkeyProof ] = useState<null | any>(null); // typing for vkey?
  
  return <Component {...pageProps} vkeyProof={vkeyProof} setvkeyProof={setvkeyProof} 
  vkeyVerifier={vkeyVerifier} setvkeyVerifier={setvkeyVerifier} />;
}

export default MyApp;
