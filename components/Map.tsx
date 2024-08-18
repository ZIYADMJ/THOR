import React from "react"

export default function Map() {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2901.7468090987254!2d-6.771781237018871!3d33.7994409797082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda71770230a310f%3A0x92469b875f094302!2sLotissement%20Annakhil!5e1!3m2!1sen!2sma!4v1723994127355!5m2!1sen!2sma"
      width="500"
      height="300"
      style={{ border: 0 }}
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  )
}