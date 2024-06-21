class CustomerServices {

    constructor() {
        this.URI = 'http://localhost:4000/api/v1/customer'
    }

    async getCustomer() {
        const response = await fetch(this.URI);
        const customers = await response.json()
        return customers;
    }

    async postCustomer(customer) {
        try{
        const res = await fetch(this.URI, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
             body: JSON.stringify(customer)
         });

        const data = res.json()
        console.log(data)
        return data;
    }catch(error){
        console.log(error)
    }
    }

    async deleteCustomer(customerId) {
        const res = await fetch(`${this.URI}/${customerId}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'DELETE'
        });
        const data = await res.json();
        console.log(data)
    }
}


module.exports = CustomerServices;