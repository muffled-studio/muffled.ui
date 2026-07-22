# label

2026-07-22, golden pair via base-nova (native label) + muffled class replay. Migrated.

## Changed

- `registry/ui/label.tsx`: native `<label>`; no radix. Kept muffled mono/lowercase/opacity. Leftover scan clean.

## Left alone

- form.tsx still types against radix Label — batch E.

## Behavior changes

None.

## Verify by hand

- Form + Field stories: label associates with control, disabled peer opacity.
