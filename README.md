# The Pasture Church Website

A modern, responsive church website built with Next.js 14, TypeScript, and Tailwind CSS. Designed to welcome the unchurched to a place of rest and worship.

## Features

- **Landing Page** - Auto-transitions to home page with elegant animations
- **Home Page** - Photo carousel, navigation cards, and call-to-action sections
- **About Us** - Mission, vision, beliefs (PCA), and pastor information
- **Sermons** - Under construction page for future sermon archive
- **Gatherings** - Information about Sunday worship and Friday night gatherings
- **Giving** - Venmo integration (@ILSHINCHURCH) with biblical teaching on stewardship
- **Contact** - Form with mailto functionality
- **Plan Your Visit** - Location, times, what to expect, and Connect Card link
- **Responsive Design** - Mobile-friendly navigation and layouts
- **Static Export** - Optimized for CloudFront deployment

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Static export ready for AWS CloudFront/S3

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Building for Production

### Static Export (for CloudFront)

1. Build the static site:
```bash
npm run build
```

2. The static files will be generated in the `out` directory

### Deploy to AWS CloudFront

1. **Create an S3 Bucket:**
   - Go to AWS S3 Console
   - Create a new bucket (e.g., `the-pasture-website`)
   - Enable static website hosting
   - Set index document to `index.html`

2. **Upload Files:**
   ```bash
   aws s3 sync out/ s3://the-pasture-website --delete
   ```

3. **Create CloudFront Distribution:**
   - Go to CloudFront Console
   - Create distribution
   - Set origin to your S3 bucket
   - Set default root object to `index.html`
   - Configure custom error responses:
     - 404 → /404.html (404)
     - 403 → /404.html (404)

4. **Update DNS:**
   - Add CNAME record pointing to CloudFront distribution URL
   - Or use Route 53 with an A record (alias)

## Customization

### Update Contact Email

Edit `app/contact/page.tsx` line 22 and replace `your-email@example.com` with your church email:

```typescript
const mailtoLink = `mailto:YOUR-EMAIL@example.com?subject=...`;
```

### Update Social Media Links

Update Instagram and YouTube links in:
- `app/components/Footer.tsx`
- `app/home/page.tsx`

### Update Pastor Information

Replace placeholder text in `app/about/page.tsx` with actual pastor bio and details.

### Update Location & Address

Edit `app/visit/page.tsx` to add your church's physical address and location details.

### Replace Placeholder Text

Search for `[placeholder text]` and `[...]` throughout the codebase to find areas that need customization.

## Project Structure

```
pasture-website/
├── app/
│   ├── about/          # About Us page
│   ├── components/     # Header & Footer components
│   ├── contact/        # Contact page with form
│   ├── gatherings/     # Sunday & Friday gatherings
│   ├── giving/         # Giving page with Venmo
│   ├── home/           # Main home page
│   ├── sermons/        # Sermons (under construction)
│   ├── visit/          # Plan Your Visit page
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Landing page
│   └── globals.css     # Global styles
├── public/             # Static assets (images, logos)
└── next.config.ts      # Next.js configuration
```

## Color Scheme

Based on Psalm 23 and pastoral themes:
- Primary: Emerald greens (#047857, #059669, #10b981)
- Accents: Blue, Purple, Amber, Teal, Rose
- Neutrals: Grays for text and backgrounds

## License

This project is private and proprietary to The Pasture church.

## Support

For questions or issues, please contact the church administrator.
