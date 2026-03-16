# Change Log

## 0.1.0
- Updates [Tree](./src/tree/README.md) component:
    - Adds optional support for search in data backend implementation.
        - Configures search behavior through `search.mode` in `CDTTreeProps`.
        - Adds `searchChanged` notification from webview to host.
        - Increases search text debounce from 300ms to 600ms.
- chore: Updated GitHub workflows to node 22.
- chore: Updated dependencies

## 0.0.1
- Initial release of this package.
- Adds [Tree](./src/tree/README.md) component.
