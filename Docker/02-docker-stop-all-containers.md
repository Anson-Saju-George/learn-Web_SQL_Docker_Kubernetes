# Stop All Running Docker Containers

## 1. Check running containers

```powershell
docker ps
```

Output:

```
CONTAINER ID   IMAGE     COMMAND                  CREATED              STATUS              PORTS     NAMES
4c006ee7fe86   nginx     "/docker-entrypoint.…"   About a minute ago   Up About a minute   80/tcp    relaxed_agnesi
fa6a41074a63   nginx     "/docker-entrypoint.…"   About a minute ago   Up About a minute   80/tcp    relaxed_beaver
cfea09505de4   nginx     "/docker-entrypoint.…"   About a minute ago   Up About a minute   80/tcp    eloquent_gould
d478a571108f   nginx     "/docker-entrypoint.…"   About a minute ago   Up About a minute   80/tcp    peaceful_davinci
119bc7354160   nginx     "/docker-entrypoint.…"   About a minute ago   Up About a minute   80/tcp    elastic_booth
80b0c3d32f1d   nginx     "/docker-entrypoint.…"   About a minute ago   Up About a minute   80/tcp    affectionate_payne
```

---

## 2. Stop all running containers

```powershell
docker stop $(docker ps -q)
```

Output:

```
4c006ee7fe86
fa6a41074a63
cfea09505de4
d478a571108f
119bc7354160
80b0c3d32f1d
```

---

## 3. Verify no containers are running

```powershell
docker ps
```

Output:

```
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES
```

All running containers have been successfully stopped.
