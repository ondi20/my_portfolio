import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'portfolio',

  projectId: 'eu9zq0n8',
  dataset: 'web_files',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
