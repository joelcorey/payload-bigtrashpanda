const accessToken = process.env.FACEBOOK_ACCES_TOKEN;
const pageId = process.env.FACEBOOK_PAGE_ID;

const socialMediaPost = async ({ data, req, operation, originalDoc }) => {
  // console.log(req)
  socialMediaFacebook({ data, operation })
}

const socialMediaFacebook = async ({ data, operation }) => {
    
  let message = data.content[0].children[0].text
  fetch(`https://graph.facebook.com/${pageId}/feed?message=${message}&access_token=${accessToken}`, {
    method: 'POST'
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

}

export default socialMediaPost