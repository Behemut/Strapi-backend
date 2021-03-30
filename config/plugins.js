module.exports = {
    upload: {
        provider: 'google-cloud-storage',
        providerOptions: {
           bucketName: 'android-dsm.appspot.com',
            publicFiles: false,
            uniform: false,
            serviceAccount: {
                "type": "service_account",
                "project_id": "android-dsm",
                "private_key_id": "ddb2b2bffbca9aed10ba506e0f94f11667e71911",
                "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCmD5QCRUMI3ioo\nAloSKkpwD6cToIH39mFGt+5tz+UWzPiZ6DagLqLYCG2sQQM8n0O6JA8T63sZQG1R\nvU5b3BLn5S7B2Y0nI5SuYyYgOEKbnsZUeZzLNvKwssV6cUN2Iec9lSeNu212m6Wg\nZC/v1seHsIXwHXNRBGZtN3Y6hN49/BmB2JAGLVHyX3hnHbBMrsxjikdIqeh6aVt2\nlRnlY3/2rmVAbbRSpAKgTUxBK4FFII5Uh0i5Kf/3YVJfdfTGP1CCIK0PNCXhPGX1\nj7NmS48AQ57hGr5C4y37deQjQaa1fjkvEHaEYca6UZWmoInPess8Odbgpom8p/Di\n6GY/BNezAgMBAAECggEACPjsgVbmsVL3qiO+ZB7e2MEvwNK6UwB/7wc/HbXO5fV7\nNS2jzfHXIJ8L9fOpThw415TdL7FYfFvLzE/TLQluCBOM/DJZ+xRkEywOQk1n4+qn\nQqczfpNgd4WhP+VgxMA+M0ic036eAnuUbl8ba/UJ4N37zqZ4tZbsRdhqTe0h6O1g\n0rsg6NPe1Jjl727GWI11hzbCcgMBb8TErSpgHPPysYMsP5WgGodL8q+AcSjbgT/p\nfrr++3GjuZgE8QP6GoFw7pvEWQzBCmlex5N6o4sItHTS2bS1s6zfAA/nj6Xi5/JT\nowL47KMLHSPOAzw62iOnYVt5ZVLl+mH3iCYZRTxQCQKBgQDW2ibyE492GiF3lnIn\nzcUuCGhxiWPPGfSa3JnP4Ict4JpWitrUIYwwg4bWtjWcSaGJIPBQ87Asvant89zz\nrkEk3fiddFUqXK3FskrlhSturL/dr1P2ujFaaGN7joH3rXrH2BSmNDD2OSdcA2ia\nfZ8VCWPFeBL8KLtBn0u169d7jQKBgQDF3UTD6AFKWfX1OU2jATQ44EfQoXSNkp1Z\nuqfW5mtrgEpw+h6S9/NG3yWE5OADVsacnXfBvAhO6C9dZ7MYMYvWwx70b1dryA1G\nVJnhitPojPOligJk5PmjyqyknnnzSm/Fr0kHyuEXDVpKesma2fR4vwdRxDn03lIx\nv/ziZt8wPwKBgApejwCh9wuRKUpXRX0sTjbxivDn25xUOVz8BqRkxsFtFKXWn8cb\nM2PoBSr5sk6vsw8mOtL9X+RY5wmn+mL8ZwJ7gBNBWRbpUC25dCntqnH1/nCZlKjU\nxasCXMLK1vT4N3PLtvtqi25mxcKIG5VROMtQH7OZHvlykc8R/Bp0nnrFAoGBAIQt\nYDaO0e3dUtVSRm7R6xTjnpXchYPdoYfDjUOeAbx6oz/9llcPlFCP2PyB+LPCUENn\nXgzpk5NCwAFhuN48mvIIvrEDgB7cMSH+eh2VJCKBpnG7VAYagDnOtq3xv/2qiChD\nBEJUYTGJFfwTMoJjf1D6K+WPdDgEHFxnqIOFvSr5AoGBAIcJ1iPgmKBv8a9KnWyO\nD3HYsyjlY1StMG9ZQy7TnlNDofKBd1w8T13FiXBdfuNq3DAzfGvdFTTIbRiFJMHK\n0Eg4zyy3XZAEnP50HPUiFLNeBxwCTrDy2ULJuya5H7jg0eA78f5J3t6EVE1E74WL\nsl3uYME5gFQaN/OzDQ4w6EmV\n-----END PRIVATE KEY-----\n",
                "client_email": "firebase-adminsdk-o82fl@android-dsm.iam.gserviceaccount.com",
                "client_id": "117127374047232047368",
                "auth_uri": "https://accounts.google.com/o/oauth2/auth",
                "token_uri": "https://oauth2.googleapis.com/token",
                "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
                "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-o82fl%40android-dsm.iam.gserviceaccount.com"
              }, // replace `{}` with your serviceAccount JSON object
            baseUrl: 'https://storage.googleapis.com/android-dsm.appspot.com',
            basePath: '',
        },
      },
    //...
}