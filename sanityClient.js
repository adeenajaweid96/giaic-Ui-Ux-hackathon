import { createClient } from '@sanity/client';

const sanityClient = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Find this in Sanity's project settings
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET, // Or the dataset you're using
    apiVersion: '2023-05-03', // Use the current date in YYYY-MM-DD format
    useCdn: true, // Enable CDN for faster responses
});

export default sanityClient;