branch off `latest-nx-packages-only`

Used the `@nrwl/storybook` migration schematic

```
nx generate @nrwl/storybook:migrate-defaults-5-to-6 --keep-old=false
```

It migrated all storybook instances, and it updated package json as well. Deleted old successfuly

## BUT

**DID NOT** delete the root `.storybook/addons.js`
FIX THIS
