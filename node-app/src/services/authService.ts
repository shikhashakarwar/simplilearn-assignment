import * as JWT from 'jsonwebtoken';
import * as fs from "fs";
import * as path from 'path';

export const verifyToken = function (accessToken: string) : any  {

  try {
    // const publicKey = fs.readFileSync(path.resolve('../key/public-key'));
  
    // return (JWT.verify(
    //   accessToken,
    //   publicKey,
    //   { algorithms: ['RS256'] },
    //   ));
  } catch (err) {
    throw new Error(err.message);
  }

};

export const signToken = function (payload: any, exp?: string) : any {
  const expiry = exp ? exp : '1440m';
  return JWT.sign(payload, "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDM5PVx7QfN8Ctq\noqV4gJ580owcGQWuiFF9VlfJexc2v1oK80xPvXxHYS+Tb26Q38h5UzFm5wu0QOwy\n0OXxNTls+yIIOuOhO7MCzL9LSE9jUyQe3iywRw/d6X+J63jrJ5oaDttHhTknLWcy\nfg26mIFw/Ju7M/8sHZ8YZKmAdquVL+us1HY4Pxn01aBtU+Yp2EiDs+Yshq1vSsgH\n7XTNzaePB5xVDLT0XcNidm+nJG/Vn/BDKeKJXxe4SIwQYorVdSRJr9tTHcBRCLhS\n7sHy51J+W5cIjOzBclL3B4dpLnpR+mAiud0UEdKxzD/B4kIzEIBrlmlP7s5RZJLK\nCxnWnkr7AgMBAAECggEBAKS+yBeVZbwRi2dPZcsRZ92nkV6aQ/ZEx3kG7ski/tRX\nYXgCjm5jRkVCgHWEmJtGRDRBTyyVQ9ToisKFMw4SJJ1bA88oQpUGonXy2TEX8DVF\nyXpEXBxU1w4wTAtCWVSC4CZpoajNFtpIaHyx3CoXq6SEiFcqhNcc7io37g5L3MSz\ndD/pelgdfzk6NOBTwKwhYMObJWYNEiy5OfSl3e47FNIjzUB8zIeogUm8GtyopwOZ\npMKqaegc1cJ3welPLH7AeCa2iuNWk1X+sLqwWRtRkxQYv/opUM61o+uCe9mWbjlY\nf2co4tiFdjvh5tQ36ferFhm2sK3oHeZwERBlsihS+PECgYEA/DwY19TwosPg9KBu\n7hyLQMJn1yqKt7YlJCLvqkwzznG7GD1vfwEEeAPDm3OM3FuYATDDSpLt9JhKdUU8\nRpHM6msmxxr6BTQ/NHBnNtAemedsOA/7e1J5cQZh+PhMHpJYc0DC98FXXIOHLCIR\nVHOLaPc9BTUhRkFL1LQ6FO4GGckCgYEAz/Pz5ioFIBiB6VX+OzdlgFRYCe4We/bq\nmckJ2J0kSRuz0BY5dBgA22Nz6H2EGLSLTlzniSXKan1al1W8xeFGZeXUO0jDC7EW\nOMaupJHkM5+s+W5pJ5bsZOLBW5rfLpzUgnJ87phqvtohhXM2+SDAJLzVb+DA/RuE\nsCZZlDbM4KMCgYA99ADiGmJUiCoby8ATah1l9ZoNxlw2DV4IBzC4smjTHyomJQja\nuARB+iK0bug9Q54NRM3i5j3eIv2+2heY+bzMIy9uHhkk6BVSKv2e//VUNfxltL8/\nJh2//iJYRZxksetZu6FnuyxbA89Srrd098BZMsjhG5ClseoPP4k4lNIYyQKBgQDA\nPwyNDO2+FUoMmBY3UmhAsjjNvVEF+2g5EdVLb0L7X2PljJZC0GoCaDfgiCEV4dsj\nb9oRPWGa/xY/7+Bbo368dzO0NvkyFt2vUWZk+Aba/tQfqEYIdotGXSdac5u+cPg5\nPHRo83lDxU7WG4SH3hIkJHrBOivQEp+hZWLNFbhkNwKBgQCLdeHm344ls+QPr3Fg\nW94S5I0gTnXAyLJSdLMhe/6RG6Wgi0HeDKJfsmNIBThhZ5EXY7wrJAv/QY3CZoUL\nMykQ1hilljdEQtvgHMgBy8Fujrfv5vwNXTymwupewm2c5x78huhyHqzwrnJl4uYS\n/dKrxs9a0X6hOSfSw6xwNs+oLw==\n-----END PRIVATE KEY-----" , { algorithm: 'RS256', expiresIn: expiry });
};