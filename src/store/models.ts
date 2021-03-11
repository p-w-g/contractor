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
export class repModel {
  names: string
  mail: string
  mobile: string

  constructor() {
    this.names = ''
    this.mail = ''
    this.mobile = ''
  }
}
export class companyModel {
  previewImage: string
  leadin: string
  orgnummer: string
  hemsida: string
  address: {
    ett: string
    tva: string
  }
  fskatt: boolean

  constructor() {
    ;(this.previewImage = ''),
      (this.leadin = ''),
      (this.orgnummer = ''),
      (this.hemsida = ''),
      (this.address = {
        ett: '',
        tva: ''
      }),
      (this.fskatt = false)
  }
}
