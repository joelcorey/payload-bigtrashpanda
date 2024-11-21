This guide for getting all API's setup for integration with Payload  

# Facebook Pages API Integration Guide

This guide provides a comprehensive overview on how to set up and use the Facebook Pages API for interactions with a Facebook Business Page.


## Setting up a FB Dev Account

1. Navigate to Facebook for Developers.
2. Click on “Log In” or “Get Started” to set up your developer account.
3. Once registered, click on “My Apps” at the top right and then “Create App”.
4. You will be presented with a screen titled “What do you want your app to do?”. Click on “Other” at the bottom and then “Next”.
5. On the next screen titled “Select an app type”, choose “Business” and then click “Next”.
6. You’ll be taken to a screen where you need to provide the following details:
    - Add an app name: This is the name associated with your App ID. It will appear on your “My Apps” page. This name can be changed later in settings.
    - App contact email: Provide an email address where Facebook can contact you regarding your app. Ensure it’s an address you check regularly.
    - Business Account (optional): If necessary, connect a Business Account to your app. This is only required for certain products and permissions. You’ll be prompted to connect a Business Account when you request access to those specific products and permissions.
7. After filling out the details, click “Create App”.
9. Now, you can navigate to the app’s dashboard and request tokens with the necessary scopes to post on a page.

## Obtain User Access Token

1. Navigate to the Graph Explorer.
2. Select Your Created App from the Meta App Dropdown
3. Select the Page you want to post to from the dropdown called User or Page
4. For the Facebook API Make sure that the following permissions are selected
    - ```pages_show_list```
    - ```pages_events```
    - ```pages_read_engagement```
    - ```pages_manage_metadata```
    - ```pages_read_user_content```
    - ```pages_manage_posts```
5. Additionally, for the Instagram API select the following permissions
    - ```ads_management```
    - ```business_management```
    - ```instagram_basic```
    - ```instagram_content_publish```
6. Click on “Generate Access Token”.
7. Authorize the app access to your account & page access
8. Click on the User or Page Dropdown and click on your Page
9. Copy the token.

## Get a Long-lived User Access Token
Before You Start:
  - A short-lived User access token
  - Your Facebook App ID (not a valid step? possibly delete as this information is never programmatically used)
  - Your App Secret (not a valid step? possibly delete as this information is never programmatically used)

Steps:
1. Navigate to https://developers.facebook.com/tools/debug/accesstoken
2. Paste your short lived token
3. Click Extend Access Token
4. Copy Your Long Lived Access Token

*Note:
If the API needs to be created programmatically a request can be made to “/oauth/access_token” 

## Get a never-expiring page access token
1. Use a RESTful client such as Insomnia or Postman, or a command line tool such as cURL to hit the following endpoint  
```https://graph.facebook.com/v12.0/APP-SCOPED-USER-ID/accounts?access_token=LONG-LIVED-ACCESS-TOKEN```

Sample response data:
```
{"data":            
    [
        {
            "access_token":"EAAH5u5eJ0VsBO8lYtb0GjVAcw6ccmNmPuodFFoZCcRYY2xt0xjUvN8Sygfs3ITKU4webr16W9crwNZAZCHt6cJr35eZB3ZAtZCbuuJzWjVYKSKt7OQEcaicFtAtZA9ZAJomx4Oc0DJbZBv1My6G3w2gnFSL918jU8hUKGnu1Y8ujzjLa9h2Yk9cIpdMnb26STyZBOq5STlYKoYW5Opc2CyLwcFqtYZD",
            "category":"Real Estate",
            "category_list":
                [
                    {
                        "id":"198327773511962",
                        "name":"Real Estate"
                    }
                ],
            "name":"Big Trash Panda LLC",
            "id":"100617859483895",
            "tasks":["ADVERTISE","ANALYZE","CREATE_CONTENT","MESSAGING","MODERATE","MANAGE"]
        },
    ],
}
```

Copy the access_token and id fields in to your .env file, or elsewhere, for API use.

## Creating a new Page Post Using Fetch in JS


### Publishing a Page Post

```
const pageId = '{page-id}';
const accessToken = '{page-access-token}';
const message = 'Hello Fans!';

fetch(`https://graph.facebook.com/${pageId}/feed?message=${message}&access_token=${accessToken}`, {
  method: 'POST'
})
.then(response => response.json())
.then(data => {
  console.log('Post ID:', data.id);
})
.catch(error => {
  console.error('Error:', error);
});
```

### Publishing a Link
```
const pageId = '{page-id}';
const accessToken = '{page-access-token}';
const message = 'Smart video calling to fit every family';
const link = 'https://portal.facebook.com/products/';

fetch(`https://graph.facebook.com/${pageId}/feed?message=${message}&link=${link}&access_token=${accessToken}`, {
  method: 'POST'
})
.then(response => response.json())
.then(data => {
  console.log('Post ID:', data.id);
})
.catch(error => {
  console.error('Error:', error);
});
```

### Publish a Photo
```
const pageId = '{page-id}';
const accessToken = '{page-access-token}';
const photoUrl = '{path-to-photo}';

fetch(`https://graph.facebook.com/${pageId}/photos?url=${photoUrl}&access_token=${accessToken}`, {
  method: 'POST'
})
.then(response => response.json())
.then(data => {
  console.log('Photo ID:', data.id);
  console.log('Post ID:', data.post_id);
})
.catch(error => {
  console.error('Error:', error);
});
```

### Publish a Video
```
const pageId = '{page-id}';
const accessToken = '{page-access-token}';

// Add any necessary video parameters here
fetch(`https://graph.facebook.com/${pageId}/videos?access_token=${accessToken}`, {
  method: 'POST'
})
.then(response => response.json())
.then(data => {
  console.log('Video ID:', data.id);
})
.catch(error => {
  console.error('Error:', error);
});
```