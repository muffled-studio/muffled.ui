import type { Meta, StoryObj } from "@storybook/react"
import type { ColumnDef } from "@tanstack/react-table"

import { DataTable } from "@/registry/ui/data-table"
import { withTheme } from "./utils/theme-decorator"

type Payment = {
  status: string
  email: string
  amount: number
}

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
]

const data: Payment[] = [
  { status: "success", email: "ken99@example.com", amount: 316 },
  { status: "processing", email: "monserrat44@example.com", amount: 837 },
  { status: "failed", email: "carmella@example.com", amount: 721 },
]

function DataTableDemo() {
  return <DataTable columns={columns} data={data} />
}

const meta = {
  title: "Data Table",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Paper: Story = {
  decorators: [withTheme("paper")],
  render: () => <DataTableDemo />,
}

export const Ink: Story = {
  decorators: [withTheme("ink")],
  render: () => <DataTableDemo />,
}
