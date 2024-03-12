// sanity.config.js
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemas } from "./sanity/schema"; // Adjust the path as necessary

export default defineConfig({
  projectId: "97x9c6d8", // Replace <yourProjectId> with your actual project ID
  dataset: "production", // Specify the dataset you want to use
  plugins: [
    structureTool(), // Include the structure tool plugin for basic studio functionality
  ],
  schema: schemas,
});
