export default interface PropRule {
  type: string | string[]
  value: any | Function
  required: boolean | Function
}