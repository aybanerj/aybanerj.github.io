# Hands-On Data Engineering
### ayushi-banerjee.github.io

A personal blog by Ayushi Banerjee. Built with plain HTML/CSS/JS — no framework, no build step.

---

## File Structure

```
site/
├── index.html                  ← Homepage
├── about.html                  ← About page
├── blog.html                   ← Blog index (all posts)
├── assets/
│   ├── style.css               ← Global styles (edit here for theme changes)
│   └── images/
│       ├── footer.png    ← Footer bar image
│       ├── star.png     ← Nav logo / sidebar
│       ├── chrome-fluid.png    ← (available for use)
│       └── cybersigilism.png   ← Hero & sidebar sigil
└── posts/
    └── data-migration.html   ← Sample post
```

---

## Deploying to GitHub Pages

### Step 1 — Create a GitHub repository
1. Go to [github.com/new](https://github.com/new)
2. Name it **exactly**: `yourusername.github.io` (replace `yourusername` with your actual GitHub username)
3. Set it to **Public**
4. Click **Create repository**

### Step 2 — Push your site files
In your terminal:

```bash
# Navigate to the site folder
cd path/to/site

# Initialize git
git init

# Add all files
git add .

# First commit
git commit -m "Initial site"

# Connect to GitHub (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io.git

# Push
git push -u origin main
```

### Step 3 — Enable GitHub Pages
1. Go to your repo on GitHub → **Settings** → **Pages**
2. Under **Source**, select **Deploy from a branch**
3. Choose **main** branch, **/ (root)** folder
4. Click **Save**

Your site will be live at `https://yourusername.github.io` within ~1 minute.

### Custom domain (optional)
If you have a domain (e.g. `ayushibanerjee.com`):
1. In **Settings → Pages**, enter your domain under **Custom domain**
2. Add a `CNAME` record at your DNS provider pointing to `yourusername.github.io`

---

## Writing a New Post

1. **Duplicate** `posts/data-migration.html`
2. **Rename** it (e.g. `posts/dbt-at-scale.html`)
3. **Update** these fields at the top:
   - `<title>` tag
   - `<meta name="description">`
   - Post number, title, date, category, read time
   - TOC links (the `href="#..."` and text)
   - The post body content
4. **Add it to `blog.html`**: copy one of the `<a class="post-row">` blocks and update the fields
5. **Add a card to `index.html`**: copy one of the `.blog-card` divs

### Post checklist
- [ ] Update `<title>` and meta description
- [ ] Set the correct `data-category` on the post row in `blog.html`
- [ ] Update post number (sequential)
- [ ] Set heading `id` attributes to match TOC links
- [ ] Remove placeholder "Coming soon" cards from `index.html` and `blog.html` as you publish

---

## Customising the Theme

All theme variables are in `assets/style.css` at the top:

```css
:root {
  --bg: #080809;              /* main background */
  --text-primary: #e2def8;    /* headings */
  --iri-start: #a8a4e0;       /* iridescent gradient start */
  --iri-mid2:  #9dd8e8;       /* iridescent gradient mid */
  ...
}
```

### Swapping images
Replace any file in `assets/images/` with your own PNG and keep the same filename. Images used:
- **footer.png** → footer bar (tiled horizontally)
- **star.png** → nav logo icon + about sidebar
- **cybersigilism.png** → hero background + post sidebar decor

### Adding your photo (About page)
In `about.html`, find the `avatar-ring` div and replace the placeholder with:
```html
<img src="assets/images/avatar.jpg" style="width:100%;height:100%;object-fit:cover;">
```

---

## Updating Social Links

Search for `yourusername` across all files and replace with your actual handles. Links to update:
- GitHub: `https://github.com/yourusername`
- LinkedIn: `https://linkedin.com/in/yourusername`
- Email: `you@email.com` (in `about.html`)
