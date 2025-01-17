# 🚀 React + WP + Woo Theme

This is a custom WordPress theme developed for a job interview at **BoomBit**. It integrates React with WordPress and WooCommerce to create a dynamic and modern eCommerce experience.

## 🛠️ Features

- Seamless integration with WooCommerce.
- Built-in support for Advanced Custom Fields (ACF Pro).
- React-based front-end for a faster and smoother user experience.
- SVG support for sharper icons and graphics.
- Development and production modes for streamlined workflows.

## 📥 Installation

### Production Mode

1. **Clone the repository** into the WordPress `wp-content/themes` folder:
   ```bash
   git clone <repository-url> your-theme-folder
   ```
2. **Build the theme assets**:
   ```bash
   npm run build
   ```
3. **Set the `DEV_MODE` constant to `false`** in the `functions.php` file:
   ```php
   define('DEV_MODE', false);
   ```
4. **Activate the theme** in the WordPress admin panel.

## 🛑 Requirements

Make sure the following plugins are installed and activated:

- 🛒 **WooCommerce**
- 🔧 **Advanced Custom Fields (ACF Pro)**
- 📝 **Classic Editor**
- 🔗 **CoCart API**
- 🖼️ **SVG Support**

## 👨‍💻 Development Mode

To enable development mode:

1. **Set the `DEV_MODE` constant to `true`** in the `functions.php` file:
   ```php
   define('DEV_MODE', true);
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Run the development server**:
   ```bash
   npm run dev
   ```

This will enable hot-reloading and other development tools to help you iterate faster.

## 🚧 Notes

- Ensure the required plugins are installed and configured properly.
- For production builds, always switch `DEV_MODE` to `false` and run `npm run build`.
- If you encounter issues, double-check your WordPress and WooCommerce configurations.

## 🎉 Happy Coding!

We hope this theme exceeds expectations and showcases your skills effectively!
