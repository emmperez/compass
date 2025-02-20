Thanks for the update! Here's the updated README with TypeScript and Tailwind included:

---

# Compass Blog

**Compass** is a wellness blog built using **Next.js**, **TypeScript**, **Tailwind CSS**, and **Sanity**. The blog focuses on providing insightful articles, tips, and resources for well-being, including mental health, fitness, nutrition, and more. It is designed with a clean and modern interface, offering an intuitive user experience.

https://compass-pied.vercel.app/

## Technologies Used

- **Next.js**: A React framework for building server-side rendered (SSR) and static web applications.
- **TypeScript**: A superset of JavaScript that adds static typing, improving code quality and maintainability.
- **GSAP**: A powerful JavaScript library for high-performance animations and transitions.
- **Tailwind CSS**: A utility-first CSS framework for quickly building custom designs.
- **Sanity.io**: A headless CMS that allows content management, flexible schema creation, and easy integration with Next.js.
- **CSS Modules**: Scoped styles to avoid naming conflicts and ensure modular styling across components.

## Features

- Dynamic content management using Sanity
- Customizable schemas for flexible content creation
- Blog post display with detailed view
- Mobile-responsive design using Tailwind CSS
- Clean and minimalist design focusing on readability
- Easy-to-manage and scalable codebase with TypeScript

## Getting Started

To get the project up and running locally, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/emmperez/compass.git
cd compass
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up Sanity

- Create a **Sanity.io** account at [https://www.sanity.io](https://www.sanity.io).
- Set up a new project and obtain your **project ID** and **dataset**.
- In the project root, create a `.env.local` file and add the following configuration:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=<your-sanity-project-id>
NEXT_PUBLIC_SANITY_DATASET=<your-sanity-dataset>
```

### 4. Run the development server

```bash
npm run dev
```

Now, you should be able to view the blog in your browser at [http://localhost:3000](http://localhost:3000).

## Contributing

Feel free to fork the repo and submit pull requests. If you encounter any issues or have suggestions, open an issue in the GitHub repository.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
