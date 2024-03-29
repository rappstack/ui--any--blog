import { path_, svg_ } from 'relementjs/svg'
export function tabler_brand_whatsapp_($p?:{ class?:string }) {
	return (
		svg_({
			xmlns: 'http://www.w3.org/2000/svg',
			'stroke-linecap': 'round',
			'stroke-linejoin': 'round',
			...$p,
		}, [
			path_({ stroke: 'none', d: 'M0 0h24v24H0z', fill: 'none' }),
			path_({ d: 'M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9' }),
			path_(
				{ d: 'M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1' })
		])
	)
}
