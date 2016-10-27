Form.IO webhook receiver
----------------------------
This application serves as an example webhook receiver for the https://form.io platform.

Setup
-----------
First, download this application, and then run the following.

```
npm install
```

You can then run the example server by typing the following

```
node index
```

Using with NGROK
----------------
You can test this locally by using this along with a utility called [NGROK](https://ngrok.com). Follow the instructions @ [https://ngrok.com/download](https://ngrok.com/download) to download and get started to create a localhost tunnel. You can create a public tunnel to your locally running receiver by typing the following command.

```
ngrok http 4001
```

This will connect to your webhook receiver and provide a public URL to access it.

```
Version                       2.1.14
Region                        United States (us) 
Web Interface                 http://127.0.0.1:4040 
Forwarding                    http://b68934c2.ngrok.io -> localhost:4001
Forwarding                    https://b68934c2.ngrok.io -> localhost:4001
```

This tells me that I am now able to connect to my locally running Webhook receiver by navigating to ```http://b68934c2.ngrok.io```. I can now use this within my Webhook Action settings @ Form.io.

Form.IO Setup.
-------------------
Create an application and a form within the https://form.io platform. Click on Actions, and then add a new
<strong>Webhook</strong> action. Then configure the webhook action to point to your server
with the following configurations. Your settings should look like the following.

 - username: test
 - password: password123

![Alt text](https://monosnap.com/file/ve1Hy5sEYpAwjplPttL1cDYIZUDoGu.png)
