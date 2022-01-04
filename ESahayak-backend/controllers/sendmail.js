const nodemailer = require("nodemailer");
require("dotenv").config();

exports.send = async (req, res) => {
  let Obj = JSON.parse(JSON.stringify(req.body));

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.email,
      pass: process.env.pass,
    },
  });

  let mailOptions = {
    from: "alexis.corwin94@ethereal.email",
    to: `${Obj.email1},${Obj.email2}`,
    subject: "Your recent purchase details",
    html: `<div class="div" >
    <img src="${req.body.pdt_image}"  style="height : 50px">
          <p>You recently made a transcation of Rs${
            Obj.pdt_price * Obj.pdt_qunatity
          }</p>
          <p></p>Product name : ${Obj.pdt_name} </p>
          </div>`,
    attachments: [
      {
        path: req.body.pdt_image,
        cid: "unique@kreata.ee",
      },
    ],
  };
  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(`Email sen ${info.response}`);
    }
  });

  res.send("mail sent succesfully!!");
};
