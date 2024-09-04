# Frontend Project

This is a React frontend for [Span](span.io) technical interview. I have chosen the following tools and libraries to create a robust, efficient, and maintainable user interface. Below you'll find instructions on how to get started, along with an explanation of the packages used and why they were chosen.

## Getting Started

### Prerequisites

Make sure you have [pnpm](https://pnpm.io/installation) installed. PNPM is a fast, disk space-efficient package manager. Follow the installation instructions on the PNPM website to install it for your system.

### Installation

To install the project's dependencies, run the following command in your terminal:

```bash
pnpm install
```

This will install the required packages and start the development server at the specified local URL.

## Running the Project

Once you’ve installed the dependencies, start the development server, run the following command in your terminal::

```bash
pnpm run dev
```

open your browser and navigate to the development URL displayed in the console.

## Packages Used

### 1. [Material-UI (MUI)](https://mui.com/)

- **Purpose**: MUI is used for both styling and providing a set of ready-to-use, customizable components.
- **Why**: It significantly reduces the amount of time spent on designing and styling elements, while providing a sleek and modern look for your application.

### 2. [Axios](https://axios-http.com/)

- **Purpose**: Axios is used to make HTTP requests to APIs, handle responses, and manage errors.
- **Why**: Axios simplifies the process of sending requests and managing responses in a more readable and concise manner than using the native `fetch` API. It also includes automatic conversion of JSON data and easier error handling.

### 3. [@tanstack/react-query](https://tanstack.com/query/latest)

- **Purpose**: React Query acts as an abstraction layer between Axios and the components that use the fetched data. It also offers client-side caching, which helps in managing and reusing data.
- **Why**: It helps with data fetching, synchronization, and caching, making the application more efficient and providing automatic refetching, background synchronization, and cache updates without the need for manual state management. React Query ensures the app remains responsive and efficient, especially when dealing with remote data.

### 4. [react-hook-form](https://react-hook-form.com/)

- **Purpose**: React Hook Form is used to manage form state and handle form validation.
- **Why**: This library simplifies form creation by managing the state of form inputs while providing better performance and a cleaner API. It’s lightweight and helps manage complex form interactions with minimal re-renders, improving overall efficiency.

### 5. [react-router-dom](https://reactrouter.com/)

- **Purpose**: React Router DOM is used to set up and manage routing in the application.
- **Why**: It provides a simple way to define routes and handle navigation within the React app, making it easy to build Single Page Applications (SPA). With features like dynamic routing, nested routes, and route protection, it simplifies navigation while providing flexibility.

### 6. [Yup](https://github.com/jquense/yup)

- **Purpose**: Yup is used as a schema builder for runtime value parsing and validation.
- **Why**: Yup provides expressive, chainable validations that allow you to define complex rules for form input validation. It integrates seamlessly with `react-hook-form`, making it easy to validate and transform user input before it is processed by the application.
