//! [...] ka reason -> 
//! catch all segments -> 
//! app/shop/[...slug]/page.js will match /shop/clothes, /shop/cloths/tops, /shop/clothes/tops/t-shirts and so on..

import { handlers } from "@/auth" // Referring to the auth.ts we just created
export const { GET, POST } = handlers