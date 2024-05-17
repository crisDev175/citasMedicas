const router = require('express').Router();
const Customer = require('../models/model.customer')

router.get('/customer', async (req, res) => {
    const allCustomers = await Customer.findAll()
    res.status(200).json({
        ok: true,
        status: 200,
        body: allCustomers
    })
})

router.get('/customer/:customer_id', async (req, res) => {
    const id = req.params.customer_id
    const oneCustomer = await Customer.findOne({
        where: {
            customer_id: id
        }
    })
    res.status(200).json({
        ok: true,
        status: 200,
        body: oneCustomer
    })

})

router.post('/customer', async (req, res) => {
    const dataCustomer = req.body;
    await Customer.sync();
    const newCustomer = await Customer.create({
        customer_name: dataCustomer.customer_name,
        customer_age: dataCustomer.customer_age,
        customer_phone: dataCustomer.customer_phone
    })
    res.status(200).json({
        ok: true,
        status: 200,
        message: "Customer created!"
    })
    console.log(newCustomer)
})

router.put('/customer/:customer_id', async (req, res) => {
    const dataCustomer = req.body;
    const id = req.params.customer_id
    const updateCustomer = await Customer.update(
        {
            customer_name: dataCustomer.customer_name,
            customer_age: dataCustomer.customer_age,
            customer_phone: dataCustomer.customer_phone
        },
        {
            where: {
                customer_id: id,
            },
        },
    );
    res.status(200).json({
        ok: true,
        status: 200,
        message: "Customer updated!"
    })
})

router.delete('/customer/:customer_id', async (req, res) => {
    const id = req.params.customer_id
    await Customer.destroy({
        where: {
            customer_id: id,
        },
    });
    res.status(200).json({
        ok: true,
        status: 200,
        message: "Customer deleted!"
    })
})

module.exports = router