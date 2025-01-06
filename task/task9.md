Please put your answer here:  
| 1 | 2 | 3 | 4 | 5 | 6 |
|----|----|----|----|----|----|
|   |   |   |   |   |   |

<br>

### 1. How does your blog update articles if data on Arweave is immutable?

a. It creates a transaction with a new article version and only displays the latest versions.  
b. It sends an UPDATE transaction to Arweave which circumvents the immutability.  
c. It doesn’t, you can only create new articles.  

### 2. Can you filter GraphQL queries by the content of the transaction body?

a. No because transaction bodies can have an arbitrary size and format.  
b. Yes because gateways can parse transaction bodies.  
c. Yes but only for transaction bodies that contain JSON.  

### 3. How do you retrieve the article content?

a. With the TXID and the gateway’s data endpoint.  
b. Via tags and a GraphQL query.  
c. With Websockets and the article ID.  

### 4. Why should you lazy-load some routes of your DApp?

a. Because not all functionality is used by all users.  
b. Because having all code in one file leads to bugs.  
c. Because gateways can’t deliver files bigger than 100 KiB.  

### 5. Why should you define your bundle chunks manually?

a. Chunk uploads under 100 KiB are free.  
b. It reduces storage costs by using chunks that are already on Arweave.  
c. Polyfill performance decreases with chunk size.

### 6. Why should you test your DApp with a regular web server before uploading it to Arweave?

a. Web servers behave more similarly to Arweave gateways than dev servers, which include hot reloading and other features.  
b. Web servers are faster in packaging your bundles for responses.  
c. Dev servers aren’t open source. 