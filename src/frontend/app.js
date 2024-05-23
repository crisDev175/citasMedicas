require('./styles/styles.css')

document.getElementById('form-customer')
.addEventListener('submit', e =>{
    const nameCustomer = document.getElementById('customer').value;
    const ageCustomer = document.getElementById('customer-age').value;
    const phoneCustomer = document.getElementById('customer-phone').value;

    console.log(nameCustomer, ageCustomer, phoneCustomer);
    e.preventDefault();

})