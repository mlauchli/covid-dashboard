The project presented will not work without the keys, so you will need to create and use your own.

There are two keys: one to Google's Cloud Platform (as their Maps API and GeoChart API requires an API key nowadays), and one to https://newsapi.org/.

GOOGLE CLOUD INSTRUCTIONS:

1. Visit console.cloud.google.com
2. Sign up if you do not already have an account. 
3. Click the lefthand hamburger menu, scroll down to APIs and Services, and then over to Credentials.
4. Generate an API key and copy it.
5. Open "config.js" in my project and paste the API key as the geochartApiKey and mapsApiKey.
6. In the Google Cloud Console again, click the hamburger menu, scroll down to Google Maps and over to APIs. Enable both Geocoding API and Maps JavaScript API.


NEWS API INSTRUCTIONS:

1. Visit https://newsapi.org
2. Click "Get API key".
3. Create an account.
4. Copy the generated API key.
5. Open "config.js" in my project and paste the API key as the newsApiKey.