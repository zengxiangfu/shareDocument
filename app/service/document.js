const Service = require('egg').Service;
const { getList } = require('../validate/documentValidate');

class DocumentService extends Service {

    constructor(ctx) {
        super(ctx);
        this.repData = this.ctx.repData;
        this.mysql = this.app.mysql;
    }

    /**
     * 获取文档列表
     * @param {*} body 
     */
    async getDocumentList(body){
        const {err , result } = getList(body);
        if(err.length) {
            return this.repData(2,null , err[0]);
        } else {
            const res = await this.mysql.select('content' , {
                limit: result.pageSize,
                offset: result.pageSize * result.pageNo
            });
            return this.repData(0 , res)
        }
    }
}

module.exports = DocumentService;