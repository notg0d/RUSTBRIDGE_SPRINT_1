
# Client Breif

The client initially asked for a place where they can track their payments and wouldn't get confused from duplicates.

## Tech Stack

TypeScrpt, Fastify API, PostgreSQL, React

## User View Flow

- User signs in to the React Interface 
- Gets authenticated with a unique MerchantID and passed it to the Database 
- User will be shown a list of payments with filter system
- Afterwards user can logout 

## Payment Event Flow 

- When the user login an unique ID for the merchant will be generated and passed to the DB  
- Simulator creates a sample notification according to the merchant id and send it to the MerchantDesk API 
- The MerchantDesk API validates the notification created and if it is valid then will be stored in to the appropriate merchant PostgreSQL Table 





graph LR
    User[User]
    ReactInterface["React \nInterface"]
    PostgreSQL["PostgreSQL \nDB"]
    MerchantAPI["Merchant Desk \nAPI"]
    Simulator["Simulator"]

User-- Login -->ReactInterface
ReactInterface-- Access their DB with ID -->PostgreSQL
MerchantAPI-- Validate and add payment to DB -->PostgreSQL
Simulator--sends payment notify -->MerchantAPI
PostgreSQL-- Return Payments -->ReactInterface
PostgreSQL-- Merchant ID -->Simulator