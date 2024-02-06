import type { Invoice } from '$lib/types/types';
export function load() {
	const invoiceData: Invoice = {
		id: 26773,
		paid: false,
		invoicedTo: {
			name: 'Granit Emery',
			email: 'granit.emery@gmail.com',
			address: 'United States'
		},
		payTo: {
			name: 'OperVPS Ltd.',
			email: null,
			address: '47 Wharf Rd, N1 7GS London, United Kingdom'
		},
		subTotal: 40.98,
		total: 30.98,
		items: [
			{
				title: 'Item number 1',
				total: 5.98
			},
			{
				title: 'Item number 2',
				total: 11
			},
			{
				title: 'Item number 3',
				total: 5
			},
			{
				title: 'Item number 4',
				total: 9
			}
		]
	};
	return {
		invoiceData
	};
}
