import type { Metadata } from "next";
import { Bitter, Lato } from "next/font/google";
import "./globals.css";

const bitter = Bitter({
  variable: "--font-bitter",
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PataFeliz | Petshop e Veterinário em São Paulo",
  description:
    "PataFeliz oferece banho, tosa, consultas veterinárias, hotel e pet shop em São Paulo. Cuide do seu pet com quem realmente ama o que faz.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${bitter.variable} ${lato.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-page text-bark antialiased">
        {children}
      </body>
    </html>
  );
}
