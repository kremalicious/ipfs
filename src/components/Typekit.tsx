import React, { ReactElement } from 'react'
import Head from 'next/head'

const typekitScript = `
  (function(d) {
    var config = {
      kitId: '${process.env.NEXT_PUBLIC_TYPEKIT_ID}',
      scriptTimeout: 3000,
      async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  })(document);
`

export default function Typekit(): ReactElement | null {
  return (
    <Head key="typekit">
      <link rel="dns-prefetch" href="https://use.typekit.net/" />
      <link rel="dns-prefetch" href="https://p.typekit.net/" />
      <script dangerouslySetInnerHTML={{ __html: typekitScript }} />
    </Head>
  )
}
