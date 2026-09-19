# Portfolio Capstone: Final Portfolio

## 1. Project Overview & Deployment
- **Live Deployment:** [https://jtucker718.github.io/Portfolio/](https://jtucker718.github.io/Portfolio/)
- **Repository Link:** [https://github.com/JTucker718/Portfolio](https://github.com/JTucker718/Portfolio)
- **Pages Included:** Home (`index.html`), Projects (`projects.html`), and About/Contact (`about.html`).

## 2. Responsive Design & Layout
- **Tested Viewports:** Fully responsive and tested at 320px (mobile) and 1200px (desktop) using DevTools with zero horizontal scrolling.
- **Media Queries:** Implemented at least two distinct `@media` query breakpoints to adjust grid layouts, navigation menu displays, and element padding across device sizes.

## 3. JavaScript Interactions
- **DOM Manipulation:** Features dynamic DOM modification using `querySelector` and `addEventListener` that updates visible page elements upon user interaction.
- **Form Validation:** Client-side contact form validation that intercepts submission, prevents default actions on empty fields, and displays dynamic error messages directly in the DOM.
- **Accessibility:** Both features are fully keyboard accessible using `Tab`, `Enter`, and `Space` keys.

## 4. WAVE Accessibility Documentation
- **Missing Form Labels:** Added explicitly linked `<label for="">` elements to all contact form controls so screen readers announce input requirements correctly.
- **Empty Link Diagnostics:** Provided clear visual and structural text labels across navigation elements so assistive technologies accurately report link targets.
- **Accessible Form Error Reporting:** Replaced browser default alert popups with a live-region DOM error summary container so screen reader users are dynamically informed of validation issues.
- **Sequential Document Outline:** Maintained structured heading elements sequentially (`<h1>` followed by `2`) across all three pages to preserve an accessible document hierarchy.

## 5. Color Contrast Verification (WCAG AA)
Checked and verified using the WebAIM Contrast Checker:
- **Body Text (`#1c1e21` on `#f4f4f4`):** Ratio of **14.3:1** (Passes WCAG AA and AAA).
- **Header Text (`#ffffff` on `#0a192f`):** Ratio of **15.3:1** (Passes WCAG AA and AAA).
- **Navigation Text (`#0a192f` on `#ffffff`):** Ratio of **15.3:1** (Passes WCAG AA and AAA).
- **Skip Link Text (`#ffffff` on `#0a192f`):** Ratio of **15.3:1** (Passes WCAG AA and AAA).
- **Form Error States (`#b91c1c` on `#fef2f2`):** Ratio of **7.2:1** (Passes WCAG AA).

## 6. Gestalt Design Principles
- **Proximity:** I used proximity to group related form controls and card elements together by applying a consistent spacing grid (`gap: 24px` and `margin: 16px`).
- **Similarity:** I used similarity to format interactive controls (navigation buttons and form submit buttons) with matching dark navy colors, rounded borders, and bold typography.
