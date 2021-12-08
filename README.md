# Box JWT App Auth Example with Box SDK, Next.JS, SWR, & TailwindCSS

Usually utilized for server auth (machine-to-machine) with a service account. Find the official 
documentation [here](https://developer.box.com/guides/authentication/jwt/).

---

## Walkthrough

1. Go to developer.box.com and create a new custom app. Select **Server Authentication (with JWT)**, give it a name 
   and select **Create App**
2. Under the `Configuration` tab, give the app `App + Enterprise Access`
3. [Authorize the app](https://developer.box.com/guides/authorization/custom-app-approval/) 
4. Create Public/Private Keypair through the developer console and rename to/add the `config.json` to the root of your 
   app (DO NOT UPLOAD THIS TO SOURCE CONTROL **EVER**)
5. In a terminal, run `npx create-next-app -e with-tailwindcss` and follow the steps to set up your initial app
6. Navigate into the app root, and run `npm i box-node-sdk`. Official documentation can be found [here](https://github.com/box/box-node-sdk). We'll be using the steps for the [App Auth Client](https://github.com/box/box-node-sdk#app-auth-client)
7. Run with `npm run dev` and the app will load on `localhost:3000`

## Use case

You should be able to query the Enterprise Users at `http://localhost:3000/api/box/enterprise/getEnterpriseUsers` as 
well as see them in the application logs on page load.
