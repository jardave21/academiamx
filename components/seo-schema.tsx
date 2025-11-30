export function CourseSchema({ course, professor }: any) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Course",
          name: course.title,
          description: course.description,
          provider: {
            "@type": "Organization",
            name: "EduPlatform",
            sameAs: "https://eduplatform.com",
          },
          instructor: {
            "@type": "Person",
            name: professor.name,
          },
          hasCourseInstance: {
            "@type": "CourseInstance",
            inLanguage: "es-ES",
            isAccessibleForFree: false,
            offers: {
              "@type": "Offer",
              price: course.price,
              priceCurrency: "USD",
            },
          },
        }),
      }}
    />
  )
}

export function EventSchema({ conference, professor }: any) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Event",
          name: conference.title,
          description: conference.description,
          startDate: conference.scheduledDate,
          endDate: new Date(new Date(conference.scheduledDate).getTime() + conference.duration * 60000).toISOString(),
          eventAttendanceMode: "OnlineEventAttendanceMode",
          eventStatus: "EventScheduled",
          location: {
            "@type": "VirtualLocation",
            url: "https://eduplatform.com",
          },
          organizer: {
            "@type": "Organization",
            name: "EduPlatform",
            url: "https://eduplatform.com",
          },
          performer: {
            "@type": "Person",
            name: professor.name,
          },
          offers: {
            "@type": "Offer",
            url: "https://eduplatform.com",
            price: conference.price,
            priceCurrency: "USD",
            availability: "InStock",
          },
        }),
      }}
    />
  )
}
