"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
// sanityClient.ts
const client_1 = require("@sanity/client");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.client = (0, client_1.createClient)({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Replace with your project ID
    dataset: 'production', // Or your dataset name
    apiVersion: '2024-01-04', // Today's date or latest API version
    useCdn: false, // Disable CDN for real-time updates
    token: process.env.SANITY_API_TOKEN,
});




import { createClient } from '@sanity/client';

export const client = createClient({
 projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, 
dataset: 'production',
  apiVersion: '2023-01-01', 
  token: process.env.SANITY_API_TOKEN, 
  useCdn: false, 
});
