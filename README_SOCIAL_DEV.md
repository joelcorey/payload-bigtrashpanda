Find your user ID for an app or game

Click your profile picture in the top right of Facebook. Select Settings & privacy, then click Settings. Click Apps and Websites in the left side menu. Click View and Edit next to an app or game. Scroll down to the bottom of the page. Your user ID can be found and copied from this section.

Facebook user id: 227524197814078 Short lived user token (sep 22): EAAH5u5eJ0VsBO01dW4naVr6rUyRGcmKWBXARke4eDZBo92BSiU9eHHCo3ZCYCLlcae3cbDtBoqKkQkkrEhEqriZC5iMG59BpVong7b359FKVjMcYJTRfNdt9OEhsQLFTK6tRQmxYzZBpUDc0ZBUZAtXy94ehtqWRfBZBYqlqQcPZBScD4oSZC5mOUJ4ZAhkCdTpMV0OJn7KDQZBy4G9YZCHyyQZDZD

curl -i -X GET "https://graph.facebook.com/v17.0/oauth/access_token?grant_type=fb_exchange_token&client_id=556059073302875&client_secret=dee4e0ba980fe91a391b723ebb596af3&fb_exchange_token=EAAH5u5eJ0VsBO01dW4naVr6rUyRGcmKWBXARke4eDZBo92BSiU9eHHCo3ZCYCLlcae3cbDtBoqKkQkkrEhEqriZC5iMG59BpVong7b359FKVjMcYJTRfNdt9OEhsQLFTK6tRQmxYzZBpUDc0ZBUZAtXy94ehtqWRfBZBYqlqQcPZBScD4oSZC5mOUJ4ZAhkCdTpMV0OJn7KDQZBy4G9YZCHyyQZDZD"

curl -i -X GET "https://graph.facebook.com/v17.0/1396590320907454/accounts?access_token=EAAH5u5eJ0VsBO01dW4naVr6rUyRGcmKWBXARke4eDZBo92BSiU9eHHCo3ZCYCLlcae3cbDtBoqKkQkkrEhEqriZC5iMG59BpVong7b359FKVjMcYJTRfNdt9OEhsQLFTK6tRQmxYzZBpUDc0ZBUZAtXy94ehtqWRfBZBYqlqQcPZBScD4oSZC5mOUJ4ZAhkCdTpMV0OJn7KDQZBy4G9YZCHyyQZDZD"

{"data":
[ { "access_token":"EAAH5u5eJ0VsBO8lYtb0GjVAcw6ccmNmPuodFFoZCcRYY2xt0xjUvN8Sygfs3ITKU4webr16W9crwNZAZCHt6cJr35eZB3ZAtZCbuuJzWjVYKSKt7OQEcaicFtAtZA9ZAJomx4Oc0DJbZBv1My6G3w2gnFSL918jU8hUKGnu1Y8ujzjLa9h2Yk9cIpdMnb26STyZBOq5STlYKoYW5Opc2CyLwcFqtYZD", "category":"Real Estate", "category_list": [ { "id":"198327773511962", "name":"Real Estate" } ], "name":"Big Trash Panda LLC", "id":"100617859483895", "tasks":["ADVERTISE","ANALYZE","CREATE_CONTENT","MESSAGING","MODERATE","MANAGE"] }, { "access_token":"EAAH5u5eJ0VsBOZBKsOPrV1qsQZCzONdc2HZCHALZB0J2Lpw1mpPNm1HizR4Ij0YdEKW64l6vSOkyOGMkWWIF2ZAwW7mIkE49fO8VZBcjQR5IyX78tN69blxLDDBGVzhWT0OP2KtoPw5dgQqeRUYXXulQtHpSA9Trnddl6h4xpTZBIgABpoZCqkXJzeCulLmS15nxTyx3gU6inmxUvwURgmfm5CcZD", "category":"Software Company", "category_list": [ { "id":"1065597503495311", "name":"Software Company" }, { "id":"187393124625179", "name":"Web Designer" } ], "name": "Springtree Digital", "id":"110705398333950", "tasks":["ANALYZE","ADVERTISE","MESSAGING","MODERATE","CREATE_CONTENT","MANAGE"] } ], "paging": { "cursors": { "before":"QVFIUkx2NXJacUtRcFZAMcFBMZAC1icXhtYk1BaTZAyYnlhbzVWMkp0djhpdU82LVZAQdk9VQlg1S1BpeTQyOTlHSkdNa24za2hUcXNrUlh1WTNobEpXOUxvdWJB","after":"QVFIUmw5N1k3enZAlTy0tVUdDdXRQcGI3UXd1X3ZAwVS1fV3JNNUtEeTJOM25rdWFEaGVQeTQ3OHVZAMWVzT3hfSjh6emhJTkpVdnJSZA0VBNGZAmektDSmJrekhn" } } }

create a post curl -i -X -G POST "https://graph.facebook.com/100617859483895/feed?access_token=EAAH5u5eJ0VsBO8lYtb0GjVAcw6ccmNmPuodFFoZCcRYY2xt0xjUvN8Sygfs3ITKU4webr16W9crwNZAZCHt6cJr35eZB3ZAtZCbuuJzWjVYKSKt7OQEcaicFtAtZA9ZAJomx4Oc0DJbZBv1My6G3w2gnFSL918jU8hUKGnu1Y8ujzjLa9h2Yk9cIpdMnb26STyZBOq5STlYKoYW5Opc2CyLwcFqtYZD" --data-urlencode "msg=hello world"

curl -G "http://example.com/send" --data-urlencode "msg=hello world"
