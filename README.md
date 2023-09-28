# Photo Gallery Filter in ReactJS


The Photo Gallery Filter in ReactJS is a web application that allows users to view and filter a collection of photos based on predefined categories. This project is built using the ReactJS library, making it a modern and responsive web application. This README provides an in-depth explanation of the project, its key features, how to set it up on your local machine, and other relevant details. This project is a simple photo gallery application built using ReactJS. It allows users to browse a collection of photos and filter them based on predefined categories. This README provides an overview of the project, its features, and instructions on how to set it up and run it on your local machine.

## Features

- Display a collection of photos.
- Filter photos based on predefined categories.
- Responsive design for various screen sizes.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your development machine.
- Basic knowledge of ReactJS.

## Installation

To set up this project, follow these steps:

1. Clone the repository to your local machine using Git:

   ```bash
   git clone git@github.com:devgeek2700/Photo-Gallery-in-ReactJs.git
   ```

2. Navigate to the project directory:

   ```bash
   cd photo-gallery-filter-in-reactjs
   ```

3. Install the project dependencies using npm:

   ```bash
   npm install
   ```

## Usage

To run the project locally, use the following command:

```bash
npm start
```

This will start the development server, and you can access the application in your web browser at `http://localhost:3000`.

## Demo

## All Category

![App Screenshot](https://github.com/devgeek2700/Photo-Gallery-in-ReactJs/blob/master/public/1.png?raw=true)

## Category 1

![App Screenshot](https://github.com/devgeek2700/Photo-Gallery-in-ReactJs/blob/master/public/2.png?raw=true)
 
## Category 2

![App Screenshot](https://github.com/devgeek2700/Photo-Gallery-in-ReactJs/blob/master/public/3.png?raw=true)

## Category 3

![App Screenshot](https://github.com/devgeek2700/Photo-Gallery-in-ReactJs/blob/master/public/4.png?raw=true)

## Category 4

![App Screenshot](https://github.com/devgeek2700/Photo-Gallery-in-ReactJs/blob/master/public/5.png?raw=true)

## Category 5

![App Screenshot](https://github.com/devgeek2700/Photo-Gallery-in-ReactJs/blob/master/public/6.png?raw=true)

## Configuration

You can customize the photo categories and images by modifying the `src/data/photos.js` file. Simply update the data in the format provided.

```javascript
const Menu = [
    {
        id: 1,
        image: "https://cdn.pixabay.com/photo/2017/03/13/13/39/pancakes-2139844_1280.jpg",
        name: "Pancakes",
        category: "Breakfast",
        price: "$2.95",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, repellendus?",
    },
  // Add more photos here
];
```

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b feature/your-feature-name`.
3. Commit your changes and push to your branch: `git commit -m 'Add some feature' && git push origin feature/your-feature-name`.
4. Submit a pull request, explaining the changes you've made and why they should be merged.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [React](https://reactjs.org/)
- [Create React App](https://reactjs.org/docs/create-a-new-react-app.html)

Thank you for using and contributing to the Photo Gallery Filter in ReactJS project!
