'use strict';

const pool = require('./pool');

class DataCollection{
//create constrotre for one ne table and tables in sql
//table is string 
constructor(table){
this.table =table;
//يعني حمرر ال clothes and food لل روتر

}


read(id){
    //will return just if with id
if(id){
return pool.query(`SELECT * FROM ${this.table} WHERE id =$1;`,[id]);
}
return pool.query(`SELECT * FROM ${this.table};`);


}

create(obj){
const sql = `INSERT INTO ${this.table} (nameIt,priceIt) VALUES ($1,$2) RETURNING *;`
const saveObject = [obj.nameIt,obj.priceIt]
return pool.query(sql,saveObject);
}

update(id,obj){
    const sql = `UPDATE ${this.table} SET nameIt=$1,priceIt=$2 WHERE id=$3 RETURNING *;`
    const saveObject = [obj.nameIt,obj.priceIt, id]
    return pool.query(sql,saveObject);
}

delete(id){
    return pool.query(`DELETE FROM ${this.table} WHERE id=$1 RETURNING *;`, [id]);

}


}

module.exports=DataCollection;