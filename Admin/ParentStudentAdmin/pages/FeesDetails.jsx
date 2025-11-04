import { useState } from 'react'
import { Receipt, Download, DollarSign, CreditCard, FileText } from 'lucide-react'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const feeLedger = [
  {
    id: 1,
    feePeriod: 'January 2024',
    invoiceType: 'Monthly Fee',
    invoiceNumber: 'INV-2024-001',
    invoiceDate: '2024-01-01',
    lastDate: '2024-01-15',
    netPayable: 5000,
    amountReceived: 5000,
    feeBalance: 0,
    payMode: 'Online',
    receiptNumber: 'RCP-2024-001',
    status: 'paid',
  },
  {
    id: 2,
    feePeriod: 'February 2024',
    invoiceType: 'Monthly Fee',
    invoiceNumber: 'INV-2024-002',
    invoiceDate: '2024-02-01',
    lastDate: '2024-02-15',
    netPayable: 5000,
    amountReceived: 5000,
    feeBalance: 0,
    payMode: 'Online',
    receiptNumber: 'RCP-2024-002',
    status: 'paid',
  },
  {
    id: 3,
    feePeriod: 'March 2024',
    invoiceType: 'Monthly Fee',
    invoiceNumber: 'INV-2024-003',
    invoiceDate: '2024-03-01',
    lastDate: '2024-03-15',
    netPayable: 5000,
    amountReceived: 2500,
    feeBalance: 2500,
    payMode: 'Cash',
    receiptNumber: 'RCP-2024-003',
    status: 'partial',
  },
  {
    id: 4,
    feePeriod: 'April 2024',
    invoiceType: 'Monthly Fee',
    invoiceNumber: 'INV-2024-004',
    invoiceDate: '2024-04-01',
    lastDate: '2024-04-15',
    netPayable: 5000,
    amountReceived: 0,
    feeBalance: 5000,
    payMode: '-',
    receiptNumber: '-',
    status: 'pending',
  },
  {
    id: 5,
    feePeriod: 'Annual Charges',
    invoiceType: 'Annual Fee',
    invoiceNumber: 'INV-2024-005',
    invoiceDate: '2024-01-01',
    lastDate: '2024-01-31',
    netPayable: 10000,
    amountReceived: 10000,
    feeBalance: 0,
    payMode: 'Online',
    receiptNumber: 'RCP-2024-005',
    status: 'paid',
  },
]

const feeStats = {
  totalFee: 30000,
  feePaid: 22500,
  feeDue: 7500,
  lateFeeFine: 500,
}

const monthlyFeeData = [
  { month: 'Jan', total: 5000, paid: 5000, due: 0 },
  { month: 'Feb', total: 5000, paid: 5000, due: 0 },
  { month: 'Mar', total: 5000, paid: 2500, due: 2500 },
  { month: 'Apr', total: 5000, paid: 0, due: 5000 },
]

export default function FeesDetails() {
  const [selectedInvoice, setSelectedInvoice] = useState(null)

  const handleDownloadInvoice = (invoice) => {
    alert(`Downloading invoice: ${invoice.invoiceNumber}`)
    // In real app, this would download the PDF
  }

  const handlePayOnline = (invoice) => {
    alert(`Redirecting to payment gateway for ${invoice.invoiceNumber}`)
    // In real app, this would redirect to payment gateway
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-6 text-white">
        <div className="flex items-center space-x-4">
          <Receipt className="w-8 h-8" />
          <div>
            <h2 className="text-2xl font-bold">Fees Details</h2>
            <p className="text-green-100 mt-1">View and manage your fee payments</p>
          </div>
        </div>
      </div>

      {/* Fee Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Total Fee</p>
              <p className="text-2xl font-bold text-gray-800">₹{feeStats.totalFee.toLocaleString()}</p>
            </div>
            <DollarSign className="w-8 h-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Fee Paid</p>
              <p className="text-2xl font-bold text-gray-800">₹{feeStats.feePaid.toLocaleString()}</p>
            </div>
            <Receipt className="w-8 h-8 text-green-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-red-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Fee Due</p>
              <p className="text-2xl font-bold text-gray-800">₹{feeStats.feeDue.toLocaleString()}</p>
            </div>
            <DollarSign className="w-8 h-8 text-red-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-yellow-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Late Fee Fine</p>
              <p className="text-2xl font-bold text-gray-800">₹{feeStats.lateFeeFine.toLocaleString()}</p>
            </div>
            <Receipt className="w-8 h-8 text-yellow-500" />
          </div>
        </div>
      </div>

      {/* Fee Chart */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center space-x-4 mb-6">
          <DollarSign className="w-6 h-6 text-green-600" />
          <h3 className="text-xl font-bold text-gray-800">Monthly Fee Overview</h3>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={monthlyFeeData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip formatter={(value) => `₹${value.toLocaleString()}`} />
            <Legend />
            <Bar dataKey="paid" fill="#10b981" name="Paid" />
            <Bar dataKey="due" fill="#ef4444" name="Due" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Fee Ledger */}
      <div className="bg-white rounded-xl shadow-md p-6 overflow-x-auto">
        <div className="flex items-center space-x-4 mb-6">
          <FileText className="w-6 h-6 text-blue-600" />
          <h3 className="text-xl font-bold text-gray-800">Student Fee Ledger</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1000px]">
            <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
              <tr>
                <th className="px-4 py-3 text-left">Fee Period</th>
                <th className="px-4 py-3 text-left">Invoice Type</th>
                <th className="px-4 py-3 text-left">Invoice #</th>
                <th className="px-4 py-3 text-left">Invoice Date</th>
                <th className="px-4 py-3 text-left">Last Date</th>
                <th className="px-4 py-3 text-right">Net Payable</th>
                <th className="px-4 py-3 text-right">Amount Received</th>
                <th className="px-4 py-3 text-right">Fee Balance</th>
                <th className="px-4 py-3 text-left">Pay Mode</th>
                <th className="px-4 py-3 text-left">Receipt #</th>
                <th className="px-4 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {feeLedger.map((invoice) => (
                <tr key={invoice.id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-4 py-3 text-gray-800">{invoice.feePeriod}</td>
                  <td className="px-4 py-3 text-gray-700">{invoice.invoiceType}</td>
                  <td className="px-4 py-3 text-gray-700">{invoice.invoiceNumber}</td>
                  <td className="px-4 py-3 text-gray-700">{invoice.invoiceDate}</td>
                  <td className="px-4 py-3 text-gray-700">{invoice.lastDate}</td>
                  <td className="px-4 py-3 text-right font-semibold text-gray-800">₹{invoice.netPayable.toLocaleString()}</td>
                  <td className="px-4 py-3 text-right text-green-600 font-semibold">₹{invoice.amountReceived.toLocaleString()}</td>
                  <td className={`px-4 py-3 text-right font-semibold ${
                    invoice.feeBalance === 0 ? 'text-green-600' : 'text-red-600'
                  }`}>
                    ₹{invoice.feeBalance.toLocaleString()}
                  </td>
                  <td className="px-4 py-3 text-gray-700">{invoice.payMode}</td>
                  <td className="px-4 py-3 text-gray-700">{invoice.receiptNumber}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleDownloadInvoice(invoice)}
                        className="p-2 hover:bg-blue-100 rounded-lg transition-colors"
                        title="Download Invoice"
                      >
                        <Download className="w-4 h-4 text-blue-600" />
                      </button>
                      {invoice.status === 'pending' || invoice.status === 'partial' ? (
                        <button
                          onClick={() => handlePayOnline(invoice)}
                          className="p-2 hover:bg-green-100 rounded-lg transition-colors"
                          title="Pay Online"
                        >
                          <CreditCard className="w-4 h-4 text-green-600" />
                        </button>
                      ) : (
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          invoice.status === 'paid'
                            ? 'bg-green-100 text-green-800'
                            : invoice.status === 'partial'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {invoice.status === 'paid' ? 'Paid' : invoice.status === 'partial' ? 'Partial' : 'Pending'}
                        </span>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Summary Card */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-6 text-white">
          <h3 className="text-xl font-bold mb-4">Payment Summary</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Total Fee:</span>
              <span className="font-bold">₹{feeStats.totalFee.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Fee Paid:</span>
              <span className="font-bold">₹{feeStats.feePaid.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Fee Due:</span>
              <span className="font-bold">₹{feeStats.feeDue.toLocaleString()}</span>
            </div>
            <div className="flex justify-between pt-3 border-t border-blue-400">
              <span>Total Outstanding:</span>
              <span className="font-bold text-xl">₹{(feeStats.feeDue + feeStats.lateFeeFine).toLocaleString()}</span>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-6 text-white">
          <h3 className="text-xl font-bold mb-4">Payment Instructions</h3>
          <div className="space-y-3 text-sm">
            <p>• Payments can be made online using credit/debit cards or net banking</p>
            <p>• Late fees will be applicable after the due date</p>
            <p>• Download invoices for all payments made</p>
            <p>• Contact the finance office for any payment-related queries</p>
          </div>
        </div>
      </div>
    </div>
  )
}

