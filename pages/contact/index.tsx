import React from "react"
import dynamic from "next/dynamic"
import Map from "../../components/Map"

export default function Contact() {
  return (
    <section className="bg-zinc-100 py-6 dark:bg-gray-100 dark:text-gray-900 h-screen ">
      <h1 className="text-4xl font-bold text-center py-5">Contact</h1>
      <p className="pt-2 pb-4 text-center">
        Get in touch with us for more information
      </p>
      <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto my-20 lg:px-8  md:grid-cols-2 md:divide-x">
        <Map />
        <form
          noValidate
          className="flex flex-col py-6 space-y-6 md:py-0 md:px-6"
        >
          <label className="block">
            <span className="mb-1">Full name</span>
            <input
              type="text"
              placeholder="Leroy Jenkins"
              className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100"
            />
          </label>
          <label className="block">
            <span className="mb-1">Email address</span>
            <input
              type="email"
              placeholder="leroy@jenkins.com"
              className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100"
            />
          </label>
          <label className="block">
            <span className="mb-1">Message</span>
            <textarea
              rows={3}
              className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100"
            ></textarea>
          </label>
          <button
            type="button"
            className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 dark:bg-violet-600 dark:text-gray-50 focus:dark:ring-violet-600 hover:dark:ring-violet-600"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}
