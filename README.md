# pokemon-gallery

a gallery where you can view some Pokémon's and catch them 
- DEMO :https://pokedex-test-tap.herokuapp.com/

## **The Problem** :no_entry_sign: :-

- it is hard to catch pokemons and to view there info in a web site that saves the data for me and my friends 
- TAP program assaignment 1 week o :
- front-end
![image](https://user-images.githubusercontent.com/37113946/124356359-4fbf5180-dc1e-11eb-9440-27c1d5523f14.png)
- back-end
![image](https://user-images.githubusercontent.com/37113946/124356535-294de600-dc1f-11eb-8ff8-5c018150ce45.png)

## **The solution** :bulb: :-

- create a simple website with pure HTML/JS 

## **User Stories**  :books: 

- As a USER, I want a display to all the pokemons in one place .
- As a USER, I want to be able to search for any pokemon by name .
- As a USER, I want to be able search for pokemons by thier number on wiki.
- As a USER, I want to view five random pokemons every time i open the site.

## **How to Launch App Locally** :-

*  clone this repo

*  Run `yarn` to install the packages for the app as general.

### Database Setup  :clipboard:

make sure you have installed PostgreSQL and pgcli 

```sql=
CREATE DATABASE {database name};
CREATE USER {user name} WITH superuser password {password}
ALTER DATABASE {database name} OWNER TO {user name};
```
- Test DB:
- Do the same as before but make sure to change the names.

* Run the following command  
`yarn build:db`

### **Environment variables:**
Environment variables are one of the ways we keep our product safe. If you want to access our app locally you will need to add your own.
- create .env file
- add your Environment variables
```sh
DATABASE_URL= # Your production PostgreSQL connect
PORT= #port number
```

### Start the App :electric_plug:

To start the App Locally you can start the server First then start client-side or vice versa!
> To run Server, In your terminal Type: 

    `yarn dev` then you should be able to go to [localhost](http://localhost:(your port here)/) 


Now you can view the app live in the Browser!

## **Technologies** :computer: :-

- BackEnd: **Node JS & Express JS**
- FrontEnd: **pure html & js**
- Database: **PostgreSQL**
- Styling: **CSS**
