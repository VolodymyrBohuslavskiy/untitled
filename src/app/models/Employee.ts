class Employee {

  constructor(
    public empID: number,
    public empName: string,
    public empActive: boolean,
    public department?: Departament
  ) {
  }
}
