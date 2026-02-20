# Deployment Workflow (Coolify)

Since you are using Coolify, the best way to deploy is through a GitHub connection.

## Step 1: Push Changes to GitHub
Open your terminal and run these commands to save my latest changes and send them to your repo:
```bash
git add .
git commit -m "feat: implement V5 creative itinerary, personalization, and letter"
git push origin main
```

## Step 2: Set up in Coolify
1. Log in to your **Coolify** instance.
2. Go to **Sources** and ensure your GitHub account is connected.
3. Go to **Resources** -> **New Resource** -> **Public Repository** (or Private if it's set to private).
4. Paste your repo URL: `https://github.com/rashidiansanawi/turbo-octo-funicular`
5. Choose **Docker** as the Build Pack (since I've added a `Dockerfile` for you).
6. Set your **Domain** (e.g., `https://anniversary.yourdomain.com`).
7. Click **Deploy**.

## ♻️ Automatic Updates
Yes! Once this is set up, Coolify will automatically update your website every time you push new changes to GitHub.

- If you connected via the **Coolify GitHub App**, it's fully automatic.
- If you used a **Public Repo URL**, you might need to click "Check for Updates" in Coolify or manually trigger a redeploy when you make changes.

Now, any time you want to tweak a photo or add an inside joke, just `git push` and your server will handle the rest!
