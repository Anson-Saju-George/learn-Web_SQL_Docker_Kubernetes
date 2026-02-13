# Docker Exec & Container Inspection Commands

## 1. View running containers
```powershell
docker ps
````

Shows:

* CONTAINER ID
* IMAGE
* COMMAND
* CREATED
* STATUS
* PORTS
* NAMES

Example:

```
CONTAINER ID   IMAGE   COMMAND                CREATED         STATUS         PORTS               NAMES
ca96b9ff811d   nginx   "/docker-entrypoint"   3 minutes ago   Up 3 minutes   0.0.0.0:80->80/tcp  web-server
```

---

## 2. Enter a running container (interactive shell)

### Using bash

```powershell
docker exec -it web-server /bin/bash
```

### If bash not available, use sh

```powershell
docker exec -it web-server sh
```

Notes:

* Some lightweight images (Alpine, minimal Nginx) don't include bash
* Always try `/bin/sh` if `/bin/bash` fails

---

## 3. Run a command inside a container

```powershell
docker exec web-server ls
```

Example:

```powershell
docker exec web-server nginx -v
```

---

## 4. Inspect container details

Shows full configuration, mounts, networking, etc.

```powershell
docker inspect web-server
```

---

## 5. View container logs

```powershell
docker logs web-server
```

Follow logs live:

```powershell
docker logs -f web-server
```

---

## 6. Check container processes

```powershell
docker top web-server
```

---

## 7. Check resource usage

```powershell
docker stats
```

For specific container:

```powershell
docker stats web-server
```

---

## 8. Copy files between host and container

Host → container:

```powershell
docker cp file.txt web-server:/usr/share/nginx/html
```

Container → host:

```powershell
docker cp web-server:/usr/share/nginx/html/index.html .
```

---

## 9. Exit container shell

Inside container:

```
exit
```

---

## 10. Stop container

```powershell
docker stop web-server
```

---

## 11. Start container again

```powershell
docker start web-server
```

---

## 12. Remove container

```powershell
docker rm web-server
```

---

## 13. Remove container forcefully

```powershell
docker rm -f web-server
```

Use only if container refuses to stop.

