import './globals.css'
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReduxProvider } from '../../store/provide';
import React from 'react';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bookstore',
  description: 'A single page bookstore that allows users to view booklist, add and delete books',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className='text-center'>
          <h2 className='text-xl py-10'>My Little Bookstore</h2>
        </nav>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  )
}
