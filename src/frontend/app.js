require('./styles/styles.css')
const CustomerServices = require('./services/CustomerServices')


document.getElementById('form-customer')
    .addEventListener('submit', event => {
        event.preventDefault();

        const nameCustomer = document.getElementById('customer-name').value;
        const ageCustomer = document.getElementById('customer-age').value;
        const phoneCustomer = document.getElementById('customer-phone').value;

       
        const formData = new FormData();
        formData.append('customer_name', nameCustomer);
        formData.append('customer_age', ageCustomer);
        formData.append('customer_phone', phoneCustomer);
                   
        // console.log(nameCustomer, ageCustomer, phoneCustomer)
        // console.log(formData)
        const customerService = new CustomerServices()
        customerService.postCustomer(formData)
        // try{
        // customerService.postCustomer(formData);
        // }catch (error){
        //      console.error('Error al enviar al cliente', error)
        // }
        
    })