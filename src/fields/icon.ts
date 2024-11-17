import { Field } from 'payload'

export type IconType = 'arrowUpperRight' | 'phoneOutline'

export type Type = {
  icon?: {
    icon: IconType
  }
}

const icon: Field = {
	name: 'icon', // required
	type: 'select', // required
	hasMany: false,
	admin: {
		isClearable: true,
		isSortable: true, // use mouse to drag and drop different values, and sort them according to your choice
	},
	options: [
		{
			label: 'Align Right',
			value: 'AlignRight',
		},
		{
			label: 'Baggage Claim',
			value: 'BaggageClaim',
		},
		{
			label: 'At Sign',
			value: 'AtSign',
		},
		{
			label: 'Message Square',
			value: 'MessageSquare',
		},
		{
			label: 'Message Circle Heart',
			value: 'MessageCircleHeart',
		},
		{
			label: 'Map Pin',
			value: 'MapPin',
		},
		{
			label: 'Smile',
			value: 'Smile',
		},
		{
			label: 'Sticker',
			value: 'Sticker',
		},
		{
			label: 'Milestone',
			value: 'Milestone',
		},
	],
}

export default icon