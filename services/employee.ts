export interface Employee{
    id: number,
    icon: number,
    name: string,
    designation: string,
    companyName: string,
    currentTeam: string,
    emailId: string,
    contact: number
}

export interface ListOfEmployee extends Employee{
   employees: Employee[]
}