const Geolocation = require("../services/geolocation.services");
const geolocation = new Geolocation();
const catchAsync = require('../helpers/catchAsync');

exports.location = catchAsync(async(req,res,next)=>{

        const {currency} = await geolocation.location()
        res.status(200).json({
            status: 'success',
            message: 'Successful location',
            currency
        });
    
})
