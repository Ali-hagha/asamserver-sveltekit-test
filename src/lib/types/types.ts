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
	subTotal: number;
	total: number;
	items: InvoiceItem[];
}

interface Customer {
	name: string;
	email: string | null;
	address: string;
}
interface InvoiceItem {
	title: string;
	total: number;
}

export type PaymentMethod = 'CRYPTO' | 'PAYPAL' | 'CREDIT_CARD' | 'WEB_MONEY';
