import * as type from '../type'

export default interface PropRule {
  type: string | string[] | type.propType
  value?: any | type.propValue
  required?: boolean | type.propRequired
  transform?: type.propTransform
}