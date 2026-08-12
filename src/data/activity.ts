export type ActivityItem = {
  role?: string
  organization?: string
  name?: string
  description: string
  href?: string
}

export const activityItems: ActivityItem[] = [
  {
    role: 'ml engineering intern',
    organization: 'attrove',
    description:
      'building production rag pipelines for enterprise communications',
    href: 'https://attrove.com',
  },
  {
    role: 'applied ai research intern',
    organization: 'merck',
    description:
      'architected a multi-agent MoE workflow for molecular property prediction.',
  },
  {
    name: 'retobs',
    description:
      'an open-source retrieval reliability platform + pypi library for benchmarking, debugging, and continuously improving rag systems in production',
    href: 'https://github.com/AmeyaKI/retrieval-observatory',
  },
  {
    name: 'tbd',
    description:
      'tbd',
    // href: 'tbd',
  },
]
