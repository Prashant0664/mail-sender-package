# Simple Mail Sender using nodemailer

To install:<br/>
```
npm i 
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

**In Frontend**

```
import MailSender from "mail-sender"
import React from "react";

const App = () => {

  // main sender function starts here
  const mailsenderfunction = async () => {
    try {
      await MailSender(passcode, yourmail, clientmail, mailsubject, contentinhtml, service);
    }
    catch (error) { console.log(error) };
  }
  // main sender function ends here

  return (
    <>
    </>
  )
}
```
**In backend**

```
const onst sendmail = async (req, res) => {
    try {
        const { passcode, yourmail, clientmail, mailsubject, contentinhtml, service } = req.body;
        await MailSender(passcode, yourmail, clientmail, mailsubject, contentinhtml, service); // main mail sender function
    }
    catch (error) {
        return res.status(/*[ERROR_CODE]*/).json({ msg: "MESSAGE" });
    }
}
```