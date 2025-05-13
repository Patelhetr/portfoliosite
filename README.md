# My Portfolio Website

A simple portfolio website containerized with Docker and Podman.

## Running the Website

### Without Containers
Simply checked `index.html` in any web browser to show the output of css and html files.

### Using Docker build the image and containerize it.
1. Build the image: using commands like `docker build -t my-portfolio .`
2. Run the container: run using command `docker run -d -p 8081:80 --name portfolio-container my-portfolio`
3. Open http://localhost:8081 in browser to show final results of portfolio site.

### With Podman
1. start the podman machine using podman machine start command.
2. Build the image: using command `podman build -t my-portfolio .`
3. Run the container: run using `podman run -d -p 8080:80 --name portfolio-container my-portfolio`
4. Open http://localhost:8080 in browser to show output.

## Screenshots
posted the screenshots folder for demonstration of the containerization process.