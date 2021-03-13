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
export class disclaimerModel {
  fakturering: string
  giltig: string
  garanti: string
  arbetstid: string
  försäkring: string
  avvikelse: string
  extra: string
  rot: string
  ovrigt: string

  constructor() {
    this.fakturering = ''
    this.giltig = ''
    this.garanti = ''
    this.arbetstid = ''
    this.försäkring = ''
    this.avvikelse = ''
    this.extra = ''
    this.rot = ''
    this.ovrigt = ''
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
