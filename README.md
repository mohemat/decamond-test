Simple Client-Side Authentication (Next.js + TypeScript + Tailwind + shadcn/ui)

This project implements a simple client-side authentication flow using Next.js (App Router), TypeScript, Tailwind CSS, and shadcn/ui.

It is a test assignment with the following flow:

📱 Login page with Iranian mobile number validation

🌐 Calls https://randomuser.me/api/ to fetch mock user data

💾 Stores user info in localStorage

🏠 Dashboard page showing a welcome message and logout button

🚪 Logout clears storage and redirects back to login

🚀 Demo

Live Preview: [Vercel Deployment Link](http://localhost:3000)

Repository: [GitHub Repo Link](https://github.com/mohemat/decamond-test)

📦 Features

✅ Client-side form validation (Iranian mobile formats: 09xxxxxxxxx, +989xxxxxxxxx, 00989xxxxxxxxx)

✅ LocalStorage-based authentication state

✅ Protected dashboard route (redirects to login if not authenticated)

✅ Responsive design (mobile-first) with Tailwind CSS

✅ shadcn/ui components for clean and accessible UI

✅ Accessible inputs and buttons (ARIA attributes, focus styles)

✅ Metadata for SEO and accessibility

Tech Stack

Framework: Next.js 15 (App Router)

Language: TypeScript

Styling: Tailwind CSS + shadcn/ui

Validation: Zod + React Hook Form

API: used [bulletproof-react](https://github.com/alan2207/bulletproof-react) configurations for api-client and react-query

▶️ Getting Started
1. Clone the repo
```bash
git clone https://github.com/mohemat/decamond-test
cd https://github.com/mohemat/decamond-test
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Run the dev server

```bash
npm run dev
```

Open http://localhost:3000

4. Build & deploy

```bash
npm run build
npm start
```

🧩 Flow

User opens Login Page → enters valid Iranian mobile number → clicks Login

API request → save user data (name, email, picture) into localStorage

Redirect to Dashboard → shows "Welcome {Name}"

Click Logout → clears localStorage → redirect back to login

🎨 Accessibility (ARIA)

Inputs use aria-invalid, aria-describedby, and focus-visible styles

Buttons include aria-busy when loading

Proper HTML semantics (<form>, <label>, <button>)

🧹 Quality

Modular, reusable components

Zod for runtime + compile-time validation

Responsive, mobile-first UI

📘 License

This project is for assignment/demo purposes only.