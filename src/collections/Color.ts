import { CollectionConfig } from 'payload/types'
import { text } from 'payload/fields/validations'

import slug from '../fields/slug'

const Color: CollectionConfig = {
	slug: 'colors',
  fields: [
    {
      name: 'title',
			label: 'Title',
      type: 'text',
      required: true,
    },
		{
			name: 'color',
			type: 'text',
			required: true,
		},
    slug
  ],
}

export default Color