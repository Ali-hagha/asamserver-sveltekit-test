export interface IconButton {
	title: string;
	icon: string;
	href: string;
}

export type Optional<T> = T | undefined;

export interface Invoice {
	id: number;
	paid: boolean;
	invoicedTo: Customer;
	payTo: Customer;
}

interface Customer {
	name: string;
	email: string | null;
	address: string;
}
