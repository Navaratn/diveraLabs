# Deverra-Website
# How to run?
- clone the repositry.
- Edit the Path for the Certificates
- type npm i in the terminal.
- then, apt install yarn 
- yarn build 
- install pm2 (npm install -g pm2) 
- pm2 start app.js -n "Deverra Lab Website"

# SEO
- you are enabled to change the title and description of each page (route) in the website that the search engine reads while crawling the website pages.
- Go to the “pages” folder in the project directory.
- select the route you want to update its title or description.
- in the “script” section, go to the head property and change the title attribute.
- inside the “head” also you will find the “meta” property => put your description of the route that you want the search engine to read in the “content” attribute.

# To add vendors 
- go to pages folder, vendors.vue file
- uncomment lines from 16 to 21 in vendors.vue
- search for "add venors", then add vendor as object in the list of ourVendors like this: {icon:"icon_name.svg" , link :"link of the organization"}
- make sure that you put icons of the vendors in this path: assets/images/vendors
- run the following command
 ```
export NODE_OPTIONS=--openssl-legacy-provider
```
- Build the Website
 ```
yarn build
```
- pm2 restart 0 > To reload the website 

 # Google analytics




