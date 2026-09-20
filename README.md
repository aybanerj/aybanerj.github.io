# Hands-On Data Engineering

A personal blog by Ayushi Banerjee.

---

## File Structure

```
site/
├── index.html                  ← Homepage
├── about.html                  ← About page
├── blog.html                   ← Blog index (all posts)
├── assets/
│   ├── style.css               ← Global styles
│   └── images/
│       ├── footer.png    ← Footer bar image
│       ├── star.png     ← Nav logo / sidebar
│       └── cybersigilism.png   ← Hero & sidebar sigil
└── posts/
    └── data-migration.html   ← Sample post
```

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
- [ ] Replace placeholder "Coming soon" cards from `index.html` and `blog.html`
