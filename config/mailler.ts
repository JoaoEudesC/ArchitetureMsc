import nodemailer from "nodemailer"


//Transporter do gmail
export const transporterGmail = nodemailer.createTransport({
    host:'smtp.gmail.com',
    port: 465,
    secure:true,
    auth: {
        user: "joaoeudes91135538@gmail.com",
        pass: "jgrygzgjwponacvq"
    }
})

