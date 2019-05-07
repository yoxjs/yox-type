export default interface Computed {

  get(force?: boolean): any

  set(value: any): void

}