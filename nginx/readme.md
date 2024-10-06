# School app deploy 

## export environments for docker compose

```sh
source ./export_env.sh
```

## startup docker compose

```sh
docker compose up -d 
```

## remove unused containers

```sh
for c in `docker ps --all|awk '{print $1}'|sed -n '1!p'`; do docker rm $c; done
```



