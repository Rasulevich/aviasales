export default class GetTickets {
    
    baseUrl = 'https://front-test.beta.aviasales.ru';

    searchId = localStorage.getItem('id');

    async getSearchId () {
        const res = await fetch(`${this.baseUrl}/search`);  
        const result = await res.json();
        localStorage.setItem('id', result.searchId);
        return result;
    }

    async getTickets () {
        await this.getSearchId();  
        const result = await fetch(`${this.baseUrl}/tickets?searchId=${this.searchId}`)
        const tickets = await result.json();
        return tickets;
    }
}