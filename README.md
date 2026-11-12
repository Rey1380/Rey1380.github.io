# Reyhaneh Farahmand: personal website (Calgary & Rockies design)

Source for **https://rey1380.github.io**. Plain HTML, CSS and a little JavaScript: no build step, nothing to install.

Illustration of the Calgary skyline (Calgary Tower, The Bow, Brookfield Place) in front of the Canadian Rockies; glacier-teal links.

## Publish on GitHub Pages

1. Sign in to GitHub as **Rey1380** and create a **public** repository named exactly **`Rey1380.github.io`**.
2. Upload *everything inside this folder* (not the folder itself): `index.html`, `404.html`, `assets/`, `.nojekyll`, `robots.txt`, `sitemap.xml`, `README.md`.
   `.nojekyll` is hidden: on macOS press <kbd>Cmd</kbd>+<kbd>Shift</kbd>+<kbd>.</kbd> in Finder; on Windows turn on *View → Hidden items*.
3. **Settings → Pages → Build and deployment**: Source **Deploy from a branch**, Branch **`main`**, folder **`/ (root)`**, **Save**.
4. After 1–2 minutes (the **Actions** tab shows a green check), open **https://rey1380.github.io**.

If GitHub shows "There isn't a GitHub Pages site here", the repository is private, named differently, or Pages isn't switched on (step 3).

## Editing

All text is in `index.html`, in sections with these ids: `about`, `research`, `projects`, `background`, `skills`, `contact`.

| To change | Do this |
|---|---|
| Photo | Replace `assets/img/profile.jpg` with a square image (at least 440 × 440 px), same file name. |
| Résumé | Replace `assets/cv/Reyhaneh_Farahmand_Resume.pdf`, same file name. |
| Add a publication | Copy the `<li>…</li>` inside `<ol class="pubs">`. |
| Add a project | Copy one `<div class="entry">…</div>` inside `#projects`. |
| Add a job or degree | Copy one `<li>…</li>` inside `<ol class="timeline">`. |
| Colours | Edit the variables at the top of `assets/css/style.css`. |

## Notes

- Responsive from phones to wide screens; the menu highlights the section you are reading.
- Accessible markup (skip link, landmarks, keyboard focus, WCAG AA colour contrast), print stylesheet and a custom 404 page.
- Search and sharing: page description, `sitemap.xml`, schema.org `Person` data, and a link-preview image (`assets/img/og-card.jpg`).
- Your phone number is not on the page (public pages get scraped for spam); it remains in the PDF résumé.

## Credits

- Font: [Manrope](https://github.com/sharanda/manrope), SIL Open Font License 1.1 (license file in `assets/fonts/`).
- GitHub and Google Scholar icons: [Simple Icons](https://simpleicons.org/) (CC0).
- Illustration and favicon: original artwork made for this site.
