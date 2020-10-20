 describe('eBay Product Search', () => {
     it('Should open the main URL and verify the title', () => {
         browser.url('https://ebay.com/');
         expect(browser).toHaveTitle('Electronics, Cars, Fashion, Collectibles & More | eBay');
     })
 })