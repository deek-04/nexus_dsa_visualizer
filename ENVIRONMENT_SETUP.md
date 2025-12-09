# Environment Variables Setup Guide

This guide explains how to configure environment variables for NEXUS in both local development and production (Vercel) environments.

## Table of Contents

- [Overview](#overview)
- [Local Development Setup](#local-development-setup)
- [Production Setup (Vercel)](#production-setup-vercel)
- [Environment Variables Reference](#environment-variables-reference)
- [Security Best Practices](#security-best-practices)
- [Troubleshooting](#troubleshooting)

## Overview

NEXUS uses environment variables to configure application behavior across different environments. Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser, while others remain server-side only.

## Local Development Setup

### Step 1: Create Local Environment File

1. Copy the example environment file:
   ```bash
   copy .env.example .env.local
   ```
   
   On macOS/Linux:
   ```bash
   cp .env.example .env.local
   ```

2. Edit `.env.local` with your local values:
   ```env
   NODE_ENV=development
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

### Step 2: Restart Development Server

After creating or modifying `.env.local`, restart your development server:

```bash
npm run dev
```

**Note:** `.env.local` is automatically ignored by git and will not be committed to version control.

## Production Setup (Vercel)

### Method 1: Vercel Dashboard (Recommended)

1. **Navigate to Project Settings**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Select your NEXUS project
   - Click on "Settings" tab
   - Select "Environment Variables" from the sidebar

2. **Add Environment Variables**
   - Click "Add New" button
   - Enter variable name (e.g., `NEXT_PUBLIC_SITE_URL`)
   - Enter variable value (e.g., `https://nexus-visualizer.vercel.app`)
   - Select target environments:
     - ✅ **Production** - Live production deployment
     - ✅ **Preview** - Preview deployments from branches
     - ⬜ **Development** - Local development (optional)
   - Click "Save"

3. **Required Variables for Production**
   
   Add these variables with appropriate values:
   
   | Variable Name | Value | Target Environments |
   |--------------|-------|---------------------|
   | `NODE_ENV` | `production` | Production |
   | `NEXT_PUBLIC_SITE_URL` | Your production URL | Production, Preview |

4. **Redeploy Application**
   - After adding/updating variables, trigger a new deployment
   - Go to "Deployments" tab
   - Click "Redeploy" on the latest deployment
   - Or push a new commit to trigger automatic deployment

### Method 2: Vercel CLI

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Add Environment Variables**:
   ```bash
   vercel env add NEXT_PUBLIC_SITE_URL production
   ```
   
   Follow the prompts to enter the value.

4. **Pull Environment Variables** (for local development):
   ```bash
   vercel env pull .env.local
   ```

### Method 3: Import from .env File

1. **Prepare a temporary .env file** with production values (DO NOT commit this file):
   ```env
   NODE_ENV=production
   NEXT_PUBLIC_SITE_URL=https://your-domain.com
   ```

2. **Import via Vercel Dashboard**:
   - Go to Project Settings > Environment Variables
   - Click "Add New" > "Import .env"
   - Paste the contents or upload the file
   - Select target environments
   - Click "Import"

3. **Delete the temporary .env file** after import

## Environment Variables Reference

### Required Variables

#### `NODE_ENV`
- **Description**: Specifies the application environment
- **Values**: `development` | `production` | `test`
- **Target**: Production
- **Default**: Automatically set by Vercel to `production`
- **Example**: `production`

#### `NEXT_PUBLIC_SITE_URL`
- **Description**: The public URL where your application is hosted
- **Values**: Full URL including protocol
- **Target**: Production, Preview
- **Required for**: SEO metadata, canonical URLs, Open Graph tags
- **Example**: `https://nexus-visualizer.vercel.app`

### Optional Variables

#### `NEXT_PUBLIC_ANALYTICS_ID`
- **Description**: Analytics service tracking ID (Google Analytics, Plausible, etc.)
- **Target**: Production
- **Example**: `G-XXXXXXXXXX`

#### `SENTRY_DSN`
- **Description**: Sentry error tracking DSN (server-side)
- **Target**: Production, Preview
- **Example**: `https://xxxxx@sentry.io/xxxxx`

#### `NEXT_PUBLIC_SENTRY_DSN`
- **Description**: Sentry error tracking DSN (client-side)
- **Target**: Production, Preview
- **Example**: `https://xxxxx@sentry.io/xxxxx`

## Security Best Practices

### ✅ DO

- ✅ Use `.env.local` for local development secrets
- ✅ Store sensitive values as "Sensitive" in Vercel (they will be encrypted)
- ✅ Use different values for Production, Preview, and Development environments
- ✅ Prefix browser-accessible variables with `NEXT_PUBLIC_`
- ✅ Document all required environment variables in `.env.example`
- ✅ Rotate secrets regularly (API keys, tokens, etc.)
- ✅ Use Vercel's built-in secret management

### ❌ DON'T

- ❌ Commit `.env`, `.env.local`, or `.env.production` files to git
- ❌ Share environment variable values in public channels
- ❌ Use `NEXT_PUBLIC_` prefix for sensitive data (API keys, secrets)
- ❌ Hardcode sensitive values in source code
- ❌ Use production credentials in development environment
- ❌ Store secrets in client-side code

## Troubleshooting

### Variables Not Available in Application

**Problem**: Environment variables are undefined in the application.

**Solutions**:
1. Verify variable names are correct (case-sensitive)
2. Ensure `NEXT_PUBLIC_` prefix for client-side variables
3. Restart development server after changing `.env.local`
4. Redeploy application after updating Vercel environment variables
5. Check that variables are set for the correct environment (Production/Preview)

### Build Failures After Adding Variables

**Problem**: Deployment fails after adding environment variables.

**Solutions**:
1. Check for syntax errors in variable values (no quotes needed in Vercel)
2. Ensure required variables are set for the target environment
3. Review build logs in Vercel dashboard for specific errors
4. Verify variable names match exactly in code and configuration

### Variables Not Loading in Preview Deployments

**Problem**: Environment variables work in production but not in preview deployments.

**Solutions**:
1. Ensure variables are enabled for "Preview" environment in Vercel
2. Check that branch-specific variables are configured correctly
3. Redeploy the preview deployment after updating variables

### NEXT_PUBLIC_ Variables Not Updating

**Problem**: Changes to `NEXT_PUBLIC_` variables don't reflect in the application.

**Solutions**:
1. Clear browser cache and hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
2. Trigger a new deployment (variables are embedded at build time)
3. Verify the variable is set in the correct environment
4. Check browser console for the actual value being used

## Verifying Environment Variables

### In Local Development

Add this to any page to verify variables are loaded:

```typescript
console.log('Site URL:', process.env.NEXT_PUBLIC_SITE_URL);
console.log('Node ENV:', process.env.NODE_ENV);
```

### In Production

1. Open browser DevTools (F12)
2. Go to Console tab
3. Type: `console.log(process.env.NEXT_PUBLIC_SITE_URL)`
4. Server-side variables won't be accessible in the browser

### Using Vercel CLI

List all environment variables for your project:

```bash
vercel env ls
```

Pull current environment variables:

```bash
vercel env pull
```

## Additional Resources

- [Next.js Environment Variables Documentation](https://nextjs.org/docs/basic-features/environment-variables)
- [Vercel Environment Variables Guide](https://vercel.com/docs/concepts/projects/environment-variables)
- [Next.js Security Best Practices](https://nextjs.org/docs/advanced-features/security-headers)

## Support

If you encounter issues not covered in this guide:

1. Check Vercel deployment logs for specific error messages
2. Review Next.js documentation for environment variable behavior
3. Verify `.gitignore` includes `.env*` to prevent accidental commits
4. Ensure all team members have access to required environment variables

---

**Last Updated**: December 2024  
**NEXUS Version**: 0.1.0
