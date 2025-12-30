# Deploying CrunchJunction to Hostinger

This guide will help you deploy your React website to Hostinger hosting.

## 📋 Prerequisites

- Hostinger hosting account (shared hosting, VPS, or cloud)
- Access to File Manager or FTP client
- Your domain name connected to Hostinger

## 🚀 Step-by-Step Deployment

### Step 1: Build Your Project Locally

First, build the production version of your website:

```bash
npm install
npm run build
```

This will create a `dist` folder with all the production-ready files.

### Step 2: Access Hostinger File Manager

1. Log in to your Hostinger account
2. Go to **hPanel** (Hostinger control panel)
3. Navigate to **Files** → **File Manager**
4. Open the `public_html` folder (this is where your website files go)

**Note:** If you want to host on a subdomain or subfolder, navigate to that directory instead.

### Step 3: Upload Files

You have two options:

#### Option A: Using File Manager (Easier)

1. In File Manager, navigate to `public_html`
2. Delete any existing files (if this is a new site)
3. Click **Upload** button
4. Select all files from your local `dist` folder:
   - `index.html`
   - `assets/` folder (contains all JS, CSS, and images)
   - `.htaccess` file (important for routing!)
5. Wait for upload to complete

#### Option B: Using FTP Client (Faster for large files)

1. Get your FTP credentials from Hostinger hPanel:
   - Go to **Files** → **FTP Accounts**
   - Note your FTP host, username, and password
2. Use an FTP client (FileZilla, WinSCP, etc.)
3. Connect to your Hostinger server
4. Navigate to `public_html` directory
5. Upload all contents from your local `dist` folder

### Step 4: Verify .htaccess File

Make sure the `.htaccess` file is uploaded to `public_html`. This file is crucial for React Router to work correctly on Hostinger.

If the `.htaccess` file is missing:
1. Create a new file in File Manager
2. Name it `.htaccess` (with the dot at the beginning)
3. Copy the contents from `public/.htaccess` in your project

### Step 5: Set Correct File Permissions

In File Manager:
1. Select all uploaded files
2. Right-click → **Change Permissions**
3. Set permissions to:
   - Files: `644`
   - Folders: `755`

### Step 6: Test Your Website

1. Visit your domain name in a browser
2. Test all pages (Home, Menu, About, Contact)
3. Test navigation between pages
4. Check mobile responsiveness

## 🔧 Troubleshooting

### Issue: Pages show 404 error when navigating directly

**Solution:** Make sure the `.htaccess` file is in your `public_html` directory and contains the rewrite rules.

### Issue: Website shows blank page

**Solution:** 
- Check browser console for errors
- Verify all files uploaded correctly
- Ensure `index.html` is in the root of `public_html`
- Check file permissions

### Issue: CSS/JS not loading

**Solution:**
- Verify the `assets` folder uploaded correctly
- Check file paths in browser console
- Clear browser cache and try again

### Issue: Images not showing

**Solution:**
- Images are loaded from Unsplash (external URLs)
- If you want local images, add them to `public` folder before building
- After building, upload them to `public_html/assets` or create an `images` folder

## 📝 Important Notes

1. **React Router:** The `.htaccess` file handles client-side routing. Without it, direct links to pages like `/menu` or `/about` will show 404 errors.

2. **Build Command:** Always run `npm run build` after making changes before uploading new files.

3. **File Structure:** Your `public_html` should look like this:
   ```
   public_html/
   ├── index.html
   ├── .htaccess
   └── assets/
       ├── index-[hash].js
       ├── index-[hash].css
       └── ...
   ```

4. **Updates:** When updating your site:
   - Make changes locally
   - Run `npm run build`
   - Delete old files in `public_html`
   - Upload new files from `dist` folder

## 🌐 Alternative: Using Subdomain or Subfolder

If you want to host on a subdomain (e.g., `restaurant.yourdomain.com`) or subfolder:

1. **Subdomain:** Create the subdomain in Hostinger, then upload to that subdomain's folder
2. **Subfolder:** Upload to `public_html/restaurant/` instead of `public_html/`

For subfolder deployment, you'll need to update `vite.config.js`:
```js
export default defineConfig({
  base: '/restaurant/', // Add this line
  // ... rest of config
})
```

Then rebuild and upload.

## ✅ Success Checklist

- [ ] Built project with `npm run build`
- [ ] Uploaded all files from `dist` folder
- [ ] `.htaccess` file is in `public_html`
- [ ] File permissions are correct (644 for files, 755 for folders)
- [ ] Website loads at your domain
- [ ] All pages work correctly
- [ ] Navigation works (no 404 errors)
- [ ] Mobile view is responsive

## 🆘 Need Help?

If you encounter issues:
1. Check Hostinger's documentation
2. Contact Hostinger support
3. Verify all steps were followed correctly
4. Check browser console for specific error messages

---

**Your website should now be live on Hostinger! 🎉**

