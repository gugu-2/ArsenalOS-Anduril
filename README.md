# ArsenalOS Anduril

ArsenalOS Anduril is a futuristic industrial operations dashboard built with React, TypeScript, and Vite. It presents a dark, tactical command-center interface for monitoring production, product lifecycle, manufacturing execution, and warehouse operations in a single system.

## Overview

This application simulates an end-to-end operational control surface for a modern manufacturing environment, including:

- Command Center overview dashboards
- Product Lifecycle Management (PLM) views
- Manufacturing Execution System (MES) work instructions
- Supply chain and warehouse monitoring
- Real-time telemetry styling inspired by defense-tech system interfaces

## Features

- Responsive industrial dashboard layout
- Sidebar-based navigation between operational domains
- KPI cards for throughput, quality, inventory, and anomalies
- Recharts-based telemetry and stock monitoring visuals
- Motion-driven interface transitions using Framer Motion
- Clean, high-contrast cyber-industrial design system

## Tech Stack

- React 19
- TypeScript
- Vite
- Recharts
- Framer Motion
- Lucide React

## Project Structure

- src/App.tsx — main app shell and tab routing
- src/components/DashboardView.tsx — command center overview
- src/components/PLMView.tsx — product lifecycle management module
- src/components/MESView.tsx — manufacturing execution module
- src/components/WMSView.tsx — warehouse and logistics module
- src/index.css — global theme, layout, and styling

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm

### Install dependencies

npm install

### Run the app locally

npm run dev

The app will be available in the browser via the local Vite development URL.

### Build for production

npm run build

### Preview production build

npm run preview

## Scripts

- npm run dev — starts the Vite development server
- npm run build — runs TypeScript checks and produces a production bundle
- npm run preview — serves the production build locally
- npm run lint — runs the project linting configuration

## Design Notes

The interface is intentionally styled as a tactical control room with:

- dark graphite surfaces
- acid-green accents
- monochrome telemetry panels
- dense status indicators and operational summaries

## License

This project is provided as a front-end prototype and is intended for demonstration or internal operational UI exploration.
