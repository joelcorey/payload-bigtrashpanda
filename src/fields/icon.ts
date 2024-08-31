import { Field } from 'payload'

export type IconType = 'arrowUpperRight' | 'phoneOutline'

export type Type = {
  icon?: {
    icon: IconType
  }
}

const icon: Field = {
	name: 'icon',
	label: 'Icon',
	type: 'select',
	options: [
		{
			label: 'Arrow upper right',
			value: 'arrowUpperRight'
		},
		{
			label: 'Arrow down',
			value: 'arrowDown'
		},
		{
			label: 'Phone outline',
			value: 'phoneOutline'
		}
	]
}

export default icon