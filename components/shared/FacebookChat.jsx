import Script from "next/script"

export default function FacebookChat() {
  return (
    <div>
      <div id="fb-root"></div>

      <div id="fb-customer-chat" className="fb-customerchat"></div>

      {/* <Script src="./lib/facebook-chat.js" strategy="beforeInteractive"></Script> */}
    </div>
  )
}
