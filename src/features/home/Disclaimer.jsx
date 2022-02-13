import { FormattedMessage } from "react-intl"

export function Disclaimer() {
  return (
    <div className="bg-gradient-to-tl from-purple-800 to-pink-500">
      <div className="max-w-1xl mx-auto py-16 px-4 text-center sm:py-20 sm:px-6 lg:px-8">
        <p className="text-2xl text-white">
          <FormattedMessage
            defaultMessage="This app is for educational purposes only and does not reflect a medical opinion. ADHD can only be diagnosed by a medical professional!"
            id="disclaimer.title"
            values={{ br: <br /> }}
          />
        </p>
      </div>
    </div>
  )
}
