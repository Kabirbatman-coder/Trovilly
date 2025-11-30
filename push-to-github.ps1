# PowerShell script to push code to GitHub
# Replace YOUR_GITHUB_USERNAME with your actual GitHub username
# Replace YOUR_REPO_NAME with your repository name (e.g., trovilly)

$GITHUB_USERNAME = "YOUR_GITHUB_USERNAME"
$REPO_NAME = "YOUR_REPO_NAME"

# Change to project directory
cd "C:\Users\kabir\Desktop\Trovilly"

# Add remote repository (replace the URL with your actual repository URL)
Write-Host "Adding remote repository..." -ForegroundColor Yellow
git remote add origin "https://github.com/$GITHUB_USERNAME/$REPO_NAME.git"

# Rename branch to main (GitHub default)
Write-Host "Renaming branch to main..." -ForegroundColor Yellow
git branch -M main

# Push to GitHub
Write-Host "Pushing code to GitHub..." -ForegroundColor Yellow
git push -u origin main

Write-Host "Done! Your code has been pushed to GitHub." -ForegroundColor Green

