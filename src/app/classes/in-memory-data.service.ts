import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const legalcases = [
      { id: 0, title: 'People vs. Someone', docket:'12345', defendant:'Someone', cols: 2, rows: 1, color: 'lightblue' },
      { id: 1, title: 'People vs. OJ Simpson', docket:'23456', defendant:'O.J. Simpson', cols: 2, rows: 2, color: 'lightgreen' },
      { id: 2, title: 'People vs. Paul Manafort', docket:'34567', defendant:'Manafort, Paul', cols: 2, rows: 1, color: 'lightpink' }
    ];
    const legalfiles = [
      { id: 0, legalcase_id: 0, title: 'Document1', icon: 'word' },
      { id: 1, legalcase_id: 0, title: 'Document2', icon: 'word' },
      { id: 2, legalcase_id: 0, title: 'Spreadsheet1', icon: 'excel' }
    ];
    const projects = [
      { id: 0,  title: 'Special Case' }
    ];
    const companies = [
      { id: 0,  name: 'Law Firm', creator:"Ying Stafford", created: "March 5, 2018" }
    ];
    const teams = [
      {id: 0, title: 'Some team', members: ["Jane Doe"] }
    ];
    const users = [
      {id: 0, email: 'ying@staffordesq.com',
                      firstName: 'Ying', lastName: 'Stafford', fullName: 'Ying Stafford', companies: [0] }
    ];
    const currentUser = [
      {id: 0, email: 'ying@staffordesq.com',
                      firstName: 'Ying', lastName: 'Stafford', fullName: 'Ying Stafford', companies: [0] }
    ];
    return {legalcases, legalfiles, projects, companies, teams, users, currentUser};
  }
}
