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
      'building production rag pipelines for enterprise communications - 10x temporal recall and meaningful (~15-20%) Recall/NDCG gains across the board',
    href: 'https://attrove.com',
  },
  {
    role: 'applied ai research intern',
    organization: 'merck',
    description:
      'architected a multi-agent MoE workflow for molecular property prediction. cut inference latency ~12x via distribed vllm servers.',
  },
  {
    name: 'retobs',
    description:
      'an open-source retrieval reliability platform + pypi library for benchmarking, debugging, and continuously improving rag systems in production',
    href: 'https://github.com/AmeyaKI/retrieval-observatory',
  },
  {
    name: 'inference-arbiter',
    description:
      'llm gateway that learns which model tier to route a request to, on the fly, under a latency budget.',
    href: 'https://github.com/AmeyaKI/inference-arbiter',
  },
]
