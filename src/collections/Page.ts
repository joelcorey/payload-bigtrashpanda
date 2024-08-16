 // @ts-nocheck 
import type { CollectionConfig } from 'payload/types';

import meta, { Type as MetaType } from '../fields/meta';
import slug from '../fields/slug';

import HeroFlexBento, { Type as HeroBentoPrimaryType } from '@/blocks/HeroFlexBento';
import Content,          { Type as ContentType } from '@/blocks/Content';
import Spacer,           { Type as SpacerType } from '@/blocks/Spacer';

export type Layout =
	HeroBentoPrimaryType
  | ContentType
  | SpacerType

export type Type = {
  title: string

  slug: string
  layout: Layout[]
  meta: MetaType
}


const Page: CollectionConfig = {
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
				HeroFlexBento,
				Content,
				Spacer
			]
		},
		meta,
		slug
  ],
  
};

export default Page;
