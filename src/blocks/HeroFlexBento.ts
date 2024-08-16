 // @ts-nocheck 
import { Block } from '@/payload/payload-types'

import icon from '../fields/icon';
 //@ts-ignore
import { Type as MediaType } from '../collections/Media';

export type Type = {
  blockType: 'heroBentoPrimary'
  blockName?: string
  heading: string
  subHeading: string
  backgroundImage: MediaType
	backgroundCOlor: string
}

const HeroBentoPrimary: Block = {
	slug: 'heroFlexBento',
	labels: {
		singular: 'Hero Flex Bento Block',
		plural: 'Hero Flex Bento Blocks'
	},
	fields: [
		{
			name: 'h1Heading',
			label: 'H1 Heading',
			type: 'array',
			minRows: 1,
			maxRows: 5,
			fields: [
				{
					name: 'text',
					type: 'text',
					label: 'Text'
				},
				{
					name: 'size',
					label: 'Size',
					type: 'select',
					options: [
						{
							label: 'large',
							value: 'lg'
						},
						{
							label: 'Extra Large',
							value: 'xl'
						},
						{
							label: '2 Extra Large',
							value: '2xl'
						},
						{
							label: '3 Extra Large',
							value: '3xl'
						},
						{
							label: '4 Extra Large',
							value: '4xl'
						},
						{
							label: '5 Extra Large',
							value: '5xl'
						},
					]
				},
				{
					name: 'paddyingY',
					label: 'Padding Y',
					type: 'select',
					options: [
						{
							label: '1',
							value: '1'
						},
						{
							label: '2',
							value: '2'
						},
						{
							label: '3',
							value: '3'
						},
						{
							label: '4',
							value: '4'
						},
						{
							label: '5',
							value: '5'
						},
						{
							label: '6',
							value: '6'
						},
					]
				}
			]
		},
		{
			name: 'subHeading',
			label: 'Sub Heading',
			type: 'text'
		},
		{
			name: 'backgroundImage',
			label: 'Background Image',
			type: 'upload',
			relationTo: 'media'
		},
		{
			name: 'slider',
			label: 'Image Slider',
			type: 'array',
			minRows: 2,
			maxRows: 10,
			labels: {
				singular: 'Slide',
				plural: 'Slides'
			},
			fields: [
				{
					name: 'title',
					type: 'text',
				},
				{
					name: 'image',
					type: 'upload',
					relationTo: 'media'
				},
				{
					name: 'slideHref',
					label: 'Slide Href',
					type: 'text'
				},
				{
					name: 'slideHrefTitle',
					label: 'Slide Href Title',
					type: 'text'
				}
			]
		},
		{
			name: 'buttonLinks',
			label: 'Button Links',
			type: 'array',
			minRows: 1,
			maxRows: 4,
			labels: {
				singular: 'Button',
				plural: 'Buttons'
			},
			fields: [
				{
					name: 'header',
					label: 'Header',
					type: 'text'
				},
				icon,
				{
					name: 'title',
					label: 'Title',
					type: 'text',
				},
				{
					name: 'href',
					label: 'Href',
					type: 'text'
				},
				{
					name: 'backgroundColor',
					label: 'Background Color',
					type: 'relationship',
          relationTo: 'colors',
				}
			]
		}
	]
}

export default HeroBentoPrimary;