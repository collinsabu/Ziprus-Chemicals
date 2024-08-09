import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = req.nextUrl;

  const adminRoutes = ['/balance', '/viewloadingandpayment','/loadingandpayment/custmerpayment', '/e-learning/adminLevelTwo', '/e-learning/marketing'];
  const userRoutes = [
    '/admin', 
    '/loadingandpayment', 
    '/report', 
    '/admin/contactlist', 
    '/viewreport', 
    '/e-learning',
  ];
  const publicRoutes = [
    '/login', 
    '/register', 
    '/about', 
    '/faq', 
    '/contact', 
    '/guarantee', 
    '/impact', 
    '/testimonial', 
    '/partnership'
  ];

  // Allow access to public routes
  if (publicRoutes.some(route => pathname.startsWith(route))) {
    console.log('Accessing public route');
    return NextResponse.next();
  }

  // If no token, redirect to login
  if (!token) {
    console.log('No token found, redirecting to login');
    return NextResponse.redirect(new URL('/login', req.url));
  }

  // Allow access to /e-learning for all authenticated users
  if (pathname === '/e-learning') {
    console.log('Accessing /e-learning route');
    return NextResponse.next();
  }

  // Restrict access to /e-learning/adminLevelTwo and /e-learning/marketing to admins
  if (adminRoutes.some(route => pathname.startsWith(route))) {
    if (token.role === 'admin') {
      console.log('Accessing admin route');
      return NextResponse.next();
    } else {
      console.log('Not an admin, redirecting to /403');
      return NextResponse.redirect(new URL('/403', req.url));
    }
  }

  // Allow access to other user routes if the user is authenticated
  if (userRoutes.some(route => pathname.startsWith(route))) {
    console.log('Accessing user route');
    return NextResponse.next();
  }

  // Default behavior: deny access
  console.log('Access denied');
  return NextResponse.redirect(new URL('/403', req.url));
}

export const config = {
  matcher: [
    '/admin/:path*', 
    '/report/:path*',
    '/loadingandpayment', 
    '/report', 
    '/admin/contactlist', 
    '/viewreport',
    '/viewreport/:path*' ,
    '/viewloadingandpayment', 
    '/loadingandpayment/custmerpayment',
    '/balance', 
    '/about', 
    '/faq', 
    '/contact', 
    '/guarantee', 
    '/impact', 
    '/testimonial', 
    '/partnership', 
    '/login', 
    '/register',
    '/e-learning',
    '/e-learning/adminLevelTwo',
    '/e-learning/marketing'
  ],
};
