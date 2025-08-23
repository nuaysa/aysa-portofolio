import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Allysa's Profile",
  description: "Get to know me better with this portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${montserrat.variable} antialiased`}>
        {children}
        <GoogleAnalytics gaId="G-57B0WG2648" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
      var sc_project=13157741; 
      var sc_invisible=1; 
      var sc_security="aa6aa044"; 
    `,
          }}
        />
        <script type="text/javascript" src="https://www.statcounter.com/counter/counter.js" async></script>
        <noscript>
          <div className="statcounter">
            <a title="Web Analytics" href="https://statcounter.com/" target="_blank">
              <img className="statcounter" src="https://c.statcounter.com/13157741/0/aa6aa044/1/" alt="Web Analytics" referrerPolicy="no-referrer-when-downgrade" />
            </a>
          </div>
        </noscript>
      </body>
    </html>
  );
}
