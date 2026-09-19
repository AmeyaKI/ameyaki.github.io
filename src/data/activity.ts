export type Experience = {
  title: string
  description: string
}

export type Project = {
  name: string
  description: string
  href: string
}

export const experience: Experience[] = [
  {
    title: 'incoming ml researcher @ ucsf sohn lab',
    description: 'radiology & biomedical imaging',
  },
  {
    title: 'prev. ml engineering @ attrove',
    description: 'built production rag pipelines for enterprise communications',
  },
  {
    title: 'prev. applied ai research @ merck',
    description: 'designed multi-agentic workflows for molecular analysis',
  },
]

export const projects: Project[] = [
  {
    name: 'retobs',
    description: 'benchmarking, debugging, and regression-testing for rag retrieval pipelines. on pypi',
    href: 'https://github.com/AmeyaKI/retrieval-observatory',
  },
  {
    name: 'open-hearts',
    description: 'probabilistic search agents for imperfect-information environments',
    href: 'https://github.com/AmeyaKI/open-hearts',
  },
]
