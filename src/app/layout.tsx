import "./styles/globals.scss";
import "./styles/button.scss";
import "./styles/section.scss";
import { Inter, Montserrat } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Matheus' Portfolio",
  description: "Matheus Finatto's portfolio showcase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
      </head>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
