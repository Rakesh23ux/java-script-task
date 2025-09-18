class phone{
    constructor(){
        this._battery=100;
    }
    use() {
        this._battery -= 10;
        console.log(`battery is at ${this._battery}%`);
    }
}

const myphone = new phone();
myphone.use();// battery is at 90%
myphone.use();// battery is at 80%

class smartphone extends phone{
    constructor(){
        super();
        this._apps = [];
    }
    installApp(appName) {
        this._apps.push(appName);
        console.log(`${appName} installed. You have ${this._apps.length} apps.`);
    }
    use() {
        super.use();
        console.log(`Using smartphone features with ${this._apps.length} apps installed.`);
    }
}

const mysmartphone = new smartphone();
mysmartphone.installApp("WhatsApp");