# Dtac SME - ClientSide


This project uses Next.js as front-end service to serve web pages to users and uses .Net core as gateway to connect to another service. This's gonna be awesome!


### Content
- client side (based on [Splendith/next.js-boilerplate](https://github.com/Splendith/next.js-boilerplate))


### How to develope
Firstly, to run this front-end project, you can use commands to run it in develope mode. If you want to change this front-end project config, go to `./src/DtacSme.ClientSide/server/config.js`.
```
# assume that you're at the root of git directory
cd ./src/DtacSme.ClientSide;

# install  dependencies
yarn install;

# run dev mode
yarn dev;
```
For the Api project, the config's in `./src/DtacSme.Api/appsettings.json` and you may need to consider `./src/DtacSme.Api/Properties/launchSettings.json` for lauching profile.


:tada: Now, everything's set up. Enjoy hack it! :grin:


### How to run on production
For the front-end project
```
# assume that you're at the root of git directory
cd ./src/DtacSme.ClientSide;

# install  dependencies
yarn install;

# build it
yarn build;

# run it
yarn start;
```

### How it works
I work hard to make components reusable and react to data. So you may see directory `/data` in client side project that's hard-coded a data that drives the whole UI of website. And also, the data model on backend is driven by view-model that we use in the front-end framework. We try to make it seamlessly integrate between these two systems. One more thing, I have too much coffee that I even have a day to make this project done.


### Simple view of architect
```

    <user> <-> <font-end> <-> <api> -> <authentication service>
                                    -> <database>

```


---
Brew with :coffee: + :heart: by :sheep:.
