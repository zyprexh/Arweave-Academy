### 1. Why can you deploy a website with a randomly generated wallet?

a. Arweave bundling services subsidize uploads under 100 KiB.  
b. They can’t, all uploads are in transactions that cost money to settle onchain.  
c. The first 10 files are free to upload.  

### 2. How does Arweave change the content of a TXID after you uploaded a new version of a file?

a. It doesn’t, the new upload will get a new TXID.  
b. It apppends the new version to the old file.  
c. You can’t upload multiple versions of one file.  

### 3. What enables users to access multiple files with one TXID?

a. A JSON path manifest that maps paths to TXIDs.  
b. ZIP archive uploads.  
c. An XML manifest that links TXIDs to URLs.  

### 4. Are ArNS names immutable?

a. No, you can change their target TXIDs.  
b. Yes, once you set a TXID, they will always point to that.  
c. No, they can change 5 times after registration.  

### 5. Are ArNS names linked to a gateway?

a. No, you can access every ArNS name from every gateway.  
b. Yes, you have to choose a gateway at registration.  
c. Yes, but only for the first month.

### 6. Where can you find the immutable TXID of an ArNS page?

a. In the X-Arns-Resolved-Id header field.  
b. In the Arweave-Txid header field.  
c. You can’t, the TXID is hidden from the client. 