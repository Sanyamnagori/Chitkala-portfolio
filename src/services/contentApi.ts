import { travelAmoreDetail } from '../data/projectDetails/travel-amore'
import type { ProjectDetailContent } from '../types/projectDetail'

/**
 * Backend-ready content registry.
 * Replace `getProjectDetail` with a real API call when the backend is ready:
 *
 *   return fetch(`/api/projects/${slug}`).then(res => res.json())
 */
const projectDetails: Record<string, ProjectDetailContent> = {
  'travel-amore': travelAmoreDetail,
}

export async function getProjectDetail(
  slug: string,
): Promise<ProjectDetailContent | null> {
  // Simulate network latency — remove when connecting to a real backend
  await new Promise((resolve) => setTimeout(resolve, 100))

  return projectDetails[slug] ?? null
}

export async function getAllProjectSlugs(): Promise<string[]> {
  return Object.keys(projectDetails)
}
