export class taskModel {
  Description: string
  Amount: number
  Id: number
  Label: string

  constructor() {
    this.Description = ''
    this.Amount = 0
    this.Id = 0
    this.Label = ''
  }
}
export class locationModel {
  Angaende: string
  Fastighet: string
  Jobbstart: string

  constructor() {
    this.Angaende = ''
    this.Fastighet = ''
    this.Jobbstart = ''
  }
}
