import type { ComponentType } from "react";

import { CardDemo } from "./card";
import { FormDemo } from "./form";
import { InputDemo } from "./input";
import { BreadcrumbDemo } from "./breadcrumb";
import { CommandDemo } from "./command";
import { HoverCardDemo } from "./hover-card";
import { SeparatorDemo } from "./separator";
import { PopoverDemo } from "./popover";
import { SwitchDemo } from "./switch";
import { EmptyDemo } from "./empty";
import { AlertDemo } from "./alert";
import { DrawerDemo } from "./drawer";
import { CheckboxDemo } from "./checkbox";
import { DialogDemo } from "./dialog";
import { DatePickerDemo } from "./date-picker";
import { AvatarDemo } from "./avatar";
import { AccordionDemo } from "./accordion";
import { MenubarDemo } from "./menubar";
import { FieldDemo } from "./field";
import { InputOTPDemo } from "./input-otp";
import { SelectDemo } from "./select";
import { TextareaDemo } from "./textarea";
import { NavigationMenuDemo } from "./navigation-menu";
import { DataTableDemo } from "./data-table";
import { TabsDemo } from "./tabs";
import { ToggleGroupDemo } from "./toggle-group";
import { SheetDemo } from "./sheet";
import { DropdownMenuDemo } from "./dropdown-menu";
import { InputGroupDemo } from "./input-group";
import { ProgressDemo } from "./progress";
import { CollapsibleDemo } from "./collapsible";
import { SkeletonDemo } from "./skeleton";
import { RadioGroupDemo } from "./radio-group";
import { PaginationDemo } from "./pagination";
import { TableDemo } from "./table";
import { SidebarDemo } from "./sidebar";
import { ButtonGroupDemo } from "./button-group";
import { SliderDemo } from "./slider";
import { ComboboxDemo } from "./combobox";
import { KbdDemo } from "./kbd";
import { ScrollAreaDemo } from "./scroll-area";
import { TooltipDemo } from "./tooltip";
import { ItemDemo } from "./item";
import { AlertDialogDemo } from "./alert-dialog";
import { BadgeDemo } from "./badge";
import { ButtonDemo } from "./button";
import { CalendarDemo } from "./calendar";
import { LabelDemo } from "./label";
import { SonnerDemo } from "./sonner";
import { SpinnerDemo } from "./spinner";
import { ToggleDemo } from "./toggle";

export type DemoComponent = ComponentType<{ theme?: "light" | "dark" }>;

export const demos: Record<string, DemoComponent> = {
  "card": CardDemo,
  "form": FormDemo,
  "input": InputDemo,
  "breadcrumb": BreadcrumbDemo,
  "command": CommandDemo,
  "hover-card": HoverCardDemo,
  "separator": SeparatorDemo,
  "popover": PopoverDemo,
  "switch": SwitchDemo,
  "empty": EmptyDemo,
  "alert": AlertDemo,
  "drawer": DrawerDemo,
  "checkbox": CheckboxDemo,
  "dialog": DialogDemo,
  "date-picker": DatePickerDemo,
  "avatar": AvatarDemo,
  "accordion": AccordionDemo,
  "menubar": MenubarDemo,
  "field": FieldDemo,
  "input-otp": InputOTPDemo,
  "select": SelectDemo,
  "textarea": TextareaDemo,
  "navigation-menu": NavigationMenuDemo,
  "data-table": DataTableDemo,
  "tabs": TabsDemo,
  "toggle-group": ToggleGroupDemo,
  "sheet": SheetDemo,
  "dropdown-menu": DropdownMenuDemo,
  "input-group": InputGroupDemo,
  "progress": ProgressDemo,
  "collapsible": CollapsibleDemo,
  "skeleton": SkeletonDemo,
  "radio-group": RadioGroupDemo,
  "pagination": PaginationDemo,
  "table": TableDemo,
  "sidebar": SidebarDemo,
  "button-group": ButtonGroupDemo,
  "slider": SliderDemo,
  "combobox": ComboboxDemo,
  "kbd": KbdDemo,
  "scroll-area": ScrollAreaDemo,
  "tooltip": TooltipDemo,
  "item": ItemDemo,
  "alert-dialog": AlertDialogDemo,
  badge: BadgeDemo,
  button: ButtonDemo,
  calendar: CalendarDemo,
  label: LabelDemo,
  sonner: SonnerDemo,
  spinner: SpinnerDemo,
  toggle: ToggleDemo,
};

export const demoSlugs = ["card","form","input","breadcrumb","command","hover-card","separator","popover","switch","empty","alert","drawer","checkbox","dialog","date-picker","avatar","accordion","menubar","field","input-otp","select","textarea","navigation-menu","data-table","tabs","toggle-group","sheet","dropdown-menu","input-group","progress","collapsible","skeleton","radio-group","pagination","table","sidebar","button-group","slider","combobox","kbd","scroll-area","tooltip","item","alert-dialog"] as const;
