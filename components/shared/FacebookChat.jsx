import Script from "next/script"

export default function FacebookChat() {
  return (
    <div>
      <div id="fb-root"></div>

      <div className="fb-customerchat" id="fb-customer-chat"></div>

      {/* <Script src="./lib/facebook-chat.js" strategy="beforeInteractive"></Script> */}
    </div>
  )
}
