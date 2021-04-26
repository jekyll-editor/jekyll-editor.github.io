
const Client = require("@replit/database");

module.exports = class DataBase {
  constructor(url){
    this.client = new Client(url);
  }

  async get(key){
    return await this.client.get(key)
  }

  async set(key,value){
    return await this.client.set(key,value)
  }

  async delete(key){
    return await this.client.delete(key)
  }

  async update(key,value){
    return await this.client.set(key,value)
  }
}
