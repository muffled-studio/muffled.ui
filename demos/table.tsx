"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/ui/table";

const invoices = [
  { invoice: "INV001", status: "paid", method: "card", amount: "$250.00" },
  { invoice: "INV002", status: "pending", method: "paypal", amount: "$150.00" },
  { invoice: "INV003", status: "unpaid", method: "bank", amount: "$350.00" },
];

export function TableDemo() {
  return (
    <Table>
      <TableCaption>recent invoices</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>invoice</TableHead>
          <TableHead>status</TableHead>
          <TableHead>method</TableHead>
          <TableHead className="text-right">amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((row) => (
          <TableRow key={row.invoice}>
            <TableCell className="font-medium">{row.invoice}</TableCell>
            <TableCell>{row.status}</TableCell>
            <TableCell>{row.method}</TableCell>
            <TableCell className="text-right">{row.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>total</TableCell>
          <TableCell className="text-right">$750.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
