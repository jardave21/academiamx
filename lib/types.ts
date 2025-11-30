export interface Professor {
  id: string
  name: string
  email: string
  bio: string
  specialty: string
  imageUrl: string
  createdAt: Date
}

export interface Course {
  id: string
  title: string
  description: string
  price: number
  duration: number // in minutes
  thumbnailUrl: string
  videoUrl: string
  curriculum: string[]
  professorId: string
  category: string
  level: "beginner" | "intermediate" | "advanced"
  createdAt: Date
  updatedAt: Date
}

export interface Conference {
  id: string
  title: string
  description: string
  price: number
  scheduledDate: Date
  duration: number // in minutes
  thumbnailUrl: string
  videoUrl: string
  professorId: string
  category: string
  isLive: boolean
  createdAt: Date
}

export interface User {
  id: string
  email: string
  name: string
  role: "user" | "admin" | "professor"
  profileImageUrl: string
  createdAt: Date
}

export interface Purchase {
  id: string
  userId: string
  contentId: string
  contentType: "course" | "conference"
  price: number
  purchasedAt: Date
  stripePaymentId: string
}

export interface Notification {
  id: string
  userId: string
  title: string
  message: string
  type: "conference" | "course" | "update"
  createdAt: Date
  read: boolean
}
