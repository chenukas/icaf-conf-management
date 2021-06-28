const Event = require('../models/event.model')
const User = require('../models/user.model')
const Submission = require('../models/submission.model')
const Payment = require('../models/payment.model')

const getStatistics = async (req, res) => {
    try {
        const totalEvents = await Event.find({}).count()
        const totalParticipants = await User.find({}).count()
        const totalSubmissions = await Submission.find({}).count()
        var totalPayments = 0
        await Payment.aggregate([{ 
            $group: { 
                _id: null, 
                total: { 
                    $sum: "$amount" 
                } 
            } 
        }]).then((response) => {
            totalPayments = response[0].total
        })

        return res.status(200).json({
            success: true, 
            data: { totalEvents, totalParticipants, totalSubmissions, totalPayments }
        });
    }   catch (err) {
        
        return res.status(500).json({
            success: false,
            error: err.message
        });

    }
}

module.exports = {
    getStatistics
};