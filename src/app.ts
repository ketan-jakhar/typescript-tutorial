// classes:
class Invoice {
	client: string;
	details: string;
	amount: number;

	constructor(client: string, details: string, amount: number) {
		this.client = client;
		this.details = details;
		this.amount = amount;
	}

	format() {
		return `${this.client} owes ₹${this.amount} for ${this.details}`;
	}
}

let invoices: Invoice[] = [];
// invoices.push();

const form = document.querySelector(".new-item-form") as HTMLFormElement;

//inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
	e.preventDefault();

	console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
