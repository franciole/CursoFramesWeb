const _ = require('lodash')
const BillingCycle = require('./billingCycle')

BillingCycle.methods(['get', 'post', 'put', 'delete'])

BillingCycle.updateOptions({ new: true, runValidators: true })

BillingCycle.after('post', sendErrorOrNext).after('put', sendErrorOrNext)

function sendErrorOrNext(req, res, next) {
    const bundle = res.locals.bundle

    if (bundle.errors) {
        var errors = parseErrors(bundle.errors)
        res.status(500).json({ errors })
    } else {
        next()
    }
}

function parseErrors(nodeRestfullErros) {
    const erros = []
    _.forIn(nodeRestfullErros, error => erros.push(error.message))
    return erros
}

BillingCycle.route('count', function(req, res, next) {
    BillingCycle.count(function(error, value) {
        if (error) {
            res.status(500).json({ errors: [error] })
        } else {
            res.json({ value })
        }
    })
})


module.exports = BillingCycle