# Project Analysis: 3D Rotating Earth

## Overview
This project is an interactive 3D visualization of the Earth using React, D3.js, and TopoJSON. It features a rotating globe with interactive pins, a star-filled background, and country search functionality.

## Architecture

### Tech Stack
- **Framework**: React (Vite)
- **Visualization**: D3.js (Geographic projections, paths, interactions)
- **Data**: TopoJSON (World map data from `world-atlas`)
- **Styling**: Tailwind CSS
- **Language**: TypeScript

### Key Components

#### 1. `App.tsx` (Main Container)
- Orchestrates the application state.
- Manages `searchQuery` and `selectedDestination`.
- Composes the `Stars`, `Search`, `Earth`, and `DestinationPopup` components.
- Handles event callbacks (search, pin click, close popup).

#### 2. `Earth.tsx` (Core Visualization)
- **Rendering**: Uses an SVG element and D3's `geoOrthographic` projection to render the globe.
- **Data Loading**: Fetches country data from `https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json`.
- **Interaction**:
    - **Rotation**: Auto-rotates using `d3.timer`. Pauses on interaction.
    - **Drag/Zoom**: Implements `d3.drag` and `d3.zoom` behaviors.
    - **Pins**: Renders circular pins for predefined cities. Logic to hide pins when they rotate to the back of the globe (`d3.geoDistance`).
    - **Search Animation**: smooth transitions to rotate the globe to a searched country.
- **Styling**: Uses SVG filters for a "glow" effect and radial gradients for the ocean.

#### 3. `Search.tsx`
- Provides an input tailored for searching countries.

#### 4. `Stars.tsx`
- Likely renders a static or animated background of stars to simulate space.

#### 5. `DestinationPopup.tsx`
- Displays information about a selected destination/pin.

## Data Flow
1. User searches for a country -> `App` updates `searchQuery`.
2. `Earth` detects `searchQuery` change -> Finds country in TopoJSON data -> Calculates centroid -> Animates rotation to target.
3. User clicks a Pin -> `Earth` notifies `App` -> `App` sets `selectedDestination` -> `DestinationPopup` appears; Globe rotation pauses.

## Setup Requirements
- `npm install` to load React, Vite, and types.
- `GEMINI_API_KEY` in `.env.local` (referenced in README, usage to be confirmed).

## Current Status
- Project is runnable (`npm run dev`).
- Dependencies are standard for a React+D3 project.
