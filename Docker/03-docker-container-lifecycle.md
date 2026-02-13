# Docker Container Lifecycle Commands

## 1. Run a new container
Creates and starts a container from an image.

```powershell
docker run -d -p 80:80 --name web_server nginx
````

Output:

```
608a9e710268fb1b3db1af568ae7455ba7e0f2b6360f6df2d0f12e276eb9fbf3
```

---

# Ways to Start Docker Containers

## 2. Start an existing stopped container

```powershell
docker start web_server
```

Start using container ID:

```powershell
docker start <container_id>
```

---

## 3. Start and attach to logs

Runs container and shows output in terminal.

```powershell
docker start -a web_server
```

---

## 4. Restart a container

Stops + starts again.

```powershell
docker restart web_server
```

---

## 5. Start all stopped containers

```powershell
docker start $(docker ps -aq)
```

---

## 6. Run container interactively

Used for debugging.

```powershell
docker run -it nginx bash
```

---

## 7. Run container in background (detached)

```powershell
docker run -d nginx
```

---

## 8. Auto-start container on system reboot

```powershell
docker run -d --restart unless-stopped --name web_server nginx
```

Options:

* no → never restart
* on-failure → restart if crashes
* always → always restart
* unless-stopped → restart unless manually stopped

---

## 9. Check running containers

```powershell
docker ps
```

---

## 10. Check all containers (running + stopped)

```powershell
docker ps -a
```