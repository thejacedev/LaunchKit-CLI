# <div align="center">🚀 Project LaunchKit</div>

<div align="center">
  
[![GitHub license](https://img.shields.io/github/license/TheRealPerson98/LaunchKit-CLI)](https://github.com/TheRealPerson98/LaunchKit-CLI/blob/main/LICENSE)
[![npm version](https://img.shields.io/npm/v/project-launchkit)](https://www.npmjs.com/package/project-launchkit)
[![CI](https://github.com/TheRealPerson98/LaunchKit-CLI/workflows/CI/badge.svg)](https://github.com/TheRealPerson98/LaunchKit-CLI/actions)
[![GitHub issues](https://img.shields.io/github/issues/TheRealPerson98/LaunchKit-CLI)](https://github.com/TheRealPerson98/LaunchKit-CLI/issues)
[![GitHub stars](https://img.shields.io/github/stars/TheRealPerson98/LaunchKit-CLI)](https://github.com/TheRealPerson98/LaunchKit-CLI/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/TheRealPerson98/LaunchKit-CLI)](https://github.com/TheRealPerson98/LaunchKit-CLI/network)

</div>

<div align="center">
  <strong>An interactive CLI tool for quickly creating new projects with various frameworks and templates.</strong>
</div>

<br />

<div align="center">
  <img src="assets/main.png" alt="Project LaunchKit Main Screen" width="700">
</div>

<hr />

## ✨ Features

<div align="center">
  
| 🚀 Quick project initialization | 📱 Multiple framework support | ⚡ Interactive CLI interface |
|:---:|:---:|:---:|
| **🎨 Beautiful terminal UI** | **✨ Extensive template options** | **🛠️ Customizable configurations** |

</div>

## 📸 Screenshots

<div align="center">
  <table>
    <tr>
      <td><img src="assets/sub1.png" alt="Category Selection" width="100%"></td>
      <td><img src="assets/sub2.png" alt="Framework Selection" width="100%"></td>
    </tr>
    <tr>
      <td colspan="2"><img src="assets/sub3.png" alt="Template Selection" width="100%"></td>
    </tr>
  </table>
</div>

## 📋 Requirements

- Node.js >= 16.x
- npm >= 7.x

## 💻 Installation

```bash
# Global installation
npm install -g project-launchkit

# Or run directly with npx
npx project-launchkit
```

## 🔧 Usage

```bash
# Start the interactive CLI
launchkit

# Or with npx
npx project-launchkit
```

## 📚 Supported Templates

<details>
<summary><b>Expo</b></summary>
<br>
  
- ✅ Default (TypeScript enabled)
- ✅ Blank
- ✅ Blank TypeScript
- ✅ Tabs Navigation
- ✅ Bare Minimum
</details>

<details>
<summary><b>Next.js</b></summary>
<br>
  
- ✅ Default (Latest features)
</details>

<details>
<summary><b>Electron</b></summary>
<br>
  
- ✅ Default (Vanilla JavaScript)
- ✅ Webpack
- ✅ Webpack + TypeScript
- ✅ Vite
- ✅ Vite + TypeScript
</details>

<details>
<summary><b>Vite</b></summary>
<br>
  
- ✅ Vanilla JavaScript
- ✅ Vanilla TypeScript
- ✅ Vue.js
- ✅ Vue.js + TypeScript
- ✅ React
- ✅ React + TypeScript
- ✅ React + SWC
- ✅ React + SWC + TypeScript
- ✅ Preact
- ✅ Preact + TypeScript
- ✅ Lit
- ✅ Lit + TypeScript
- ✅ Svelte
- ✅ Svelte + TypeScript
- ✅ Solid
- ✅ Solid + TypeScript
- ✅ Qwik
- ✅ Qwik + TypeScript
</details>

<details>
<summary><b>React Router</b></summary>
<br>
  
- ✅ Default template
</details>

<details>
<summary><b>Express.js</b></summary>
<br>
  
- ✅ Default (Jade/Pug)
- ✅ EJS template
- ✅ Handlebars template
- ✅ Pug template
- ✅ No view (API mode)
- ✅ EJS + Sass
- ✅ Pug + Stylus
- ✅ Handlebars + Less
</details>

<details>
<summary><b>Nest.js</b></summary>
<br>
  
- ✅ Default (TypeScript)
- ✅ Strict mode
- ✅ Skip Git
- ✅ Skip Install
- ✅ With npm
- ✅ With yarn
- ✅ With pnpm
</details>

<details>
<summary><b>Angular</b></summary>
<br>
  
- ✅ Default (Standalone)
- ✅ With Routing
- ✅ With SCSS
- ✅ With NgModules
- ✅ Minimal setup
- ✅ Strict mode
- ✅ Complete setup
</details>

<details>
<summary><b>Svelte</b></summary>
<br>
  
- ✅ Default template
- ✅ SvelteKit
- ✅ TypeScript
- ✅ Minimal
- ✅ Demo content
</details>

<details>
<summary><b>Blitz.js</b></summary>
<br>
  
- ✅ Default template
- ✅ TypeScript
- ✅ JavaScript
- ✅ Minimal
- ✅ No Git
</details>

## 👨‍💻 Development

```bash
# Clone the repository
git clone https://github.com/TheRealPerson98/LaunchKit-CLI.git
cd LaunchKit-CLI

# Install dependencies
npm install

# Run in development mode
npm run dev

# Build the project
npm run build

# Run the built version
npm start
```

## 🧪 Testing and Quality Assurance

<table>
  <tr>
    <td><code>npm test</code></td>
    <td>Run tests</td>
  </tr>
  <tr>
    <td><code>npm run test:coverage</code></td>
    <td>Run tests with coverage report</td>
  </tr>
  <tr>
    <td><code>npm run test:watch</code></td>
    <td>Run tests in watch mode</td>
  </tr>
  <tr>
    <td><code>npm run lint</code></td>
    <td>Check linting</td>
  </tr>
  <tr>
    <td><code>npm run lint:fix</code></td>
    <td>Fix linting issues</td>
  </tr>
  <tr>
    <td><code>npm run depcheck</code></td>
    <td>Check for unused dependencies</td>
  </tr>
</table>

## 📁 Project Structure

```
LaunchKit-CLI/
├── src/           # Source code
│   ├── config/    # Template configurations
│   ├── types/     # TypeScript types
│   └── utils/     # Utility functions
├── __test__/      # Test files
├── dist/          # Compiled output (generated)
└── coverage/      # Test coverage reports (generated)
```

## 🤝 Contributing

<details>
<summary><b>Prerequisites</b></summary>
<br>
Before submitting a pull request, ensure:

1. All tests pass (<code>npm test</code>)
2. Code coverage meets thresholds (<code>npm run test:coverage</code>)
3. No linting errors exist (<code>npm run lint</code>)
4. No unused dependencies (<code>npm run depcheck</code>)
5. TypeScript compiles successfully (<code>npm run build</code>)
</details>

<details>
<summary><b>Steps to Contribute</b></summary>
<br>

1. Fork the repository
2. Create your feature branch (<code>git checkout -b feature/amazing-feature</code>)
3. Make your changes
4. Run the quality checks:
   ```bash
   npm run build        # Ensure it builds
   npm test            # Run all tests
   npm run lint        # Check code style
   npm run depcheck    # Check dependencies
   ```
5. Commit your changes (<code>git commit -m 'Add some amazing feature'</code>)
6. Push to the branch (<code>git push origin feature/amazing-feature</code>)
7. Open a Pull Request
</details>

<details>
<summary><b>Code Quality Requirements</b></summary>
<br>

- Maintain test coverage above 80%
- Follow the existing code style
- Include tests for new features
- Update documentation as needed
- Keep dependencies minimal and up-to-date
</details>

## 📜 License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

<div align="center">
  
| [Expo](https://expo.dev/) | [Next.js](https://nextjs.org/) | [Electron](https://www.electronjs.org/) |
|:---:|:---:|:---:|
| **[Vite](https://vitejs.dev/)** | **[React Router](https://reactrouter.com/)** | **[Express](https://expressjs.com/)** |
| **[Nest.js](https://nestjs.com/)** | **[Angular](https://angular.io/)** | **[Svelte](https://svelte.dev/)** |
| **[Blitz.js](https://blitzjs.com/)** | **[Inquirer.js](https://github.com/SBoudrias/Inquirer.js/)** | |

</div>

<hr />

<div align="center">
  <sub>Built with ❤️ by <a href="https://github.com/TheRealPerson98">TheRealPerson98</a></sub>
</div> 