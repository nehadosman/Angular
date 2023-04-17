

interface IAccount {
    date_of_opening: Date;

    addCustomer(name: string): Customer;
    removeCustomer(): void;
}