# CoachPro - Coaching Business Website

A comprehensive coaching business website built with React, featuring multiple coaching programs, courses, events, and a blog.

## 🚀 Quick Start

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone or download the project files** to your local machine

2. **Navigate to the project directory**
   ```bash
   cd coaching-business-website
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser** and go to `http://localhost:5173`

The website will automatically reload when you make changes to the code.

## 📁 Project Structure

```
coaching-business-website/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/              # Main pages
│   │   ├── Home.jsx
│   │   ├── Subscription.jsx
│   │   ├── Courses.jsx
│   │   ├── Events.jsx
│   │   ├── Blog.jsx
│   │   └── BlogPost.jsx
│   ├── common/             # Utility components
│   │   └── SafeIcon.jsx
│   ├── App.jsx             # Main app component
│   ├── main.jsx           # App entry point
│   └── index.css          # Global styles
├── package.json           # Project dependencies
├── tailwind.config.js     # Tailwind CSS configuration
└── vite.config.js         # Vite configuration
```

## 🛠 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Features

- **Home Page** - Hero section, features, program preview, testimonials
- **Subscription Page** - 3 coaching programs (Basic, Professional, Premium)
- **Courses Page** - Professional development courses with filtering
- **Events Page** - Free events, workshops, and webinars
- **Blog** - Articles with categories, search, and individual post pages
- **Responsive Design** - Works on all devices
- **Modern Animations** - Smooth transitions with Framer Motion

## 🧰 Technologies Used

- React 18
- React Router DOM
- Tailwind CSS
- Framer Motion
- React Icons
- Date-fns
- Vite

## 📝 Customization

### Updating Content
- Modify the data arrays in each page component to update content
- Replace placeholder images with your own
- Update company name, colors, and branding in the components

### Styling
- Edit `tailwind.config.js` for theme customization
- Modify component styles directly in the JSX files
- Add custom CSS in `src/index.css` if needed

## 🌐 Deployment

To deploy the website:

1. Build the project:
   ```bash
   npm run build
   ```

2. The `dist` folder will contain your production-ready files

3. Deploy the `dist` folder to your hosting service (Netlify, Vercel, GitHub Pages, etc.)

## 📞 Support

If you encounter any issues, check:
1. Node.js version (should be 14+)
2. All dependencies are installed (`npm install`)
3. No port conflicts (default port is 5173)

## 🔧 Troubleshooting

**Port already in use?**
- The dev server will automatically try the next available port
- Or specify a different port: `npm run dev -- --port 3000`

**Dependencies not installing?**
- Try deleting `node_modules` and `package-lock.json`, then run `npm install` again
- Make sure you have a stable internet connection

**Build errors?**
- Check for any syntax errors in the code
- Ensure all imports are correct
- Run `npm run lint` to check for linting issues