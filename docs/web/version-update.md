---
sidebar_position: 13
---

# New Version Update


Follow these steps to update to a new version of the web app.

1. **Extract the ZIP File**:
   Extract the ZIP file containing the web code that you received from Codecanyon.

2. **Open the Code in VS Code**:
   Open the extracted web code in Visual Studio Code (VS Code).

3. **Edit the .env File**:
   Locate and open the .env file in your code editor. Fill all required details in it.

4. **Configure Firebase**:
   Add the Firebase details to the public/firebase-messaging-sw.js file of your web project.

   :::note Skip the 5th step if already made edits on server.

5. **Upload file to server**:
   Make a zip of the web files and upload to your server.


## Automated Deployment (Recommended)

To update the application on the VPS using the automated script:

1.  **SSH into the server** and navigate to the project directory.
2.  **Run the deployment script**:
    ```bash
    ./update.sh
    ```

:::info
If you encounter the error:

`update.sh: command not found`

Run the following command once to make the script executable:

```bash
chmod +x update.sh
```

After that, run the deployment script again:

```bash
./update.sh
```

:::

## Manual Deployment

5. **Install Dependencies**:
   Run the following command to install the necessary dependencies:

   ```bash
   npm install
   ```

6. **Cbuild on server**:

   - Upload your updated source code to the server.
   - On your VPS, install dependencies and build on the server (this keeps SEO behavior intact):

     ```bash
     npm run build
     ```

   - If you're already using PM2, you do not need to create a new PM2 app. Simply restart the existing PM2 process after the build so the update takes effect:

     ```bash
     pm2 restart <your-existing-process-name>
     ```

   - Or restart by process ID:

     1. List processes and note the ID:

        ```bash
        pm2 ls
        ```

     2. Restart using the ID (example uses ID 0):

        ```bash
        pm2 restart 0
        ```

7. **Need more details?**

- For the full SEO (VPS) deployment flow, see: [Next.js Deployment](./server-deployment.md)
