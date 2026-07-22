# pagination

2026-07-22, golden pair via base-nova anatomy + muffled link fix (`buttonVariants` on `<a>`, not Button render). Migrated.

## Changed

- `registry/ui/pagination.tsx`: removed `Button asChild` wrapper; `PaginationLink` applies `buttonVariants` directly on `<a>` (avoids Base UI Button `role="button"` on links). Leftover scan clean of radix.

## Left alone

- Stories/demos (already plain href links).

## Behavior changes

- Links are native `<a>` with button styles — no Button primitive in the link path.

## Verify by hand

- Active page outline variant + aria-current. Prev/next icons. Ghost inactive links. No role=button on anchors.
