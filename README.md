# PenPoint

PenPoint is an article web application similar to Medium, where users can read, like and comment on articles and they can also write articles using Markdown.

## Installation

To get started with PenPoint, follow these steps:

1. Clone the repository:
    ```bash
    git clone git@github.com:MEZ901/PenPoint.git
    ```
2. Install dependencies:
   ```bash
   yarn install
   ```
3. Create environment variables:
   - Make a copy of `.env.example` and rename it to `.env`.
   - Change the values of the environment variables in `.env` to your own values.
    > **Note:** The `.env` file should not be committed to version control (it is already added to the `.gitignore` file). However, the `.env.example` file is committed to version control as a reference for the environment variables.
  
4. Run the development server:
   ```bash
   yarn run dev
   ```
The application will be available at http://localhost:3000.

## Usage

With PenPoint, users can:
- Browse and read articles from various authors.
- Like articles to show appreciation.
- Comment on articles to provide feedback or engage in discussions.
- Add articles to their favorites for quick access.
- Write and publish their own articles.
- Update and manage their published articles.

## File Structure

The PenPoint project has the following file structure:
```
.
├── app/
│   ├── api/
|   ├── layout.tsx
|   ├── page.tsx
├── components/
│   ├── common/
|   ├── home/
├── context/
├── db/
|   ├── database.ts
├── hooks/
├── lib/
|   ├── utilities.ts
├── models/
├── public/
|   ├── assets/
├── styles/
|   ├── abstracts/
|   |   ├── _functions.scss
|   |   ├── _mixins.scss
|   |   ├── _placeholders.scss
|   |   ├── _variables.scss
|   ├── base/
|   |   ├── _reset.scss
|   |   ├── _typography.scss
|   |   ├── _utilities.scss
|   ├── components/
|   |   ├── common/
|   |   ├── home/
|   ├── pages/
|   |   ├── _home.scss
|   ├── main.scss
├── types/
|   ├── global.d.ts
└── ...
```
- `app/`: This folder contains the App Router for Next.js. It includes the `api/` folder for serverless functions, `layout.tsx` for defining a layout component, and `page.tsx` for defining a page component.
- `components/`: This folder contains reusable components that can be used across the application. It includes the `common/` folder for common components, as well as other folders for components specific to a page.
- `context/`: This folder contains the context providers for the application.
- `db/`: This folder contains the database configuration and connection file.
- `hooks/`: This folder contains custom hooks that can be used across the application.
- `lib/`: This folder contains utility files or modules, such as `utilities.ts` with common functions used throughout the application.
- `models/`: This folder contains the data models or schemas defining the structure of the application's data.
- `public/`: This folder contains static assets that can be served by the application.
- `styles/`: This folder contains the SCSS files for styling the application. It includes the `abstracts/` folder for SCSS variables, functions, mixins, and placeholders, the `base/` folder for base styles, the `components/` folder for component-specific styles, and the `pages/` folder for page-specific styles. It also includes the `main.scss` file for importing all the SCSS files.
- `types/`: This folder contains TypeScript declaration files.

## Technologies

PenPoint is built using the following technologies:
- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Sass](https://sass-lang.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
  
## Contributing

Thank you for your interest in contributing to PenPoint! Contributions are welcome and encouraged. To contribute to the project, please follow these steps:
- Fork the repository.
- Create a new branch from `main` and give it a descriptive name.
- Make your changes.
- Commit and push your changes.
- Create a pull request.
- Wait for your pull request to be reviewed and merged.

## License

PenPoint is licensed under the [MIT License](https://opensource.org/license/mit/)

## Contact

If you have any questions or comments, please feel free to reach out to me at [email](mailto:issammez44@gmail.com) or [LinkedIn](https://www.linkedin.com/in/mez901/).
