import './styles/styles.css'
import CustomerServices from './services/CustomerServices';


document.getElementById('form-customer')
.addEventListener('submit', e =>{
    const nameCustomer = document.getElementById('customer').value;
    const ageCustomer = document.getElementById('customer-age').value;
    const phoneCustomer = document.getElementById('customer-phone').value;

    const customerService = new CustomerServices()
    customerService.postCustomer()

    e.preventDefault();

})