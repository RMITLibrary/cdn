# RMIT Work Safe Learning Resource

## Overview
This project is a static HTML implementation of the RMIT Work Safe learning resource, originally developed as a custom WordPress theme by the VE Design Team. The static version has been uplifted and is now maintained by the Digital Learning Team (DLT), Library at RMIT.

## Project Structure
The learning resource consists of multiple HTML pages covering different aspects of workplace safety:

- `index.html` - Main entry point and course content index
- `intro-workplace-safety-accordion.html` - Introduction to workplace safety with accordions
- `hazard-categories-carousel.html` - Workplace hazards carousel
- `hazard-symbols-identification.html` - Hazard symbols flipcards
- `risk-assessment-matrix-hotspot.html` - Risk assessment matrix hotspot
- `impacts-not-working-safely.html` - Safety responsibilities flipcards
- `hierarchy-controls-carousel.html` - Hierarchy of controls carousel

## Features

### Interactive Components
1. **Carousels** (pages 38 and 234)
   - Fully keyboard accessible with arrow key navigation
   - Thumbnails for direct navigation
   - ARIA attributes for screen reader support
   - Visual indicators for active state

2. **Flip Cards** (pages 42 and 81)
   - Interactive cards that flip to reveal additional information
   - Keyboard accessible with focus management
   - Mobile responsive design

3. **Accordions** (page 14)
   - Expandable content sections with dynamic image display on mobile
   - Keyboard accessible
   - Responsive design for different screen sizes

### Accessibility Features
- Keyboard navigation support for all interactive elements
- ARIA attributes for screen reader compatibility
- Focus-visible styling for keyboard users
- Tab order management
- Alt text for all images
- Proper heading structure

### Mobile Optimisations
- Responsive design for all screen sizes
- Special handling for carousel navigation on small screens
- Mobile-specific styling for interactive elements
- Improved spacing and layout for touch interfaces

## Technical Implementation

### Dependencies
- jQuery (included in wp-content/themes/233/js/)
- Bootstrap 4 (included via theme.min.css)
- Font Awesome (for icons)

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- IE11 compatibility maintained where possible

## Maintenance Guidelines

### Modifying Interactive Components
- **Carousels**: Maintain ARIA attributes and event handlers when adding slides
- **Flip Cards**: Ensure both sides have appropriate content and focus management
- **Accordions**: Keep image-content relationship consistent

### Accessibility Considerations
- Maintain keyboard navigation support
- Ensure all interactive elements have focus states
- Provide descriptive alt text for images
- Test with screen readers periodically

## LMS Integration
The learning resource includes `ltiTriggerResize.js` for proper resizing when embedded in Learning Management Systems via LTI. This ensures content displays correctly within iframe containers.

## Contact Information
For any queries, please contact: digital.learning.library@rmit.edu.au

## Original Development
This project was originally developed as a learning resource by the VE Design Team (https://emedia.rmit.edu.au/ptsws/).


#### © RMIT University Library

###### Developed by RMIT Library Digital Learning

## Contact

- Repo Admin: Jack Dunstan ([jack.dunstan@rmit.edu.au](mailto:jack.dunstan@rmit.edu.au))
- Contact: Karl Ervine ([karl.ervine@rmit.edu.au](mailto:karl.ervine@rmit.edu.au))
- Additional Contact: [digital.learning.library@rmit.edu.au](mailto:digital.learning.library@rmit.edu.au)

## Resources

- [Active RMIT Library GitHub](https://github.com/RMITLibrary)
- [Archived RMIT Library GitHub](https://github.com/RMITLibrary-Archived) 
