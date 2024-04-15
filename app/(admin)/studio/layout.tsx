import '../../style/globals.css';

export const metadata = {
  title: 'PrimeReserved',
  description: 'Created by PrimeReserved',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
