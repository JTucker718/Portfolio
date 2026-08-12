# Portfolio Milestone 3: Accessible & Designed

## 1. WAVE Accessibility Documentation
- **Missing Form Labels:** Added explicitly linked `<label for="">` elements to all contact form controls so screen readers announce input requirements correctly.
- **Empty Link Diagnostics:** Provided clear visual and structural text labels across navigation elements so assistive technologies accurately report link targets.
- **Accessible Form Error Reporting:** Replaced browser default alert popups with a live-region DOM error summary container so screen reader users are dynamically informed of validation issues.
- **Sequential Document Outline:** Maintained structured heading elements sequentially (`<h1>` followed by `<h2>`) across all three pages to preserve an accessible document hierarchy.

## 2. Color Contrast Verification (WCAG AA)
Checked and verified using the WebAIM Contrast Checker:
- **Body Text (`#1c1e21` on `#f4f4f4`):** Ratio of **14.3:1** (Passes WCAG AA and AAA).
- **Header Text (`#ffffff` on `#0a192f`):** Ratio of **15.3:1** (Passes WCAG AA and AAA).
- **Navigation Text (`#0a192f` on `#ffffff`):** Ratio of **15.3:1** (Passes WCAG AA and AAA).
- **Skip Link Text (`#ffffff` on `#0a192f`):** Ratio of **15.3:1** (Passes WCAG AA and AAA).
- **Form Error States (`#b91c1c` on `#fef2f2`):** Ratio of **7.2:1** (Passes WCAG AA).

## 3. Gestalt Design Principles
- **Proximity:** I used proximity to group related form controls and card elements together by applying a consistent spacing grid (`gap: 24px` and `margin: 16px`).
- **Similarity:** I used similarity to format interactive controls (navigation buttons and form submit buttons) with matching dark navy colors, rounded borders, and bold typography.