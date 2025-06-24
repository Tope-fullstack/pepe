import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow p-4 flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/orders/create">Create Order</Link>
        <Link href="/wallet">Wallet</Link>
        <Link href="/waybills/auto">Auto Waybill</Link>
        <Link href="/waybills/manual-upload">Manual Waybill</Link>
        <Link href="/admin/dashboard">Admin</Link>
      </nav>
      <main className="p-4">{children}</main>
    </div>
  )
}