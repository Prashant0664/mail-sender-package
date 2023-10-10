# Simple Mail Sender using nodemailer

To install:<br/>
```
npm i mail-sender-package
```

### Some Important Points:<br/>
1. **MailSender**: Function which will be used to send mail
2. **passcode**: Your app password of your sender mail id(Remember, it is not same as mail id password which is created during creation of id).
3. **yourmail**: Mail from which you want to send mail
4. **clientmail**: Mail of the Receiver
5. **mailsubject**: Subject of the mail body
6. **contentinhtml**: Mail Body(in HTML)
7. **service**: Type of Service used, 'google' by default
<br/>
---


**How to use:** <br/>

**In backend**

```
const MailSender =require("mail-sender-package")
    try {
        const { passcode, yourmail, clientmail, mailsubject, contentinhtml, service } = req.body;
        MailSender(passcode, yourmail, clientmail, mailsubject, contentinhtml, service); // main mail sender function
    }
    catch (error) {
        return res.status(/*[ERROR_CODE]*/).json({ msg: "MESSAGE" });
    }
}
```