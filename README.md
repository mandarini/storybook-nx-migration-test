branch off `latest-nx-packages-only`

Used the `@nrwl/storybook` migration schematic

```
nx generate @nrwl/storybook:migrate-defaults-5-to-6 --name=ui-test
```

It migrated ONLY the storybook instance of the project provided.

## BUT

It updated packages as well. It __should not__ update packages.
FIX THIS
