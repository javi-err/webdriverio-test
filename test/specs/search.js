 describe('eBay Product Search', () => {
     it('Should open the main URL and verify the title', () => {
         browser.url('https://ebay.com/');
         expect(browser).toHaveTitle('Electronics, Cars, Fashion, Collectibles & More | eBay');
     })

     it('Should search for a product and verify the search text value', () => {
         const searchInput = $('#gh-ac');
         const searchButton = $('#gh-btn');

         searchInput.addValue('Laptop');
         searchButton.click();

         expect(searchInput).toHaveValue('Laptop');
     })

     it('Should redirect to a new page and verify the title', () => {
         expect(browser).toHaveTitle('Laptop | eBay');
     })

     it('Should update the search dropwdown', () => {
         const category = $('#gh-cat > option:nth-child(1)')

         expect(category).toHaveText('PC Laptops & Netbooks')

     })

 })