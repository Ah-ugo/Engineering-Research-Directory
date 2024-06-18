import React from "react";

export default function FooterComponent() {
  return (
    <div>
      <footer className="bg-white dark:bg-gray-900">
        <div className="p-6 mx-auto">
          <div className="lg:flex">
            <div className="w-full -mx-6 lg:w-2/5">
              <div className="px-6">
                <a href="#">
                  <img
                    className="w-auto h-16"
                    src={require("../Assets/Abia_State_University_logo.svg.c7d43b43.e0f8335038396c9c6064.png")}
                    alt=""
                  />
                </a>
                <h1
                  className="font-bold text-lg mt-3"
                  style={{ fontFamily: "Roboto Condensed" }}>
                  BRIEF HISTORY
                </h1>
                <p
                  className="max-w-sm mt-2 text-gray-500 dark:text-gray-400"
                  style={{ fontFamily: "Inter" }}>
                  As a foremost state University in Nigeria founded in 1981,
                  Abia State University has maintained its leadership within and
                  beyond the Eastern heartlands of Nigeria.
                </p>
              </div>
            </div>
            <div className="mt-6 lg:mt-0 lg:flex-1">
              <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div>
                  <h3
                    className="text-gray-700 uppercase text-lg font-semibold dark:text-white"
                    style={{ fontFamily: "Roboto Condensed" }}>
                    Helpful links
                  </h3>
                  <a
                    href="#"
                    className="block mt-2 text-sm text-gray-600 dark:text-gray-400 no-underline hover:underline"
                    style={{ color: "black", fontFamily: "Inter" }}>
                    Faculties
                  </a>
                  <a
                    href="#"
                    className="block mt-2 text-sm text-gray-600 dark:text-gray-400 no-underline hover:underline"
                    style={{ color: "black", fontFamily: "Inter" }}>
                    ICS Services
                  </a>
                  <a
                    href="#"
                    className="block mt-2 text-sm text-gray-600 dark:text-gray-400 no-underline hover:underline"
                    style={{ color: "black", fontFamily: "Inter" }}>
                    Student Portal
                  </a>
                </div>
                <div>
                  <h3
                    className="text-gray-700 uppercase text-lg font-semibold dark:text-white"
                    style={{ fontFamily: "Roboto Condensed" }}>
                    Undergraduate Study
                  </h3>
                  <a
                    href="#"
                    className="block mt-2 text-sm text-gray-600 dark:text-gray-400 no-underline hover:underline"
                    style={{ color: "black", fontFamily: "Inter" }}>
                    Regular A-Z
                  </a>
                  <a
                    href="#"
                    className="block mt-2 text-sm text-gray-600 dark:text-gray-400 no-underline hover:underline"
                    style={{ color: "black", fontFamily: "Inter" }}>
                    How to Apply
                  </a>
                  <a
                    href="#"
                    className="block mt-2 text-sm text-gray-600 dark:text-gray-400 no-underline hover:underline"
                    style={{ color: "black", fontFamily: "Inter" }}>
                    Fees
                  </a>
                </div>
                <div>
                  <h3
                    className="text-gray-700 uppercase text-lg font-semibold dark:text-white"
                    style={{ fontFamily: "Roboto Condensed" }}>
                    Postgraduate Study
                  </h3>
                  <a
                    href="#"
                    className="block mt-2 text-sm text-gray-600 dark:text-gray-400 no-underline hover:underline"
                    style={{ color: "black", fontFamily: "Inter" }}>
                    Postgraduate Diploma A-Z
                  </a>
                  <a
                    href="#"
                    className="block mt-2 text-sm dark:text-gray-400 no-underline hover:underline"
                    style={{ color: "black", fontFamily: "Inter" }}>
                    How to Apply
                  </a>
                  <a
                    href="#"
                    className="block mt-2 text-sm text-gray-600 dark:text-gray-400 no-underline hover:underline"
                    style={{ color: "black", fontFamily: "Inter" }}>
                    Fees
                  </a>
                </div>
                <div>
                  <h3
                    className="text-gray-700 uppercase text-lg font-semibold dark:text-white"
                    style={{ fontFamily: "Roboto Condensed" }}>
                    Contact
                  </h3>
                  <span
                    className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                    style={{ fontFamily: "Inter" }}>
                    +1 526 654 8965
                  </span>
                  <span
                    className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                    style={{ fontFamily: "Inter" }}>
                    example@email.com
                  </span>
                </div>
              </div>
            </div>
          </div>
          <hr className="h-px my-6 bg-gray-200" />
          <div>
            <p
              className="text-center text-gray-500 dark:text-gray-400"
              style={{ fontFamily: "Inter" }}>
              © Abia State University - All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
