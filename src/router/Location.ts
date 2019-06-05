import * as type from '../type'

export default interface Location {
  path: string
  hash?: string
  params?: type.data
  query?: type.data
}