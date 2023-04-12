

class CurrentAccount extends Account implements IAccount {
    date_of_opening = new Date();
    interest_rate: number = 30;

    addCustomer(name: string) {
        return new Customer(name);
    }
    
    removeCustomer(): void {
        throw new Error("Method not implemented.");
    }
}