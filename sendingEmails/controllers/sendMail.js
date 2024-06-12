const nodemailer = require('nodemailer');


const sendMail = async (req,res) =>{
    
    const testaccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'tod84@ethereal.email',
            pass: 'UG44zhDU7aCFESwbz6'
        }
    });

    let info = await transporter.sendMail({
        from: 'fake smtp server <tod84@ethereal.email>',
        to: 'pareshsutharr <pareshsutharr@gmail.com>',
        subject: 'Nodemailer is unicode friendly ✔',
        text: 'kese ho bhai log ghar aajao!',
        html: '<p><b>Hello</b> to myself!</p>'
    })

    console.log("message is :%s" , info.messageId);
    res.json(info);

    res.send("i am sending a mail...");
}

module.exports = sendMail;