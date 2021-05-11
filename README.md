# Upcloud-internship-taskl
Upcloud Internship Task
---
##### Run the server on localhost:3000

---
### Rest Api Documentation

##### TASK:
> - Name of user
> - image of user
> - contact Number of the user (with Validation)
> - email user (with validation)
> - address user
---
### Add user
##### POST

``
localhost:3000/adduser
``

##### Form Data
> -  name
> -  email
> -  contact
> -  profile (image size limit 1mb and jpg,jpeg,png extensions only)
---
### GET user details
##### GET

```
localhost:3000/users
```
---
### GET profile image (copy url to browser to view the image)
##### GET

```
localhost:3000/img
```
---
### Update user
##### PATCH

``
localhost:3000/users
``

##### Query Params

> -  email (to find user to update) 
> -  feilds to update

---
### Delete user
##### DELETE

``
localhost:3000/users
``

##### Query Params

> -  email (to find user to delete) 
