export async function postToFacebookPage(message, accessToken, pageId) {
    const url = `https://graph.facebook.com/${pageId}/feed`;
  
    const response = await fetch(url, {
      method: 'POST',
      body: new URLSearchParams({
        message,
        access_token: accessToken
      }),
    });
  
    const data = await response.json();
  
    if (!response.ok) {
      throw new Error(data.error?.message || 'Facebook post failed');
    }
  
    return data;
  }
  