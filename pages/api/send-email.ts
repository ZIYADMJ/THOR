import nodemailer from "nodemailer"

export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    const { fullName, email, message } = req.body

    // Create a transporter using SMTP
    let transporter = nodemailer.createTransport({
      host: "your-smtp-host",
      port: 587,
      secure: false, // Use TLS
      auth: {
        user: "your-email@example.com",
        pass: "your-password",
      },
    })

    try {
      // Send email
      await transporter.sendMail({
        from: '"Your Website" <your-email@example.com>',
        to: "recipient@example.com",
        subject: "New Contact Form Submission",
        text: `Name: ${fullName}\nEmail: ${email}\nMessage: ${message}`,
        html: `<p><strong>Name:</strong> ${fullName}</p>
                   <p><strong>Email:</strong> ${email}</p>
                   <p><strong>Message:</strong> ${message}</p>`,
      })

      res.status(200).json({ message: "Email sent successfully" })
    } catch (error) {
      console.error("Error sending email:", error)
      res.status(500).json({ message: "Error sending email" })
    }
  } else {
    res.setHeader("Allow", ["POST"])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
