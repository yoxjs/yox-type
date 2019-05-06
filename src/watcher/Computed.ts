export default interface Computed {

  get(force?: true): any

  set(value: any): void

}