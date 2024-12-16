class DashboardPage {
    constructor(page) {
        this.page = page;
        this.productName = page.locator('.card-body').filter({hasText:'ZARA COAT 3'}).getByRole('button', {name:" Add To Cart"});
        this.addToCart = page.getByRole('button', {name:" Add To Cart"});
        this.cart= page.locator('ul li').getByRole('button', {name:'Cart'});
        this.checkOut = page.getByRole("button", {name : 'Checkout'});
        
    }

    async searchProduct() {
        await this.productName.click();
        await this.cart.click();
        await this.checkOut.click();
    }
    
}
module.exports = DashboardPage;
