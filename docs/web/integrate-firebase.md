---
id: integrate-firebase
title: Integrate Firebase
---
# How to Connect Firebase with your Web

1. First you need to create a Web project inside your Firebase Project.  
   For that open your firebase project in console and click on this tiny web icon:

   ![eStay](/images/web/firebase1.png)

2. After clicking on Web app you will be able to see this Screen.  
   Add your web app name and also make sure you don't forget to check the checkbox.

   ![eStay](/images/web/firebase2.png)

3. Now Copy this Firebase Credentials.

   ![eStay](/images/web/firebase3.png)

4. And paste this your Credentials in **.env** and **public/firebase-messaging-sw.js** File.

   ![eStay](/images/web/firebase-service.png)

   ![eStay](/images/web/firebase_config.png)

5. Open firebase account go to project settings -> cloud messaging -> Web configuration and select key and paste in .env file

   ![eStay](/images/web/webpush.png)

   ![eStay](/images/web/webpushkey.png)

Open the `.env` file and add the VAPID key:

```env
NEXT_PUBLIC_FIREBASE_VAPID_KEY=your-vapid-key-here
```
![VAPID Key](/images/web/vapid_key.png)

---

6. **Note: Skip this Step if you have already copy pasted the credentials**  
   If you have forget to copy your firebase credentials then you can always find your credentials by following these steps:

   ![eStay](/images/web/firebase-integration.png)

7. For Login Provider open authentication -> sign in method

   ![eStay](/images/web/firebase-provider.png)

8. **Now you have to add your Web domain to your Firebase Project**  

   1. Open your Firebase Project 
   2. Go you Authentication/settings/Authorized Domain 3. Click on Add Domain 4. One Popup will open add your domain name without http/https in that popup and click submit.

   ![eStay](/images/web/firebase-add-web-domain.png)

   **Congratulations. You have successfully connected your Web application to your firebase project. Now you are good to go ahead.** 

