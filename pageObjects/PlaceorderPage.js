class PlaceorderPage{

    constructor(page){
        this.page = page;
        this.country = page.getByPlaceholder('Select Country');
        this.dropDown = page.getByRole('button',{name:'Indo'});
        this.orderButton = page.getByText('PLACE ORDER')
}

async Order()
{
    await this.country.pressSequentially('Ind');
    await this.dropDown.click();
    await this.orderButton.click();
}

}
module.exports = PlaceorderPage;