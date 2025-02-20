const { v4: uuid4} = require('uuid');
class User {
    constructor(nome,email,age) {
        this.id = Date.now().toString();
        this.nome = nome;
        this.email = email;
        this.age = age;

    }
}

module.exports = User;