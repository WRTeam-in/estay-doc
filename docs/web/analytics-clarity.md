---
id: analytics-clarity
title: Setup Google Analytics and Microsoft Clarity
sidebar_position: 5
---

# Setup Google Analytics

1. Go to **Google Analytics**.
2. Create a new **Account** (if one does not already exist).
3. Create a new **GA4 Property** (if one does not already exist).
4. Navigate to **Admin → Data Streams**.
5. Create a new **Web Data Stream**.

:::info
If your Firebase project is already linked to Google Analytics, **you do not need to create a new Google Analytics account or GA4 property**.

Simply open the existing Google Analytics property linked to Firebase, navigate to **Admin → Data Streams**, create a **Web Data Stream** (if one does not already exist)
:::

# Setup Microsoft Clarity

1. Go to [Microsoft Clarity](https://clarity.microsoft.com).
2. Create a [new project](https://clarity.microsoft.com/projects).
![new project](/images/web/clarity1.png)
3. Enter: 
   1. Project Name
   2. Website URL
   3. Industry (e.g. Travel & Transportation)
![create project](/images/web/clarity2.png)
4. Get the **Project ID**
   1. Click of the settings icon.
   3. Copy the **Project ID**.

![create project](/images/web/clarity4.png)
![create project](/images/web/clarity3.png)

4. Now open your web code **.env** file and paste your project id in NEXT_PUBLIC_CLARITY_PROJECT_ID as show in below image.
![create project](/images/web/clarity5.png)

:::info
In case you dont see **.env** file then please **enable show hidden files** on your system
:::