import { CollectionConfig } from 'payload'

import slug from '../fields/slug'

const Category: CollectionConfig = {
	slug: 'categories',
  fields: [
    {
      name: 'title',
			label: 'Title',
      type: 'text',
      required: true,
    },
    slug
  ],
}

export default Category