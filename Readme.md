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

Form.IO Setup.
-------------------
Create an application and a form within the https://form.io platform. Click on Actions, and then add a new
<strong>Webhook</strong> action. Then configure the webhook action to point to this http://localhost:3001 server
with the following configurations. Your settings should look like the following.

 - username: test
 - password: password123

![Alt text](https://monosnap.com/file/4gRKwIDikfGjWr3nlqRhYRUqHTwIPg.png)