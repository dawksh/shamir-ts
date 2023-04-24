# Shamir TS

This repo contains code which can generate Shamir Secret keys for a specified secret key and also regenerate the secret key with only two of the 4 secret keys generated.

In theory there can be `n` secret keys generated for a specified secret, but for simplicity we only generate 4 in this example.

PS: Since this is TS, older brother of JS, it's bound to have some mathematical precision errors which I wish to be neglected.

This example takes in the quorum coefficient to be 2, i.e the number of points required to regenerate the keys.

## Code

The code lives in `src/index.ts` file.

`generateKeys`: This function takes in a number and returns an array of (x, y) coordinate keys for a specified secret. Out of these only 2 are required to reconstruct the secret keys.

`getSecret`: This function takes in an array of 2 (x, y) coordinates which can be used to reconstruct the original polynomial using lagrange's basis polynomial and hence the secret which was used as the constant.
