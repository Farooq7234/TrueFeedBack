interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return <main className="flex flex-col min-h-screen">{children}</main>;
}
