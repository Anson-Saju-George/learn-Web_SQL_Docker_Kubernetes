# Use the official Ubuntu base image
FROM ubuntu:latest

# Setting tag and name for the image
LABEL version="1.0" \
      description="A simple Docker image that prints Hello, World!" \
      maintainer="Anson Saju George <ansonsaju007@gmail.com>"
# tagname: simple-hello-world


# Set the working directory in the container
WORKDIR /app
# Install necessary packages : vim and curl
RUN apt-get update && apt-get install -y \
    curl \
    vim \
    && rm -rf /var/lib/apt/lists/* \
    apt-get clean
# Create a simple text file to demonstrate the functionality of the container
CMD ["echo", "This is a simple docker image that prints Hello, World!"]
RUN echo "Hello, World!" > /hello.txt

# Hosting the file to a web server at PORT localhost:8080
EXPOSE 8080