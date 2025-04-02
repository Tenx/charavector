# CharaVector Landing Page

A modern, responsive landing page for CharaVector, a vector-based AI character modeling service.

## Features

- Clean, modern design with futuristic tech theme
- Responsive layout for mobile and desktop
- Interactive elements with smooth animations
- SVG illustrations for crisp display at any resolution
- Optimized for performance and accessibility

## Project Structure

```
charavector/
├── css/
│   └── styles.css
├── images/
│   ├── ai-agent-cta.svg
│   ├── ai-agents-illustration.svg
│   ├── charavector-logo.svg
│   ├── dashboard-preview.svg
│   ├── favicon.svg
│   ├── grid-pattern.svg
│   ├── hero-video-placeholder.svg
│   └── how-it-works.svg
├── js/
│   └── main.js
├── index.html
└── README.md
```

## Deployment Instructions

### GitHub Deployment

1. Create a new repository on GitHub
2. Push this code to your GitHub repository:
   ```
   git remote add origin https://github.com/yourusername/charavector.git
   git push -u origin main
   ```

### Vercel Deployment

1. Sign up or log in to [Vercel](https://vercel.com/)
2. Click "New Project" and import your GitHub repository
3. Configure the project:
   - Framework Preset: Other
   - Root Directory: ./
   - Build Command: (leave empty)
   - Output Directory: ./
4. Click "Deploy"

### Custom Domain Setup

1. In your Vercel project dashboard, go to "Settings" > "Domains"
2. Add your domain: www.charavector.com
3. Follow Vercel's instructions to configure your DNS settings:
   - Add a CNAME record pointing to cname.vercel-dns.com
   - Or use Vercel's nameservers for complete DNS management

## Development

To run the project locally:

```
cd charavector
python -m http.server 8000
```

Then visit http://localhost:8000 in your browser.

## License

All rights reserved.
