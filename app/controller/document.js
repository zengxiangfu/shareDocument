const Controller = require('egg').Controller;

class DocumentController extends Controller {
    constructor(ctx) {
        super(ctx);
        this.service = this.ctx.service;
    }

    getContent(){
        const { query } = this.ctx;
        // const res = 
    }

}

module.exports = DocumentController;