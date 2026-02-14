# Basic Dockerfile Example

## Example Dockerfile

```dockerfile
FROM ubuntu:latest
CMD ["echo", "Hello this is my first image!"]
````

---

## Explanation

### FROM ubuntu:latest

* Defines the base image.
* Docker pulls the Ubuntu image from Docker Hub.
* All containers built from this Dockerfile start from this environment.

### CMD ["echo", "Hello this is my first image!"]

* Default command executed when the container starts.
* Prints the message to the terminal.
* Runs only if no other command is provided at runtime.

---

## Build the Docker Image

```bash
docker build -t my-first-image .
```

* `-t` → tag name for the image
* `.` → Dockerfile location (current directory)

---

## Run the Container

```bash
docker run my-first-image
```

Output:

```
Hello this is my first image!
```

---

## View Built Images

```bash
docker images
```

---

## Remove Image (optional)

```bash
docker rmi my-first-image
```

---

## Key Learning

* Dockerfile defines how an image is built.
* Image = blueprint.
* Container = running instance of that image.

