"use client"

import { Navbar } from "@/components/layout/Navbar"
import { Logo } from "@/components/shared/Icons"
import { handleSignIn } from "@/lib/auth"
import { faApple, faGoogle } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function SignIn() {
  return (
    <>
      <Navbar />
      <div className="mt-16 grid min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="mx-auto flex h-24 w-auto justify-center">
            <Logo height={24} />
          </div>
        </div>

        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-12 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
          <div className="bg-white px-4 py-6 sm:px-10">
            <div className="grid grid-cols-1 gap-3">
              <div>
                <button
                  className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                  onClick={() => handleSignIn("apple")}
                >
                  <span className="sr-only">Sign in with Apple</span>
                  <FontAwesomeIcon
                    aria-hidden="true"
                    className="-ml-1 mr-2 max-h-6"
                    icon={faApple}
                    size={"lg"}
                  />
                  <p>Sign in with Apple</p>
                </button>
              </div>

              <div>
                <button
                  className="inline-flex w-full justify-center rounded-md border border-fuchsia-600 bg-fuchsia-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:border-fuchsia-700 hover:bg-fuchsia-700"
                  onClick={() => handleSignIn("google")}
                >
                  <span className="sr-only">Sign in with Google</span>
                  <FontAwesomeIcon
                    aria-hidden="true"
                    className="-ml-1 mr-2 max-h-6"
                    icon={faGoogle}
                    size={"lg"}
                  />
                  <p>Sign in with Google</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
