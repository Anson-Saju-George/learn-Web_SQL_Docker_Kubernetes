# Docker Nginx Container Test (WSL/Windows)

## 1. Run Nginx container
```powershell
docker run -d -p 8080:80 --name web-server nginx
````

Output:

```
e80087de9c98aabf1c380426ecbb3ca643d4ec2a77d07e60524af56e9e09d9a9
```

---

## 2. Verify container is running

```powershell
docker ps
```

Output:

```
CONTAINER ID   IMAGE     COMMAND                  CREATED          STATUS          PORTS                                     NAMES
e80087de9c98   nginx     "/docker-entrypoint.…"   19 seconds ago   Up 21 seconds   0.0.0.0:8080->80/tcp, [::]:8080->80/tcp   web-server
```

---

## 3. Test Nginx using curl

```powershell
curl http://localhost:8080
```

PowerShell warning appears about script execution risk. Continue with **Y**.

Response:

* StatusCode: 200 (OK)
* HTML content returned: Nginx welcome page

Key headers:

```
Content-Type: text/html
Content-Length: 615
```

---

## 4. Stop the container

```powershell
docker stop web-server
```

Output:

```
web-server
```

---

## 5. Confirm container stopped

```powershell
docker ps
```

Output:

```
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES
```

No running containers listed.

```

If this is for a lab/portfolio, don’t dump raw terminal logs next time—structure it like this from the start. It shows you understand what happened, not just that you typed commands.
```
