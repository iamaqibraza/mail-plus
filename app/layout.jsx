import "./globals.css"
import { Manrope } from "next/font/google"

const manrope = Manrope({ subsets: ["latin"] })

export const metadata = {
    title: "Mail+",
    description: "Redefine your email experience with Mail+",
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={manrope.className}>{children}</body>
        </html>
    )
}
