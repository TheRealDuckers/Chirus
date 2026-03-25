# Logo Integration Guide

## How to Add Your Square Logo

Your website now has a placeholder for your square logo in the header. Here's how to replace it with your actual logo:

### Option 1: Replace the Placeholder (Recommended)

1. **Save your logo** as `logo.png`, `logo.svg`, or `logo.jpg`
2. **Place it** in the `/src/app/assets/` directory (create this folder if it doesn't exist)
3. **Update the Header component** at `/src/app/components/header.tsx`:

Replace this section (around line 21):
```tsx
<div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-blue-700 rounded-lg flex items-center justify-center shadow-lg">
  <span className="text-white text-xl font-bold">C</span>
</div>
```

With:
```tsx
<img 
  src="/path/to/your/logo.png" 
  alt="Chirus Logo" 
  className="w-12 h-12 object-contain"
/>
```

### Option 2: Use an External URL

If your logo is hosted elsewhere, simply use the URL:
```tsx
<img 
  src="https://your-domain.com/logo.png" 
  alt="Chirus Logo" 
  className="w-12 h-12 object-contain"
/>
```

### Logo Specifications

- **Recommended size**: 48x48 pixels (or any square dimension)
- **Format**: PNG with transparency, SVG, or JPG
- **Background**: Transparent PNG or SVG works best
- The placeholder is currently styled with a gradient background and rounded corners
- The logo area is 48px × 48px (w-12 h-12 in Tailwind)

### Current Logo Placeholder

The current placeholder shows a teal/blue gradient square with the letter "C" - this matches your brand colors and provides a professional appearance until you add your actual logo.
