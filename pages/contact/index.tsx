import React from "react"
import dynamic from 'next/dynamic';
import Map from "../../components/Map";


export default function Contact() {
  return (
    <section className="bg-zinc-200 py-6 dark:bg-gray-100 dark:text-gray-900 h-screen ">
      <h1 className="text-4xl font-bold text-center py-5">Contact</h1>
      <p className="pt-2 pb-4 text-center">Get in touch with us for more information</p>
      <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto my-20 lg:px-8  md:grid-cols-2 md:divide-x">
        <Map />
        <form
          onSubmit={(e) => {
            e.preventDefault()
            // Handle form submission
          }}
          className="flex flex-col py-6 space-y-6 md:py-0 md:px-6"
        >
          <div className="mb-4">
            <label htmlFor="fullName" className="block mb-2 font-medium">
              Full name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Leroy Jenkins"
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black-600 dark:bg-gray-800 dark:text-white dark:border-gray-600"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-medium">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="leroy@jenkins.com"
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black-600 dark:bg-gray-800 dark:text-white dark:border-gray-600"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2 font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={2}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black-600 dark:bg-gray-800 dark:text-white dark:border-gray-600"
            ></textarea>
          </div>
          <button
            type="submit"
            className="self-center px-8 py-3 text-lg font-semibold text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 active:bg-gray-900 rounded-md transition-colors duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}
