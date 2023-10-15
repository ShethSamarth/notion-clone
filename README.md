# Notion Clone

This is a repository for Fullstack Notion Clone: Next.js 13.5, React, Covex, TailwindCSS, ShadCN UI.

- Key Features:
- Real-time database
- Notion-style editor
- Light and Dark mode
- Infinite children documents
- Trashcan & soft delete
- Authentication
- File upload
- File deletion
- File replacement
- Icons for each document (changes in real-time)
- Expandable sidebar
- Full mobile responsiveness
- Publish your note to the web
- Fully collapsable sidebar
- Cover image of each document
- Recover deleted files

# Final Version

To visit the website, [click here.](https://notion-clone-ss.vercel.app)

### Cloning the repository

```shell
git clone https://github.com/ShethSamarth/notion-clone.git
```

### Install packages

```shell
npm install
```

### Setup .env file

```js
CONVEX_DEPLOYMENT=
NEXT_PUBLIC_CONVEX_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

EDGE_STORE_ACCESS_KEY=
EDGE_STORE_SECRET_KEY=
```

### Setup prisma

```shell
npx convex dev
```

### Start the app

```shell
npm run dev
```

### Production .env

```js
CONVEX_DEPLOY_KEY=
CONVEX_DEPLOYMENT=
NEXT_PUBLIC_CONVEX_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

EDGE_STORE_ACCESS_KEY=
EDGE_STORE_SECRET_KEY=
```
