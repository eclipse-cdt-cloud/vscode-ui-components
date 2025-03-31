# UI Components for Visual Studio Code Extensions

This is UI component library for WebViews for Visual Studio Code extensions.

## Project Structure

```
src/
│── base/           # Shared functionality
│── vscode/         # VS Code specific functionality

├── <component>/
│   ├── browser/    # React specific code
│   ├── common/     # Shared code between browser and VS Code
│   ├── vscode/     # VS Code integration (converters, webview providers, etc.)

├── <component>/
│   ├── *.tsx       # Components without VS Code integration
```

## Installation

`npm install @eclipse-cdt-cloud/vscode-ui-components`

## Components

- [Tree](./src/tree/README.md): A component that combines tree structure functionality with table capabilities.

For usage information, refer to the component's README.

## Contributing

We welcome contributions on [GitHub](https://github.com/eclipse-cdt-cloud/vscode-ui-components).
Check our [contribution guidelines](./CONTRIBUTING.md) for more info.
This open-source project is part of [Eclipse CDT Cloud](https://eclipse.dev/cdt-cloud/).

## Trademarks

Visual Studio Code, VS Code, and the Visual Studio Code icon are trademarks of Microsoft Corporation. All rights reserved.<br>
Eclipse, CDT, and CDT.cloud are trademarks of Eclipse Foundation, Inc.<br>
