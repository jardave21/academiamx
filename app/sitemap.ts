import type { MetadataRoute } from "next"
import { mockCourses, mockConferences, mockProfessors } from "@/lib/mock-data"

export default function sitemap(): MetadataRoute.Sitemap {
  const coursesRoutes = mockCourses.map((course) => ({
    url: `https://eduplatform.com/course/${course.id}`,
    lastModified: new Date(course.updatedAt),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }))

  const conferencesRoutes = mockConferences.map((conference) => ({
    url: `https://eduplatform.com/conference/${conference.id}`,
    lastModified: new Date(conference.createdAt),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }))

  const professorsRoutes = mockProfessors.map((professor) => ({
    url: `https://eduplatform.com/professor/${professor.id}`,
    lastModified: new Date(professor.createdAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  return [
    {
      url: "https://eduplatform.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://eduplatform.com/catalog",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: "https://eduplatform.com/professors",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://eduplatform.com/conferences",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: "https://eduplatform.com/events",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.7,
    },
    ...coursesRoutes,
    ...conferencesRoutes,
    ...professorsRoutes,
  ]
}
