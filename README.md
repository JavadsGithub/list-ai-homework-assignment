# List AI Homework Assignment

This is an applications using Next.js 14 (app directory).

## Technologies Used

- [Next.js 14](https://nextjs.org/docs/getting-started)
- [TypeScript](https://www.typescriptlang.org/)
- [NextUI 2](https://nextui.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Styled Components](https://styled-components.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Axios](https://axios-http.com/docs/intro)
- [Tanstack Query v5](https://tanstack.com/query/latest/docs/framework/react/overview)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Hook Form](https://www.react-hook-form.com/)

## Getting Started

### Hints

- Axios + Tanstack Query used for handling `api calls` and creating custom `controller hooks`.

  - Authentication & token refresh mechanism implemented using axios instance in `lib/api/client.api.ts`.
  - Routes are `protected` using middleware in `src/middleware.ts`.
  - `SSR` example in `"/books/:id"` route.
  - `CSR` & `Token Refresh` example in `UserDetails` component.

- `Tailwindcss` is a dependency for `NextUI` but `styled-components` used as main style-engine. (unfortunately not available for RSCs)

### install dependencies:

```bash
npm install
# or
yarn
```

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
