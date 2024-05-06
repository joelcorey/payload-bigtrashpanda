import type { CollectionConfig } from 'payload/types';

import meta from '../fields/meta';
import slug from '../fields/slug';

// import { Content } from '../blocks/Content';
// import { Hero } from '../blocks/Hero';
// import { Image } from '../blocks/Image';

const Pages: CollectionConfig = {
  slug: 'pages',
	labels: {
		singular: 'Page',
		plural: 'Pages'
	},
	access: {
		read: () => true
	},
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
			label: 'Page Title',
      type: 'text',
			required: true
    },
		{
			name: 'layout',
			label: 'Page Layout',
			type: 'blocks',
			minRows: 1,
			blocks: [
				// Hero,
				// Content,
				// Image
			]
		},
		meta,
		slug
  ],
  
};

export default Pages;
