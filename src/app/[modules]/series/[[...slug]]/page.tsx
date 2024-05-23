import getSeries from '@/services/getSeries';
import getFaqs from '@/services/getFaqs';
import Sections from '@/components/Sections';

export async function generateStaticParams() {
  return [{ modules: 'video-modules', slug: ['course-series-eeb9d3'] }]
}

export default async function Pages({ params }: any) {

  const seriesData = await getSeries(params.slug[0])
  const faqs = await getFaqs()

  return (
    <Sections data={{ ...seriesData, faqs }} />
  )
}

