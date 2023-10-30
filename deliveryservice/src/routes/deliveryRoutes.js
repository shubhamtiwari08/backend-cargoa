const express = require("express")
const app = express()
const router = express.Router()

const {getDeliveryDetails,addDeliveryDetail} = require('../controllers/deliveryController')

router.get('/delivery', async (req, res) => {
  try {
    const details = await getDeliveryDetails()
    res.status(201).json({ message: "succes", deliveries: details })
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
})

 


router.post('/delivery', async (req, res) => {
    const data = req.body
  try {
    const updatedDeliveries = await addDeliveryDetail(data);
    res.status(201).json({ deliveries:updatedDeliveries , message: " success" });
  } catch (error) {
    res.status(401).json({ error: 'unable to add deliveries' });
  }
});

module.exports = router;