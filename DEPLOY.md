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

## Why Docker?
I've added a `Dockerfile` and `nginx.conf` because it handles the static assets and routing more reliably than a standard "Static" build pack, and it allows for easier caching of your beautiful nature photos.
