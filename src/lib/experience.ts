/**
 * Dynamic experience calculation based on start date
 * Automatically updates as time passes without manual changes
 * 
 * Start date: April 2022
 * 
 * Rounding rules:
 * - If close to next year (8-11 months into year): "almost X+1 years"
 * - If around mid-year (3-7 months): "nearly X.5 years"
 * - If exact or close to whole year: "X+ years"
 */

const EXPERIENCE_START_DATE = new Date(2022, 3, 1); // April 2022 (month is 0-indexed)

export function calculateExperience(): string {
  const now = new Date();
  
  // Calculate total months of experience
  let months = 0;
  const startYear = EXPERIENCE_START_DATE.getFullYear();
  const startMonth = EXPERIENCE_START_DATE.getMonth();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();
  
  // Total months calculation
  months = (currentYear - startYear) * 12 + (currentMonth - startMonth);
  
  // Convert months to years and remainder months
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  
  // Human-friendly rounding logic
  if (remainingMonths >= 8) {
    // 8-11 months into the year: "almost X+1 years"
    return `almost ${years + 1} years`;
  } else if (remainingMonths >= 3 && remainingMonths <= 7) {
    // Mid-year (3-7 months): "nearly X.5 years"
    return `nearly ${years}.5 years`;
  } else {
    // 0-2 months or exact year: "X+ years"
    return `${years}+ years`;
  }
}

/**
 * Generates a Google Docs export URL to download as PDF
 * This always fetches the latest version without requiring code changes
 */
export function getGoogleDocsPdfUrl(docId: string): string {
  return `https://docs.google.com/document/d/${docId}/export?format=pdf`;
}

// Your Google Docs document ID
export const RESUME_DOC_ID = "16E5VjlJWvrCkvZMxpsGBOCGPu1IsC0bS2PAwmMP5f1Q";
