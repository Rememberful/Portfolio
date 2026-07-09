// Category filters shown above the projects list.
// To add a new category later:
//   1. Add an entry here: { id: "your-id", label: "Your Label" }
//   2. Tag any project with that id in its `categories` array in projects.js
// That's it — the filter pill and the filtering logic pick it up automatically.
export const projectCategories = [
  { id: "all", label: "All" },
  { id: "cybersecurity", label: "Cybersecurity" },
  { id: "ml", label: "Machine Learning" },
  { id: "fullstack", label: "Full-Stack" },
  { id: "cloud", label: "Cloud" },
];