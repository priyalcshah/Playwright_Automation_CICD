const LoginPage = require('../pageObjects/LoginPage.js');  
const DashboardPage = require('../pageObjects/DashboardPage.js');  
const PlaceorderPage = require('../pageObjects/PlaceorderPage.js');  

class POManager {  
    constructor(page) {  
        this.page = page;  
        this.loginPage = new LoginPage(this.page); // Fixed typo here  
        this.dashboardPage = new DashboardPage(this.page);  
        this.placeorderPage = new PlaceorderPage(this.page);  
    }  
    
    getLoginPage() {  
        return this.loginPage;  
    }  

    getDashboardPage() {  
        return this.dashboardPage;  
    }  

    getPlaceorderPage() {    
        return this.placeorderPage;  
    }  
}  

module.exports = POManager;