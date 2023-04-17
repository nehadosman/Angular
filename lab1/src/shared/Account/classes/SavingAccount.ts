

class SavingAccount extends Account implements IAccount {

    date_of_opening = new Date();
    min_balance: number = 1000;

    addCustomer(name: string) {
        return new Customer(name);
    }
    removeCustomer(): void {
        throw new Error("Method not implemented.");
    } 
    
}