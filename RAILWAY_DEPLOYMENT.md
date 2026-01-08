# Railway Deployment Guide

This guide will help you deploy the ClayWorks of Art website to Railway.app.

## Prerequisites

- A Railway.app account
- A Supabase project with the database tables created

## Deployment Steps

### 1. Create Required Supabase Tables

Before deploying, ensure you have created these tables in your Supabase project:

```sql
-- Create challenges table
CREATE TABLE challenges (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  prompt TEXT NOT NULL,
  hashtag TEXT NOT NULL,
  start_date TIMESTAMPTZ NOT NULL,
  end_date TIMESTAMPTZ NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('draft', 'active', 'voting', 'completed')),
  prize_description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create submissions table
CREATE TABLE submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  challenge_id UUID NOT NULL REFERENCES challenges(id) ON DELETE CASCADE,
  user_name TEXT NOT NULL,
  user_email TEXT NOT NULL,
  user_company TEXT,
  submission_type TEXT NOT NULL CHECK (submission_type IN ('video', 'image', 'text')),
  submission_url TEXT,
  submission_text TEXT,
  description TEXT NOT NULL,
  votes_count INTEGER DEFAULT 0,
  featured BOOLEAN DEFAULT FALSE,
  winner BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create votes table
CREATE TABLE votes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  submission_id UUID NOT NULL REFERENCES submissions(id) ON DELETE CASCADE,
  voter_email TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(submission_id, voter_email)
);

-- Create indexes for better performance
CREATE INDEX idx_challenges_status ON challenges(status);
CREATE INDEX idx_submissions_challenge_id ON submissions(challenge_id);
CREATE INDEX idx_submissions_votes_count ON submissions(votes_count DESC);
CREATE INDEX idx_votes_submission_id ON votes(submission_id);
```

### 2. Deploy to Railway

#### Option A: Deploy from GitHub

1. Push your code to GitHub
2. Go to [Railway.app](https://railway.app)
3. Click "New Project"
4. Select "Deploy from GitHub repo"
5. Select your repository
6. Railway will auto-detect the configuration

#### Option B: Deploy using Railway CLI

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login to Railway
railway login

# Link to your project or create new one
railway init

# Deploy
railway up
```

### 3. Configure Environment Variables in Railway

Go to your Railway project settings and add these environment variables:

```env
VITE_SUPABASE_PROJECT_ID=your_project_id
VITE_SUPABASE_URL=https://your_project_id.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=your_anon_key
```

**Important:** Replace the values with your actual Supabase credentials.

### 4. Set Railway Configuration

Railway will automatically detect the `railway.json` file and use these settings:

- **Build Command:** `npm ci && npm run build`
- **Start Command:** `npm start`
- **Port:** Railway will set `$PORT` automatically (served by the `serve` package)

### 5. Enable Domain

1. Go to your Railway project settings
2. Click on "Settings" → "Domains"
3. Click "Generate Domain" or add a custom domain

## Troubleshooting

### Build Fails

**Error:** `npm ci` fails
- **Solution:** Make sure `package-lock.json` is committed to your repository

**Error:** TypeScript errors during build
- **Solution:** Run `npm run build` locally to fix TypeScript errors first

### Deployment Fails to Start

**Error:** Application crashes on start
- **Solution:** Check Railway logs. Make sure the `dist` folder was created during build

**Error:** "Cannot find module 'serve'"
- **Solution:** Make sure `serve` is in dependencies (not devDependencies) in package.json

### Environment Variables Not Working

**Error:** Supabase connection fails
- **Solution:**
  1. Check that all `VITE_` prefixed env vars are set in Railway
  2. Restart the deployment after adding env vars
  3. Vite requires the `VITE_` prefix for env vars to be exposed to the client

### Port Issues

**Error:** Application not accessible
- **Solution:** The `serve` package will automatically use Railway's `$PORT` variable. No changes needed.

### Routing Issues (404 on Refresh)

**Error:** Page refreshes return 404
- **Solution:** The `serve` package is configured with SPA fallback by default. If issues persist, update the start script:

```json
"start": "serve dist -l $PORT --single"
```

## Post-Deployment

### Add Your First Challenge

Use the Supabase dashboard to add a test challenge:

```sql
INSERT INTO challenges (title, description, prompt, hashtag, start_date, end_date, status, prize_description)
VALUES (
  'GTM Automation Quick Win',
  'Share your best GTM automation hack',
  'What is one automation you implemented that saved you the most time? Share your approach, tools used, and results.',
  '#ClayWorksGTMChallenge',
  NOW(),
  NOW() + INTERVAL '5 days',
  'active',
  'Featured in our newsletter + 30-min free consultation'
);
```

### Monitor Your Deployment

- **Logs:** Check Railway logs for any runtime errors
- **Metrics:** Monitor CPU and memory usage in Railway dashboard
- **Database:** Check Supabase logs for query performance

## Updating Your Deployment

Whenever you push to your connected GitHub branch, Railway will automatically:
1. Pull the latest code
2. Run the build command
3. Deploy the new version
4. Zero-downtime deployment

## Cost Optimization

- Railway offers a generous free tier
- After free tier, you pay for:
  - CPU usage
  - Memory usage
  - Network bandwidth
- Expected cost for this static site: **$0-5/month** (within free tier)

## Support

If you encounter issues:
1. Check Railway logs: `railway logs`
2. Check this guide's troubleshooting section
3. Railway Discord: [https://discord.gg/railway](https://discord.gg/railway)
4. Railway Docs: [https://docs.railway.app](https://docs.railway.app)
