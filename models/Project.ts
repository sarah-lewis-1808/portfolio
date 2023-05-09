export interface Project {
  name: string
  intro: string
  tech: string
  link: string
  image: string
  reflection: string[]
}

export interface FullProject extends Project {
  id: number
}
