
const nodemailer = require('nodemailer')
const User = require('../models/user.model')
const cron = require('node-cron')


const getAlluser = async (req, res) => {
    try {
        const users = await User.find({})
        res.status(200).json({ users })
    } catch (error) {
        res.status(400).json({ error })
    }
}


const sendNotification = async (recipientEmail) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            }
        })

        const emailContent = gmailContent(recipientEmail);

        await transporter.sendMail({
            from: process.env.EMAIL,
            to: recipientEmail,
            subject: 'Welcome to Nuvera',
            html: emailContent

        })

        console.log("veification email has been sent")
    } catch (error) {
        console.log(error)
    }
}



const gmailContent = (recipientEmail, jobTitle) => {
    return `
    <h1>New Job Opportunity: ${jobTitle}</h1>
    <p>Hello,</p>
    <p>We are excited to inform you about a new job opportunity that matches your expertise:</p>
    <p>Job Title: ${jobTitle}</p>
    <p>Company: [Your Company Name]</p>
    <p>Location: [Job Location]</p>
    <p>Application Deadline: [Deadline Date]</p>
    <p>Description:</p>
    <p>[Job Opportunity Description]</p>
    <p>If you are interested in this position and believe you are a good fit, you can find more details and submit your application on our website: [Application Link]</p>
    <p>Thank you for your continued interest in our company and the work we do. We look forward to receiving your application.</p>
    <p>Best regards,<br/>[Your Name]<br/>[Your Title]<br/>[Company Name]</p>
    `;
};

const jobTitles = ['Web Developer']

cron.schedule('0 0 0 * * *', async () => {
    try {
        const users = await User.find({})

        users.forEach(user => {
            if (jobTitles.includes(user.jobTitle)) {
                sendNotification(user.email, user.jobTitle)
            } else {
                console.log("No job match found")
            }
        })
    } catch (error) {
        console.log(error)
    }
})



module.exports = {
    getAlluser,
    sendNotification
}