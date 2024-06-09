import { client } from '../lib/createClient';
import { groq } from 'next-sanity';
import { UpcomingEvent } from '../../types';
import EmbeddedLiveStream from '../components/EmbeddedLiveStream/EmbeddedLiveStream';
import MailchimpNewsletter from '../components/NewsLetter/MailchimpNewsletter';
import UpcomingEventContent from '../components/UpcomingEventContent/UpcomingEventContent';
import Contact from '../components/Contact/Contact';

export const revalidate = 30;

const query = groq`*[_type == 'upcomingEvent'] | order(_createdAt asc)`;

const LiveStreamPage = async () => {
  const upcomingEvents: UpcomingEvent[] = await client.fetch(query);

  return (
    <main className="py-28 pt-[6.3rem] md:pt-[7.5rem]">
      <EmbeddedLiveStream youtubeVideoId="8KEYibefoUw" />
      <section>
        <UpcomingEventContent events={upcomingEvents} />
        <Contact />
        <MailchimpNewsletter />
      </section>
    </main>
  );
};

export default LiveStreamPage;
