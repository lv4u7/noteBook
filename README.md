# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## Getting Started

### Clone the Repository

```bash
git clone https://github.com/your-username/your-project.git
cd your-project
```

### Install Dependencies

This project supports two official plugins: [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) and [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc).

Choose one of the following options to install the desired plugin:

#### Using Babel (Fast Refresh with `@vitejs/plugin-react`)

```bash
npm install
```

#### Using SWC (Fast Refresh with `@vitejs/plugin-react-swc`)

```bash
npm install --legacy-peer-deps
```

Note: `--legacy-peer-deps` is required for now due to compatibility issues.

## Running the Project

### Start the Backend Server (Assuming you have Node.js installed)

if nodeJS not installed you can visit the official site of nodeJS and download the latest version 

```bash
npm install -g nodemon  # Install nodemon globally if not already installed
nodemon server.js
```

The backend server will be running at [http://localhost:5000](http://localhost:5000).

### Start the Frontend Development Server

```bash
npm run dev
```

The frontend development server will be running at [http://localhost:5173](http://localhost:5173).

Open your browser and navigate to [http://localhost:5173](http://localhost:5173) to see your React application in action.



## Contributing

Feel free to contribute to this project by creating issues or pull requests.

Happy coding!
