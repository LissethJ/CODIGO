# Primer dia con Git/Github

Lista de comando de Git

* Para poder ver la version de Git

```bash
git --version
````

* Para configurar el correo

```bash
git config --global user.email "email"
```

* Para poder configurar el username

```bash
git config --global user.name "username"
```


* Para poder empezar a usar el control de versiones git en nuestra carpeta
* Esto solo se hace una vez por carpeta
* Crea la carpeta .git

```bash
git init
```
* Para ver el estado de nuestros cambios

```bash
git status
```
* Agrega los archivos a la memoria de la pc
```bash
git add
```
* Crear el registro degit  los cambios realizados 
```bash
git commit -m "comentario"
```
* Para ver historial de commits 

[ ] git log retorna un `id`con este id vamos a poder ver el detalle de los cambios que se hicieron en ese commit
```bash
git log 
```
* Para poder ver el detalle del commit que hicimos

```bash
git show 
```


