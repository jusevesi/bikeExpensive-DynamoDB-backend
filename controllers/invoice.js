const InvoiceService = require("../services/invoice.service")

const updateInvoice = async (req, res) =>{
    try {
        const invoiceService = new InvoiceService();
        const response = await invoiceService.updateInvoice(req.body);
        res.json(response);
    } catch (error) {
        res.status(error.statusCode || 500);
        res.json({ message: error.message || 'Internal Server Error'});
    }
}

module.exports = updateInvoice;