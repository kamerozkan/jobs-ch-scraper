// Run jobs-ch-scraper on Apify and print the results. npm install apify-client
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: process.env.APIFY_TOKEN });
const input = {
  "searchTerms": [
    "Software Engineer"
  ],
  "location": "Zürich",
  "maxItems": 20
};
const run = await client.actor('kamerozkan/jobs-ch-scraper').call(input);
const { items } = await client.dataset(run.defaultDatasetId).listItems();
console.log(items);
