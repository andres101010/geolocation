const Geolocation = require("../services/geolocation.services");
const geolocation = new Geolocation();
const catchAsync = require('../helpers/catchAsync');

exports.location = catchAsync(async(req,res,next)=>{
        const {ip} = req.params;
        const {currency} = await geolocation.location(ip)
        
        res.status(200).json({
            status: 'success',
            message: 'Successful location',
            currency
        });
    
})
exports.sendLocation = catchAsync(async(req,res,next)=>{

        const {sendData} = await geolocation.sendLocation()
        res.status(200).json({
            status: 'success',
            message: 'Successful send location',
            sendData
        });
    
})
