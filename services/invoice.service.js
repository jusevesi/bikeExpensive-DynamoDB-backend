const { updateInvoiceInDb } = require("./dynamo.service");


class InvoiceService {

    constructor() { }

    async updateInvoice(invoice) {
        try {
            await updateInvoiceInDb(invoice);
            return {
                message: `Factura con numero: ${invoice.id} se registró correctamente`
            }
        } catch (error) {
            throw error;
        }
    }

}

module.exports = InvoiceService;