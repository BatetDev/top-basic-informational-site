# Basic Informational Site

A small Express server built as part of The Odin Project's Node course.

## Routes

| Path          | Page                  |
| ------------- | --------------------- |
| `/`           | index.html            |
| `/about`      | about.html            |
| `/contact-me` | contact-me.html       |
| anything else | 404.html (status 404) |

## Run locally

```bash
npm install
npm run dev
```

**Note:** `npm run dev` runs `app.js` with `node --watch`. The server listens on port 3000; set the `PORT` environment variable to override it.
