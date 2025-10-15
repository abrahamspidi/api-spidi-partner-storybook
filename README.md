# SPIDI API Documentation - Storybook



A comprehensive Storybook documentation site for the SPIDI platform's public API, designed to help developers integrate with SPIDI's payment and commerce services.

## 🚀 Overview

This Storybook serves as the primary documentation hub for SPIDI's public API, providing interactive examples, code snippets, and detailed explanations for all available endpoints and features.

## 📋 Features

- **Interactive API Documentation**: Live examples with editable parameters
- **Code Examples**: Ready-to-use code snippets in multiple languages
- **Request/Response Examples**: Real-world examples with sample data
- **Field Documentation**: Detailed explanations of all API parameters
- **Error Handling**: Common error scenarios and solutions
- **Authentication Guide**: Step-by-step integration instructions

## 🛠️ Tech Stack

- **Storybook**: Latest version for documentation
- **Next.js**: React framework for the main application
- **MDX**: Markdown with JSX for rich documentation
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd api-spidi-storybook
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run storybook
   # or
   yarn storybook
   ```

4. **Build for production**
   ```bash
   npm run build-storybook
   # or
   yarn build-storybook
   ```

## 📁 Project Structure

```
api-spidi-storybook/
├── .storybook/                 # Storybook configuration
│   ├── main.js                # Main configuration
│   ├── preview.js             # Global decorators and parameters
│   └── manager.js             # Manager configuration
├── stories/                   # Story files and MDX documentation
│   ├── api/                   # API endpoint documentation
│   │   ├── authentication/    # Auth-related endpoints
│   │   ├── payments/          # Payment endpoints
│   │   ├── stops/             # Stop management endpoints
│   │   └── sessions/          # Session management endpoints
│   ├── components/            # Reusable documentation components
│   └── examples/              # Code examples and tutorials
├── public/                    # Static assets
├── src/                       # Next.js application source
└── package.json
```

## 📚 Documentation Sections

### 🔐 Authentication
- API key setup and management
- Authentication headers and tokens
- Security best practices

### 💳 Payment Button Sessions
- Creating payment sessions
- Session status management
- Web and mobile integration

### 🛑 Stops Management
- Creating stops
- Stop information and history
- Listing and updating stops
- Stop deletion

### 📊 Data Models
- Request/response schemas
- Field descriptions and types
- Validation rules

## 🎯 Getting Started

1. **Browse the Documentation**: Start with the main navigation to explore different API sections
2. **Try Interactive Examples**: Use the live code editors to test API calls
3. **Copy Code Snippets**: Use the provided examples as starting points for your integration
4. **Check Error Scenarios**: Review common error cases and their solutions

## 🔧 Development

### Adding New Documentation

1. **Create MDX Files**: Add new `.mdx` files in the appropriate `stories/` subdirectory
2. **Use Components**: Leverage existing documentation components for consistency
3. **Add Examples**: Include interactive code examples where possible
4. **Update Navigation**: Add new sections to the main navigation

### Available Components

- `<ApiEndpoint>`: Document API endpoints with request/response examples
- `<CodeBlock>`: Syntax-highlighted code blocks
- `<ParameterTable>`: Tables for documenting API parameters
- `<ExampleRequest>`: Interactive request examples
- `<ErrorExample>`: Error scenario documentation

### Writing Guidelines

- Use clear, concise language
- Include practical examples
- Provide both success and error scenarios
- Keep code examples up-to-date
- Use consistent formatting and structure

## 🌐 API Base URLs

- **Production**: `https://api.spidipagos.com/v1`
- **Sandbox**: `https://sandbox-api.spidipagos.com/v1`
- **Development**: `https://dev-api.spidipagos.com/v1`

## 📞 Support

- **Documentation Issues**: Create an issue in this repository
- **API Support**: Contact SPIDI support team
- **Integration Help**: Check the examples and tutorials section

## 📄 License

This documentation is part of the SPIDI platform and is subject to SPIDI's terms of service.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

**Built with ❤️ for the SPIDI developer community**
