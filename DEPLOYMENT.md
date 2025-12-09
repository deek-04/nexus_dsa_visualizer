# NEXUS Deployment Guide

This guide provides step-by-step instructions for deploying NEXUS to production using Vercel.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Pre-Deployment Checklist](#pre-deployment-checklist)
- [Vercel Account Setup](#vercel-account-setup)
- [Git Repository Setup](#git-repository-setup)
- [Connecting Repository to Vercel](#connecting-repository-to-vercel)
- [Environment Variables Configuration](#environment-variables-configuration)
- [Initial Deployment](#initial-deployment)
- [Custom Domain Configuration](#custom-domain-configuration-optional)
- [Continuous Deployment](#continuous-deployment)
- [Monitoring and Maintenance](#monitoring-and-maintenance)
- [Troubleshooting](#troubleshooting)

---

## Prerequisites

Before deploying NEXUS, ensure you have:

- ✅ Node.js 18.x or higher installed
- ✅ Git installed and configured
- ✅ A GitHub, GitLab, or Bitbucket account
- ✅ Your code committed to a Git repository
- ✅ Verified that the application builds successfully locally

## Pre-Deployment Checklist

### 1. Verify Local Build

Test the production build locally to catch any issues before deployment:

```bash
# Install dependencies
npm install

# Run production build
npm run build

# Test production server
npm start
```

Visit `http://localhost:3000` and verify:
- [ ] Homepage loads correctly
- [ ] All visualizer pages work
- [ ] Dark mode toggle functions
- [ ] No console errors
- [ ] Images and assets load properly

### 2. Review Configuration Files

Ensure these files are properly configured:

- [ ] `package.json` - Contains correct scripts (dev, build, start, lint)
- [ ] `next.config.ts` - Production-ready Next.js configuration
- [ ] `vercel.json` - Vercel deployment settings (should exist in project root)
- [ ] `.env.example` - Template for environment variables
- [ ] `.gitignore` - Excludes `.env`, `.env.local`, and `node_modules`

### 3. Clean Up Repository

Before deployment, clean up unnecessary files:

```bash
# Remove build artifacts
rm -rf .next
rm -rf node_modules

# Commit any pending changes
git add .
git commit -m "Prepare for deployment"
git push origin main
```

---

## Vercel Account Setup

### Step 1: Create Vercel Account

1. Visit [vercel.com](https://vercel.com)
2. Click **"Sign Up"** in the top right corner
3. Choose your preferred sign-up method:
   - **GitHub** (Recommended - simplifies repository connection)
   - **GitLab**
   - **Bitbucket**
   - **Email**

4. Complete the authentication process
5. Verify your email address if required

### Step 2: Install Vercel CLI (Optional)

For advanced users who prefer command-line deployment:

```bash
npm install -g vercel

# Login to Vercel
vercel login
```

---

## Git Repository Setup

### Step 1: Initialize Git Repository (if not already done)

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit"
```

### Step 2: Create Remote Repository

#### Using GitHub:

1. Go to [github.com](https://github.com)
2. Click **"New repository"**
3. Name your repository (e.g., `nexus-data-structures`)
4. Choose **Public** or **Private**
5. Do NOT initialize with README (you already have one)
6. Click **"Create repository"**

#### Connect Local Repository to GitHub:

```bash
# Add remote origin
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Verify Repository

Visit your repository on GitHub and confirm:
- [ ] All files are present
- [ ] `.env` files are NOT committed (should be in `.gitignore`)
- [ ] Main branch is set as default
- [ ] Latest commit is visible

---

## Connecting Repository to Vercel

### Step 1: Import Project

1. Log in to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"Add New..."** → **"Project"**
3. You'll see a list of your Git repositories

### Step 2: Select Repository

1. Find your NEXUS repository in the list
2. Click **"Import"** next to the repository name

**If you don't see your repository:**
- Click **"Adjust GitHub App Permissions"**
- Grant Vercel access to the repository
- Refresh the page

### Step 3: Configure Project

Vercel will auto-detect Next.js. Verify these settings:

**Framework Preset:** Next.js  
**Root Directory:** `./` (leave as default)  
**Build Command:** `npm run build`  
**Output Directory:** `.next` (auto-detected)  
**Install Command:** `npm install`  
**Development Command:** `npm run dev`

**Build & Development Settings:**
- **Node.js Version:** 18.x (or 20.x)
- Leave other settings as default

### Step 4: Configure Environment Variables (if needed)

If your application requires environment variables, add them now:

1. Scroll to **"Environment Variables"** section
2. Add each variable:
   - **Key:** Variable name (e.g., `NEXT_PUBLIC_SITE_URL`)
   - **Value:** Variable value
   - **Environments:** Select Production, Preview, and/or Development

See [Environment Variables Configuration](#environment-variables-configuration) section for details.

### Step 5: Deploy

1. Click **"Deploy"** button
2. Vercel will start building your application
3. Monitor the build logs in real-time

---

## Environment Variables Configuration

### Understanding Environment Variables

NEXUS uses environment variables for configuration. Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser.

### Required Environment Variables

For basic deployment, NEXUS requires minimal configuration:

| Variable | Description | Example | Required |
|----------|-------------|---------|----------|
| `NODE_ENV` | Environment mode | `production` | Auto-set by Vercel |
| `NEXT_PUBLIC_SITE_URL` | Production URL | `https://nexus.vercel.app` | Optional |

### Adding Environment Variables in Vercel

#### Method 1: During Initial Setup

Add variables when importing the project (Step 4 above).

#### Method 2: After Deployment

1. Go to your project in Vercel Dashboard
2. Click **"Settings"** tab
3. Click **"Environment Variables"** in sidebar
4. Click **"Add New"**
5. Enter variable details:
   - **Key:** Variable name
   - **Value:** Variable value
   - **Environments:** Check applicable environments
     - ✅ **Production** - Live site
     - ✅ **Preview** - Pull request deployments
     - ⬜ **Development** - Local development (optional)
6. Click **"Save"**

### Environment Variable Targets

- **Production:** Used for your live production deployment
- **Preview:** Used for preview deployments (pull requests, branches)
- **Development:** Used when running `vercel dev` locally

### Updating Environment Variables

After adding or modifying environment variables:

1. Variables take effect on the **next deployment**
2. Trigger a new deployment:
   - Push a new commit, OR
   - Go to **Deployments** → Click **"..."** → **"Redeploy"**

### Security Best Practices

- ✅ Never commit `.env` files to Git
- ✅ Use Vercel's encrypted storage for secrets
- ✅ Only expose variables to browser when necessary (`NEXT_PUBLIC_` prefix)
- ✅ Rotate sensitive credentials regularly
- ✅ Use different values for production and preview environments

---

## Initial Deployment

### Step 1: Monitor Build Process

After clicking "Deploy", you'll see the build logs:

```
Running "npm install"
Installing dependencies...
✓ Dependencies installed

Running "npm run build"
Creating optimized production build...
✓ Build completed successfully

Deploying to Vercel Edge Network...
✓ Deployment ready
```

**Build Time:** Typically 2-5 minutes for NEXUS

### Step 2: Verify Deployment Status

Wait for deployment to complete. You'll see:

- ✅ **Ready** - Deployment successful
- ❌ **Error** - Build failed (see [Troubleshooting](#troubleshooting))
- 🔄 **Building** - In progress

### Step 3: Access Your Deployed Application

Once deployment is ready:

1. Vercel provides a production URL: `https://your-project-name.vercel.app`
2. Click the URL or **"Visit"** button
3. Your NEXUS application should load

### Step 4: Post-Deployment Verification

Test your deployed application:

- [ ] Homepage loads within 3 seconds
- [ ] Navigate to each visualizer page:
  - [ ] Stack
  - [ ] Queue
  - [ ] Linked List
  - [ ] Binary Search Tree
  - [ ] AVL Tree
  - [ ] Heap
  - [ ] Huffman Encoding
  - [ ] Dijkstra's Algorithm
  - [ ] Polynomial Multiplication
  - [ ] Message Queue
  - [ ] Infix to Postfix Conversion
- [ ] Dark mode toggle works
- [ ] All images load correctly
- [ ] No console errors (open browser DevTools)
- [ ] Test on mobile device or responsive view
- [ ] Verify HTTPS is enabled (lock icon in browser)

### Step 5: Share Your Deployment

Your NEXUS application is now live! Share the URL:

```
https://your-project-name.vercel.app
```

---

## Custom Domain Configuration (Optional)

### Prerequisites

- A registered domain name (e.g., from Namecheap, GoDaddy, Google Domains)
- Access to your domain's DNS settings

### Step 1: Add Domain in Vercel

1. Go to your project in Vercel Dashboard
2. Click **"Settings"** tab
3. Click **"Domains"** in sidebar
4. Click **"Add"** button
5. Enter your domain name:
   - For apex domain: `example.com`
   - For subdomain: `nexus.example.com`
6. Click **"Add"**

### Step 2: Configure DNS Records

Vercel will provide DNS configuration instructions. You'll need to add records at your domain registrar.

#### For Apex Domain (example.com):

Add an **A Record**:

```
Type: A
Name: @ (or leave blank)
Value: 76.76.21.21
TTL: 3600 (or default)
```

#### For Subdomain (nexus.example.com):

Add a **CNAME Record**:

```
Type: CNAME
Name: nexus
Value: cname.vercel-dns.com
TTL: 3600 (or default)
```

#### For Both Apex and WWW:

Add both records:

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### Step 3: Update DNS at Your Registrar

#### Example: Namecheap

1. Log in to Namecheap
2. Go to **Domain List** → Click **"Manage"** next to your domain
3. Click **"Advanced DNS"** tab
4. Click **"Add New Record"**
5. Enter the DNS records from Step 2
6. Click **"Save All Changes"**

#### Example: GoDaddy

1. Log in to GoDaddy
2. Go to **My Products** → **DNS**
3. Click **"Add"** under DNS Records
4. Enter the DNS records from Step 2
5. Click **"Save"**

### Step 4: Wait for DNS Propagation

- **Propagation Time:** Up to 24-48 hours (usually faster)
- **Check Status:** Use [whatsmydns.net](https://www.whatsmydns.net) to verify propagation

### Step 5: Verify SSL Certificate

Vercel automatically provisions an SSL certificate:

1. Wait for DNS propagation to complete
2. Vercel will automatically issue a Let's Encrypt certificate
3. Visit your custom domain with HTTPS: `https://example.com`
4. Verify the lock icon appears in browser

### Step 6: Configure Domain Redirect (Optional)

Redirect www to apex domain (or vice versa):

1. In Vercel Dashboard → **Settings** → **Domains**
2. Find the domain you want to redirect FROM
3. Click **"Edit"** → **"Redirect to"**
4. Select the target domain
5. Click **"Save"**

---

## Continuous Deployment

### How It Works

Vercel automatically deploys your application when you push code:

```
Push to Git → Vercel detects change → Builds → Deploys → Live
```

### Automatic Deployments

#### Production Deployments

Triggered when you push to the **main** branch:

```bash
git add .
git commit -m "Update feature"
git push origin main
```

Vercel will:
1. Detect the push
2. Start a new build
3. Deploy to production if build succeeds
4. Update your production URL

#### Preview Deployments

Triggered for **all other branches** and **pull requests**:

```bash
git checkout -b feature/new-visualizer
git add .
git commit -m "Add new visualizer"
git push origin feature/new-visualizer
```

Vercel will:
1. Create a unique preview URL
2. Deploy the branch to that URL
3. Add a comment to the pull request with the preview link
4. Update the preview on each new push

### Deployment Notifications

#### GitHub Integration

Vercel automatically updates commit status:

- ✅ **Success** - Green checkmark on commit
- ❌ **Failed** - Red X on commit
- 🔄 **Building** - Yellow dot on commit

#### Email Notifications

Configure email notifications:

1. Go to Vercel Dashboard → **Account Settings**
2. Click **"Notifications"**
3. Enable **"Deployment Notifications"**
4. Choose notification preferences:
   - ✅ Failed deployments
   - ⬜ Successful deployments (can be noisy)

#### Slack/Discord Integration (Optional)

1. Go to Project Settings → **Integrations**
2. Search for Slack or Discord
3. Follow integration setup instructions
4. Configure notification preferences

### Deployment Workflow Best Practices

1. **Use Feature Branches**
   ```bash
   git checkout -b feature/my-feature
   # Make changes
   git push origin feature/my-feature
   # Test preview deployment
   # Create pull request
   # Merge to main after review
   ```

2. **Test Preview Deployments**
   - Always test preview URL before merging
   - Share preview with team for feedback
   - Verify functionality works in production environment

3. **Monitor Deployments**
   - Check Vercel dashboard after pushing
   - Review build logs if deployment fails
   - Test production site after deployment

---

## Monitoring and Maintenance

### Vercel Dashboard

Access deployment information:

1. **Deployments Tab**
   - View all deployments (production and preview)
   - See deployment status and timestamps
   - Access deployment logs
   - Promote or rollback deployments

2. **Analytics Tab** (if enabled)
   - Page views and visitor statistics
   - Geographic distribution
   - Top pages and referrers

3. **Speed Insights** (if enabled)
   - Core Web Vitals metrics
   - Performance scores
   - Real user monitoring data

### Viewing Logs

#### Build Logs

1. Go to **Deployments** tab
2. Click on a deployment
3. View **"Building"** section for build logs

#### Runtime Logs

1. Go to **Deployments** tab
2. Click on a deployment
3. Click **"Functions"** tab (if using API routes)
4. View real-time logs

### Performance Monitoring

#### Run Lighthouse Audit

1. Open your production site in Chrome
2. Open DevTools (F12)
3. Go to **"Lighthouse"** tab
4. Select **"Performance"** category
5. Click **"Analyze page load"**

**Target Scores:**
- Performance: 80+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 90+

#### Monitor Core Web Vitals

Key metrics to track:
- **LCP (Largest Contentful Paint):** < 2.5s
- **FID (First Input Delay):** < 100ms
- **CLS (Cumulative Layout Shift):** < 0.1

### Rollback Procedure

If a deployment introduces issues:

1. Go to Vercel Dashboard → **Deployments**
2. Find the last working deployment
3. Click **"..."** menu → **"Promote to Production"**
4. Confirm the promotion
5. Traffic instantly switches to the previous version

**Alternative: Revert Git Commit**

```bash
# Revert the problematic commit
git revert HEAD

# Push to trigger new deployment
git push origin main
```

### Updating Dependencies

Regularly update dependencies for security and performance:

```bash
# Check for outdated packages
npm outdated

# Update dependencies
npm update

# Or update specific package
npm install package-name@latest

# Test locally
npm run build
npm start

# Commit and push
git add package.json package-lock.json
git commit -m "Update dependencies"
git push origin main
```

### Security Audits

Run security audits regularly:

```bash
# Check for vulnerabilities
npm audit

# Fix vulnerabilities automatically
npm audit fix

# For breaking changes
npm audit fix --force
```

---

## Troubleshooting

### Build Failures

#### Error: "Build failed with exit code 1"

**Possible Causes:**
- TypeScript compilation errors
- Missing dependencies
- Syntax errors in code

**Solution:**
1. Check build logs in Vercel Dashboard
2. Reproduce the error locally:
   ```bash
   npm run build
   ```
3. Fix the errors shown in the output
4. Test locally, then push fix:
   ```bash
   git add .
   git commit -m "Fix build errors"
   git push origin main
   ```

#### Error: "Module not found"

**Cause:** Missing dependency in `package.json`

**Solution:**
```bash
# Install the missing package
npm install missing-package-name

# Commit and push
git add package.json package-lock.json
git commit -m "Add missing dependency"
git push origin main
```

#### Error: "Out of memory"

**Cause:** Build process requires more memory

**Solution:**
1. Go to Project Settings → **General**
2. Upgrade to Pro plan for more resources, OR
3. Optimize your build:
   ```javascript
   // next.config.ts
   export default {
     experimental: {
       workerThreads: false,
       cpus: 1
     }
   }
   ```

### Deployment Issues

#### Site Shows 404 Error

**Possible Causes:**
- Incorrect output directory
- Build didn't complete

**Solution:**
1. Verify `vercel.json` configuration
2. Check that `.next` directory is generated during build
3. Redeploy from Vercel Dashboard

#### Environment Variables Not Working

**Cause:** Variables not set or incorrect naming

**Solution:**
1. Verify variables are added in Vercel Dashboard
2. Check variable names (case-sensitive)
3. Ensure `NEXT_PUBLIC_` prefix for client-side variables
4. Trigger new deployment after adding variables

#### Slow Page Load Times

**Possible Causes:**
- Large images not optimized
- Too many dependencies
- Inefficient code

**Solution:**
1. Use Next.js Image component for all images
2. Implement code splitting
3. Analyze bundle size:
   ```bash
   npm run build
   # Check output for large chunks
   ```
4. Optimize images before uploading

### Domain Configuration Issues

#### Domain Not Resolving

**Cause:** DNS not configured correctly or not propagated

**Solution:**
1. Verify DNS records at your registrar
2. Use [whatsmydns.net](https://www.whatsmydns.net) to check propagation
3. Wait up to 48 hours for full propagation
4. Clear browser cache and try again

#### SSL Certificate Not Provisioning

**Cause:** DNS not pointing to Vercel or CAA records blocking

**Solution:**
1. Verify DNS records are correct
2. Wait for DNS propagation
3. Check for CAA records that might block Let's Encrypt
4. Contact Vercel support if issue persists

#### "Invalid Configuration" Error

**Cause:** Domain already in use or incorrect format

**Solution:**
1. Ensure domain is not used by another Vercel project
2. Remove domain from old project first
3. Verify domain format (no http://, no trailing slash)

### Runtime Errors

#### Application Crashes in Production

**Cause:** Runtime error not caught during build

**Solution:**
1. Check runtime logs in Vercel Dashboard
2. Reproduce error locally with production build:
   ```bash
   npm run build
   npm start
   ```
3. Add error boundaries to catch React errors
4. Fix the error and redeploy

#### API Routes Not Working

**Cause:** Serverless function timeout or error

**Solution:**
1. Check function logs in Vercel Dashboard
2. Verify API route code is correct
3. Check for timeout issues (max 10s on Hobby plan)
4. Add error handling to API routes

### Getting Help

If you're still experiencing issues:

1. **Vercel Documentation:** [vercel.com/docs](https://vercel.com/docs)
2. **Vercel Support:** [vercel.com/support](https://vercel.com/support)
3. **Community Forum:** [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)
4. **Next.js Documentation:** [nextjs.org/docs](https://nextjs.org/docs)

---

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
- [Environment Variables Guide](./ENVIRONMENT_SETUP.md)
- [Vercel CLI Reference](https://vercel.com/docs/cli)
- [Custom Domains Guide](https://vercel.com/docs/concepts/projects/custom-domains)

---

**Congratulations!** 🎉 Your NEXUS application is now deployed and accessible to users worldwide.

For questions or issues, refer to the troubleshooting section above or consult the Vercel documentation.
