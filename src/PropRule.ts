import * as type from '../index'

interface typeGetter { (props: type.data): boolean }

interface valueGetter { (props: type.data): any }

interface requiredGetter { (props: type.data): boolean }

export default interface PropRule {
  type: string | string[] | typeGetter
  value?: any | valueGetter
  required?: boolean | requiredGetter
}