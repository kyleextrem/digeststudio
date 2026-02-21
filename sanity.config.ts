import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from './sanity/schemas';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
    basePath: '/studio',
    name: 'Digest_Studio',
    title: 'Digest Studio',
    projectId,
    dataset,
    plugins: [deskTool()],
    schema: {
        types: schemaTypes,
    },
});
