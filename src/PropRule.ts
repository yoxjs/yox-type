
interface typeGetter { (props: Record<string, any>): boolean }

interface valueGetter { (props: Record<string, any>): any }

interface requiredGetter { (props: Record<string, any>): boolean }

export default interface PropRule {
  type: string | string[] | typeGetter
  value?: any | valueGetter
  required?: boolean | requiredGetter
}