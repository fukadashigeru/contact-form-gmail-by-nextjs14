import type { NextApiRequest, NextApiResponse } from "next";
// import type { NextRequest } from "next";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const POST = async (req: Request) => {
  const { name, email, message } = await req.json();
  console.log(name, email, message);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAILUSER,
      pass: process.env.GMAILPASSWORD,
    },
  });

  const mailOptions = {
    // from: email,
    from: '"next.js Gmailアプリ" <hoge@hoge.com>',
    // from: "'next.js Gmailアプリ'",
    to: process.env.GMAILUSER,
    // to: "hoge@hoge.com",
    subject: `[お問い合わせ] ${name}様より`,
    html: `
      <p> 【名前】 </p>
      <p>  ${name} </p>
      <p> 【メッセージ内容】 </p>
      <p>  ${message} </p>
      <p> 【メールアドレス】 </p>
      <p>  ${email} </p>
    `,
    text: `${message} Send from ${email}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ status: "Ok" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Error sending email" }, { status: 500 });
  }
};

// "use strict";
// import type { NextApiRequest, NextApiResponse } from "next";
// import { NextResponse } from "next/server";

// export default function sendGmail(req: NextApiRequest, res: NextApiResponse) {
//   const nodemailer = require("nodemailer");

//   const transporter = nodemailer.createTransport({
//     host: "smtp.gmail.net",
//     port: 465,
//     secure: true,
//     auth: {
//       // TODO: replace `user` and `pass` values from <https://forwardemail.net>
//       user: process.env.GMAILUSER,
//       pass: process.env.GMAILPASSWORD,
//     },
//   });
// }

// export const GET = (req: NextApiRequest, res: NextApiResponse) => {
//   return NextResponse.json(
//     { message: "success", name: "shige code" },
//     { status: 200 }
//   );
// };

// export default async function sendGmail(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method === "POST") {
//     const { email, subject, text } = req.body;

//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USERNAME,
//         pass: process.env.EMAIL_PASSWORD,
//       },
//     });

//     const mailOptions = {
//       from: process.env.EMAIL_USERNAME,
//       to: email,
//       subject: subject,
//       text: text,
//     };

//     try {
//       await transporter.sendMail(mailOptions);
//       res.status(200).json({ status: "Ok" });
//     } catch (error) {
//       res.status(500).json({ error: "Error sending email" });
//     }
//   } else {
//     res.status(405).json({ error: "We only accept POST" });
//   }
// }
