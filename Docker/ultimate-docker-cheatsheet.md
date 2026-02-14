# ULTIMATE DOCKER CHEATSHEET
Complete CLI reference + real-world workflows

------------------------------------------------------------
CORE CONCEPTS
------------------------------------------------------------

Image = blueprint
Container = running instance of image
Dockerfile = instructions to build image
Registry = image storage (Docker Hub, GHCR)
Volume = persistent storage
Network = container communication layer

------------------------------------------------------------
BASIC COMMAND STRUCTURE
------------------------------------------------------------

docker [OPTIONS] COMMAND

Global options come BEFORE command:
docker --config <path> run nginx

------------------------------------------------------------
MOST USED COMMANDS
------------------------------------------------------------

docker run        Create & start container
docker exec       Run command in running container
docker ps         List containers
docker build      Build image from Dockerfile
docker pull       Download image
docker push       Upload image
docker images     List images
docker login      Login to registry
docker logout     Logout
docker search     Search Docker Hub
docker version    Docker version
docker info       System info

------------------------------------------------------------
CONTAINER COMMANDS
------------------------------------------------------------

Run container
docker run nginx

Run in detached mode
docker run -d nginx

Run with name
docker run --name web nginx

Run with port mapping
docker run -p 8080:80 nginx

Run with environment variables
docker run -e NODE_ENV=production nginx

Run interactive
docker run -it ubuntu bash

Run with volume
docker run -v $(pwd):/app nginx

Auto restart
docker run --restart unless-stopped nginx

------------------------------------------------------------
LIST CONTAINERS
------------------------------------------------------------

Running only
docker ps

All containers
docker ps -a

Only IDs
docker ps -q

------------------------------------------------------------
START / STOP / REMOVE
------------------------------------------------------------

Start container
docker start container_name

Stop container
docker stop container_name

Restart
docker restart container_name

Remove container
docker rm container_name

Force remove
docker rm -f container_name

Remove all containers
docker rm $(docker ps -aq)

Stop all containers
docker stop $(docker ps -q)

------------------------------------------------------------
EXEC INTO CONTAINER
------------------------------------------------------------

docker exec -it container /bin/bash
docker exec -it container /bin/sh

Run command inside
docker exec container ls

------------------------------------------------------------
LOGS & DEBUGGING
------------------------------------------------------------

docker logs container
docker logs -f container
docker top container
docker stats
docker inspect container

------------------------------------------------------------
IMAGE COMMANDS
------------------------------------------------------------

List images
docker images

Build image
docker build -t app .

Build specific Dockerfile
docker build -f Dockerfile.dev -t app .

Remove image
docker rmi image_name

Force remove
docker rmi -f image_name

Tag image
docker tag image repo/image:tag

History
docker history image

Save image
docker save image > image.tar

Load image
docker load < image.tar

------------------------------------------------------------
DOCKERFILE KEY INSTRUCTIONS
------------------------------------------------------------

FROM        base image
RUN         execute command
CMD         default command
ENTRYPOINT  fixed startup command
COPY        copy files
ADD         copy + extract
WORKDIR     set working directory
ENV         environment variable
EXPOSE      container port
VOLUME      persistent storage

------------------------------------------------------------
REGISTRY COMMANDS
------------------------------------------------------------

Login
docker login

Push image
docker push repo/image:tag

Pull image
docker pull nginx:latest

Search
docker search nginx

------------------------------------------------------------
VOLUME COMMANDS
------------------------------------------------------------

Create volume
docker volume create myvol

List volumes
docker volume ls

Inspect
docker volume inspect myvol

Remove volume
docker volume rm myvol

------------------------------------------------------------
NETWORK COMMANDS
------------------------------------------------------------

List networks
docker network ls

Create network
docker network create mynet

Connect container
docker network connect mynet container

Inspect
docker network inspect mynet

------------------------------------------------------------
SYSTEM CLEANUP
------------------------------------------------------------

Remove unused containers
docker container prune

Remove unused images
docker image prune

Remove everything unused
docker system prune

Remove volumes too
docker system prune -a --volumes

------------------------------------------------------------
ADVANCED CONTAINER MGMT
------------------------------------------------------------

Pause container
docker pause container

Unpause
docker unpause container

Kill container
docker kill container

Rename container
docker rename old new

Update config
docker update --memory 512m container

Wait until stop
docker wait container

------------------------------------------------------------
FILE OPERATIONS
------------------------------------------------------------

Copy host → container
docker cp file.txt container:/path

Copy container → host
docker cp container:/path/file.txt .

------------------------------------------------------------
RESOURCE MONITORING
------------------------------------------------------------

Live stats
docker stats

Limit memory
docker run -m 512m nginx

Limit CPU
docker run --cpus="1.5" nginx

------------------------------------------------------------
SWARM COMMANDS
------------------------------------------------------------

docker swarm init
docker swarm join
docker service create
docker service ls
docker node ls

------------------------------------------------------------
COMPOSE COMMANDS
------------------------------------------------------------

docker compose up
docker compose up -d
docker compose down
docker compose build
docker compose logs
docker compose ps

------------------------------------------------------------
BUILDX COMMANDS
------------------------------------------------------------

docker buildx create
docker buildx build
docker buildx ls

Multi-arch build
docker buildx build --platform linux/amd64,linux/arm64 .

------------------------------------------------------------
IMAGE VERSIONING BEST PRACTICE
------------------------------------------------------------

Use:
nginx:1.27.0

Avoid:
nginx:latest

------------------------------------------------------------
PRODUCTION WORKFLOW
------------------------------------------------------------

1. Write Dockerfile
2. Build image
docker build -t app:v1 .

3. Run locally
docker run -p 3000:3000 app:v1

4. Tag
docker tag app:v1 repo/app:v1

5. Push
docker push repo/app:v1

6. Deploy via:
- Nginx
- Kubernetes
- Docker Compose

------------------------------------------------------------
GPU COMMANDS
------------------------------------------------------------

Run with GPU
docker run --gpus all image

Specific GPU
docker run --gpus '"device=0"' image

------------------------------------------------------------
DEBUGGING CHECKLIST
------------------------------------------------------------

Container not starting?
docker logs container

Port not working?
docker ps

Image issue?
docker images

Resource issue?
docker stats

Network issue?
docker network inspect

------------------------------------------------------------
IMPORTANT FLAGS
------------------------------------------------------------

-d          detached
-it         interactive
-p          port mapping
-v          volume
-e          env variable
--name      container name
--restart   restart policy
--rm        auto remove
-f          force
-q          quiet
-a          all

------------------------------------------------------------
MOST IMPORTANT COMMANDS TO MASTER
------------------------------------------------------------

docker run
docker build
docker exec
docker ps
docker logs
docker stop
docker rm
docker images
docker rmi
docker compose up
docker system prune

------------------------------------------------------------
END OF CHEATSHEET
------------------------------------------------------------
