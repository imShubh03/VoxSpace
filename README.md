# VoxSpace

VoxSpace is a discussion platform where a user can start a discussion on a selected topic, and multiple users can join the conversation.

## Features

- GitHub authentication with Auth.js
- Create Topics with slug-based URLs
- Create Posts under Topics
- Threaded Comments with replies
- Search across Posts
- Server Actions with Zod validation
- Responsive UI with Tailwind + shadcn/ui

## Tech Stack

- Next.js 15 (App Router), React 19, TypeScript
- NextAuth v5, Prisma Adapter
- Prisma ORM, SQLite
- TailwindCSS, Radix UI, Lucide Icons

## Project Structure

```
src/app/ # Home, topics/[slug], posts/[postId], search
src/actions/ # create-topic, create-post, create-comment, auth
src/components/ # header, posts, comments, topic
prisma/schema.prisma # User, Account, Session, Topic, Post, Comment
```

## Getting Started

```bash
npm install

# .env
DATABASE_URL="file:./dev.db"
GITHUB_CLIENT_ID=xxx
GITHUB_CLIENT_SECRET=xxx
AUTH_SECRET=xxx
AUTH_URL=http://localhost:3000

npx prisma migrate dev
npm run dev
```

Open http://localhost:3000
