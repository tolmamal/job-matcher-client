class Auth {
    constructor() {
        this.authentication = false;
    }
    registeration(cb){
        this.authentication = true;
        cb();
    }
}

export default new Auth();