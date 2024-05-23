import React from 'react';
import Details from './details';
import VideoSeries from './video-series';
import Faqs from './faqs';
import Breadcrumb from './breadcrumbs';

interface SectionsProps {
  data: any;
}

export default function Sections({ data }: SectionsProps) {
  return (
    <div>
      <Breadcrumb title={data.details.title} />
      <Details details={data.details} />
      <VideoSeries videoList={data.courses} />
      <Faqs faqs={data.faqs} />
    </div>
  );
}
