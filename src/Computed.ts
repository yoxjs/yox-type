export default interface Computed {

  get(force?: boolean): any

  set(value: any): void

  has(dep: string): boolean

  add(dep: string): void

  remove(dep: string): void

  clear(): void

}