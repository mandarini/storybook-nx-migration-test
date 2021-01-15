branch off `latest-nx-packages-only`

Used the `@nrwl/storybook` migration schematic

```
nx generate @nrwl/storybook:migrate-defaults-5-to-6
```

It upgraded all storybook instances, and it updated package json as well. Choosing to keep old.
(all default values)
