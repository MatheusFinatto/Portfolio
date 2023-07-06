import "./styles/globals.scss";
import "./styles/button.scss";
import "./styles/section.scss";
import { Inter, Montserrat, Poppins } from "next/font/google";

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
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
