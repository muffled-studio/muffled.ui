import type { Meta, StoryObj } from "@storybook/react";

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
import { withTheme } from "./utils/theme-decorator";

const invoices = [
  { invoice: "INV001", status: "paid", method: "card", amount: "$250.00" },
  { invoice: "INV002", status: "pending", method: "paypal", amount: "$150.00" },
  { invoice: "INV003", status: "unpaid", method: "bank", amount: "$350.00" },
];

function TableDemo() {
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

const meta = {
  title: "Table",
  component: Table,
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Paper: Story = {
  decorators: [withTheme("paper")],
  render: () => <TableDemo />,
};

export const Ink: Story = {
  decorators: [withTheme("ink")],
  render: () => <TableDemo />,
};
