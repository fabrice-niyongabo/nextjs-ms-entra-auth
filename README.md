This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

1. First, install all dependencies:
```bash
npm npm install
```

2. Create an auth secret by running the following command (this command will create a .env.local file in your root project):
```bash
npx auth secret
```
3. Within your **.env.local** also add the following environment variables:
```bash
AUTH_MICROSOFT_ENTRA_ID_ID=yourValue
AUTH_MICROSOFT_ENTRA_ID_SECRET=yourValue
AUTH_MICROSOFT_ENTRA_ID_TENANT_ID=yourValue
```

4. Run the project
```bash
npm run dev
```

For more questions and clarifications, write a comment on YouTube.

Happy coding!
