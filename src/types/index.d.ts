export { }

export interface TokenDecoded {
  customers_id: number,
  role: string,
  email: string
}

declare global {
    namespace Express {
        export interface Request {
            // decoded token
            token: TokenDecoded;
        }
    }
}