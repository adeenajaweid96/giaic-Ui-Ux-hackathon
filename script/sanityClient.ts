
import { createClient } from '@sanity/client';
import dotenv from "dotenv"

dotenv.config()
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, 
  dataset: 'production',        
  apiVersion: '2024-01-04',     
  useCdn: false,               
  token: process.env.SANITY_API_TOKEN,
});