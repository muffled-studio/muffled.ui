"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/registry/ui/data-table";

type Payment = {
  status: string;
  email: string;
  amount: number;
};

const columns: ColumnDef<Payment>[] = [
  { accessorKey: "status", header: "status" },
  { accessorKey: "email", header: "email" },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">amount</div>,
    cell: ({ row }) => (
      <div className="text-right tabular-nums">{row.getValue("amount")}</div>
    ),
  },
];

const data: Payment[] = [
  { status: "success", email: "ken99@example.com", amount: 316 },
  { status: "processing", email: "monserrat44@example.com", amount: 837 },
  { status: "failed", email: "carmella@example.com", amount: 721 },
];

export function DataTableDemo() {
  return <DataTable columns={columns} data={data} />;
}
