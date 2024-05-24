class CustomerServices {

    constructor(){
        this.URI = 'http://localhost:4000/api/v1/customer'
    }

    async getCustomer(){
        const response = await fetch(this.URI);
        const customer = await response.json()
        return customer;
    }

    async postCustomer(customer){
        const res = await fetch(this.URI, {
            method: 'POST',
            body: customer
        });
        const data = await res.json();
    }

    async deleteCustomer(customerId){
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


export default CustomerServices;