import { CollectionConfig } from 'payload/types'

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
      name: 'htmlColorCode',
			label: 'HTML Color Code',
      type: 'text',
      required: true,
    },
    slug
  ],
}

export default Color