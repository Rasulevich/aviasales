export default class GetTickets {

    async getSearchId () {
        const res = await fetch('https://front-test.beta.aviasales.ru/search')
        if (!res.ok) {
            throw new Error(`Could not fetch ` + 
              `, received ${res.status}`)
          }
        const result = await res.json()
        return result
    }

    async getTickets () {
        const res = await this.getSearchId();
        const result = await fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${res.searchId}`)
        const tickets = await result.json()
        return tickets
    }

}