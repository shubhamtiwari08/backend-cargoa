const {Delivery} = require('../models/delivery.model')

const getDeliveryDetails = async()=>{
    try {
        const deliveryDetail = await Delivery.find()
        return deliveryDetail
    } catch (error) {
        throw error
    }
}

const addDeliveryDetail = async(data)=>{
    try {
        const updatedDeliveries = await Delivery(data)
        const savedDelivery = await updatedDeliveries.save()
        return savedDelivery
    } catch (error) {
        throw error
    }
}

module.exports = {getDeliveryDetails,addDeliveryDetail}