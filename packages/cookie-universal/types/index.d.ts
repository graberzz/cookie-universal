import { CookieSerializeOptions } from 'cookie'

type CookieValue = any

interface ICookieGetOpts {
  fromRes?: boolean
  parseJSON?: boolean
}

interface ICookieSetOpts {
  name: string
  value: CookieValue
  opts?: CookieSerializeOptions
}

interface ICookie {
  (req?: object, res?: object, opts?: boolean): {
    get: (name: string, opts?: ICookieGetOpts) => any
    getAll: (opts?: ICookieGetOpts) => object
    set: (
      name: string,
      value: CookieValue,
      opts?: CookieSerializeOptions
    ) => void
    setAll: (cookieArray: ICookieSetOpts[]) => void
    remove: (name: string, opts?: CookieSerializeOptions) => void
    removeAll: () => void
  }
}

declare const Cookie: ICookie

export default Cookie
