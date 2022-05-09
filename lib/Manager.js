const Employee = require('./Employee')
//constructor for Manager objct that will pass name,email,id and office number and return both office number and return that title of "Manager"
class Manager extends Employee{
    constructor(name, email, id, officeNumber){
        super(name, email, id);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber(){
        return this.officeNumber;
    } 
    getRole(){
        return "Manager";
    }
}

module.exports = Manager