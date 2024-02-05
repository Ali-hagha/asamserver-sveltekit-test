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
		}
	};
	return {
		invoiceData
	};
}
