// import { NextResponse, type NextRequest } from 'next/server';
// import { updateSession } from '@/app/utils/supabase/middleware';
// import { createServerClient } from '@supabase/ssr';

// export async function middleware(request: NextRequest) {
//   const response = await updateSession(request);

//   const path = request.nextUrl.pathname;
//   console.log('Request path:', path);

//   if (path.startsWith('/admin')) {
//     console.log('Checking auth for admin route');
//     const supabase = createServerClient(
//       process.env.NEXT_PUBLIC_SUPABASE_URL!,
//       process.env.NEXT_PUBLIC_SUPABASE_KEY!,
//       {
//         cookies: {
//           getAll() {
//             return request.cookies.getAll();
//           },
//           setAll(cookiesToSet) {
//             cookiesToSet.forEach(({ name, value }) =>
//               response.cookies.set(name, value)
//             );
//           },
//         },
//       }
//     );

//     const {
//       data: { user },
//     } = await supabase.auth.getUser();

//     if (!user) {
//       const loginUrl = new URL('/login', request.url);
//       return NextResponse.redirect(loginUrl);
//     }
//   }

//   return response;
// }

// export const config = {
//   matcher: [
//     '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
//   ],
// };

import { type NextRequest } from 'next/server';
import { updateSession } from '@/app/utils/supabase/middleware';

export async function middleware(request: NextRequest) {
  return await updateSession(request);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
