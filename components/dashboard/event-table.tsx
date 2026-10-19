import Image from "next/image";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { Event } from "@/types/events";
import { formatDate } from "@/lib/format-date";

interface EventTableProps {
  events: Event[];
}

export default function EventTable({ events }: EventTableProps) {
  return (
    <section className="my-8">
      <div className="overflow-hidden rounded-2xl">
        <Table>
          <TableHeader className="bg-[#182830]">
            <TableRow className="text-accent">
              <TableHead className="text-accent">Events</TableHead>
              <TableHead className="text-accent">Location</TableHead>
              <TableHead className="text-accent">Date</TableHead>
              <TableHead className="text-accent">Time</TableHead>
              <TableHead className="text-accent">Booked Spot</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-[#0D161A] w-full">
            {events.length > 0 ? (
              events.map((event) => (
                <TableRow key={event._id}>
            <TableCell className="max-w-[220px] whitespace-normal sm:max-w-xs md:max-w-sm">
            <Link
                href={`/events/${event._id}`}
                className="flex items-center gap-x-3 hover:underline"
            >
                        <Image
                        src={event.imageUrl}
                        alt=""
                        width={40}
                        height={40}
                        className="size-10 shrink-0 rounded object-cover"
                        />
                        <span className="min-w-0 line-clamp-2 break-words">{event.title}</span>
                    </Link>
                    </TableCell>
                  <TableCell>{event.location}</TableCell>
                  <TableCell>{formatDate(event.date)}</TableCell>
                  <TableCell>{event.time}</TableCell>
                  <TableCell>{event.bookingCount ?? 0}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={5}
                  className="py-8 text-center text-gray-400"
                >
                  No events found. Create an event to see it listed here.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}


// [
//   {
//     "title": "Frontend Futures Meetup",
//     "description": "A friendly meetup exploring modern frontend tools, patterns, and practical techniques.",
//     "date": "2026-11-05",
//     "time": "09:00 AM - 01:00 PM",
//     "venue": "Innovation Hub",
//     "location": "Lagos, Nigeria",
//     "imageUrl": "/item-1.png",
//     "type": "In-Person",
//     "mode": "Talks and networking",
//     "audience": "Frontend developers, designers, and students",
//     "overview": ["Learn practical approaches to building fast, accessible web interfaces."],
//     "agenda": [{ "time": "09:30 AM", "title": "Building better interfaces with modern CSS" }],
//     "about": [{ "name": "Lagos Web Community", "description": "A community for people building for the web." }],
//     "tags": ["Frontend", "CSS", "Web Development"]
//   },
//   {
//     "title": "Cloud Native Builders Summit",
//     "description": "A one-day event about deploying and operating reliable cloud-native applications.",
//     "date": "2026-11-12",
//     "time": "10:00 AM - 05:00 PM",
//     "venue": "Civic Technology Centre",
//     "location": "Abuja, Nigeria",
//     "imageUrl": "/item-2.png",
//     "type": "Hybrid",
//     "mode": "In-person talks with online streaming",
//     "audience": "Backend developers, platform engineers, and cloud architects",
//     "overview": ["Explore containers, observability, and resilient service design."],
//     "agenda": [{ "time": "10:30 AM", "title": "From first deploy to reliable production" }],
//     "about": [{ "name": "Cloud Builders Network", "description": "An independent group sharing practical cloud engineering knowledge." }],
//     "tags": ["Cloud", "DevOps", "Containers"]
//   },
//   {
//     "title": "AI Product Lab",
//     "description": "A hands-on workshop for designing useful AI-powered product features.",
//     "date": "2026-11-19",
//     "time": "09:30 AM - 03:30 PM",
//     "venue": "The Workshop Studio",
//     "location": "Accra, Ghana",
//     "imageUrl": "/item-3.png",
//     "type": "In-Person",
//     "mode": "Guided workshop",
//     "audience": "Product developers, designers, and founders",
//     "overview": ["Prototype an AI feature and think through its user experience and limitations."],
//     "agenda": [{ "time": "10:00 AM", "title": "From user problem to AI prototype" }],
//     "about": [{ "name": "Product Makers Guild", "description": "A community helping teams build thoughtful digital products." }],
//     "tags": ["AI", "Product Design", "Prototyping"]
//   },
//   {
//     "title": "Secure Code Hackathon",
//     "description": "Build a small application with security considerations included from the start.",
//     "date": "2026-11-28",
//     "time": "08:00 AM - 08:00 PM",
//     "venue": "Riverfront Tech Space",
//     "location": "Nairobi, Kenya",
//     "imageUrl": "/item-4.png",
//     "type": "Hybrid",
//     "mode": "Team hackathon with remote participation",
//     "audience": "Developers, security learners, and student teams",
//     "overview": ["Work in teams to create a prototype and present its security choices."],
//     "agenda": [{ "time": "09:00 AM", "title": "Team formation and challenge briefing" }],
//     "about": [{ "name": "CodeSafe Collective", "description": "A volunteer group promoting secure software development." }],
//     "tags": ["Security", "Hackathon", "Teamwork"]
//   },
//   {
//     "title": "Data Stories Evening",
//     "description": "An evening of short talks on turning data into clear, useful visual stories.",
//     "date": "2026-12-03",
//     "time": "05:30 PM - 08:30 PM",
//     "venue": "Market Street Labs",
//     "location": "Cape Town, South Africa",
//     "imageUrl": "/item-5.png",
//     "type": "In-Person",
//     "mode": "Lightning talks and discussion",
//     "audience": "Data analysts, developers, and visualization enthusiasts",
//     "overview": ["See how thoughtful charts can help people understand complex information."],
//     "agenda": [{ "time": "06:00 PM", "title": "Choosing the right chart for the question" }],
//     "about": [{ "name": "Open Data Circle", "description": "A local community exploring open data and data communication." }],
//     "tags": ["Data", "Visualization", "Analytics"]
//   },
//   {
//     "title": "Mobile Makers Conference",
//     "description": "A practical conference for people building polished mobile applications.",
//     "date": "2026-12-08",
//     "time": "09:00 AM - 04:30 PM",
//     "venue": "Harbour Conference Hall",
//     "location": "Mombasa, Kenya",
//     "imageUrl": "/item-6.png",
//     "type": "Online",
//     "mode": "Live virtual conference",
//     "audience": "Mobile developers, UX designers, and engineering leads",
//     "overview": ["Discuss app performance, testing, and creating consistent mobile experiences."],
//     "agenda": [{ "time": "09:30 AM", "title": "Designing a dependable mobile release process" }],
//     "about": [{ "name": "Mobile Makers Network", "description": "A peer network for mobile app creators and teams." }],
//     "tags": ["Mobile", "Apps", "UX"]
//   },
//   {
//     "title": "Indie Dev Launchpad",
//     "description": "A community day for independent developers planning and launching small products.",
//     "date": "2026-12-12",
//     "time": "10:00 AM - 02:00 PM",
//     "venue": "Founders Corner",
//     "location": "Kigali, Rwanda",
//     "imageUrl": "/item-7.png",
//     "type": "In-Person",
//     "mode": "Talks, demos, and peer feedback",
//     "audience": "Independent developers, makers, and early-stage founders",
//     "overview": ["Share launch lessons and get feedback on early product ideas."],
//     "agenda": [{ "time": "10:30 AM", "title": "Scoping a first version you can actually ship" }],
//     "about": [{ "name": "Indie Builders Club", "description": "A community for people building independent software products." }],
//     "tags": ["Indie", "Startups", "Product"]
//   },
//   {
//     "title": "Accessibility by Design Workshop",
//     "description": "Learn how to identify and improve accessibility issues in everyday interfaces.",
//     "date": "2026-12-15",
//     "time": "09:00 AM - 01:00 PM",
//     "venue": "Design Commons",
//     "location": "Kampala, Uganda",
//     "imageUrl": "/item-8.png",
//     "type": "Hybrid",
//     "mode": "Workshop with remote participation",
//     "audience": "Designers, frontend developers, and product teams",
//     "overview": ["Practice making web interfaces more usable for a wider range of people."],
//     "agenda": [{ "time": "09:30 AM", "title": "Auditing a page with keyboard and screen-reader basics" }],
//     "about": [{ "name": "Inclusive Web Lab", "description": "A learning group focused on inclusive digital experiences." }],
//     "tags": ["Accessibility", "Design", "Inclusive Web"]
//   },
//   {
//     "title": "Green Software Forum",
//     "description": "Discuss practical ways to make software systems more resource-conscious.",
//     "date": "2026-12-18",
//     "time": "10:00 AM - 03:00 PM",
//     "venue": "Sustainable Technology Centre",
//     "location": "Dakar, Senegal",
//     "imageUrl": "/item-9.png",
//     "type": "In-Person",
//     "mode": "Presentations and working groups",
//     "audience": "Software engineers, infrastructure teams, and technology leaders",
//     "overview": ["Explore how engineering choices affect energy use and system efficiency."],
//     "agenda": [{ "time": "10:30 AM", "title": "Measuring efficiency in a web service" }],
//     "about": [{ "name": "Green Tech Exchange", "description": "A forum for sharing ideas on more sustainable technology." }],
//     "tags": ["Sustainability", "Software", "Efficiency"]
//   },
//   {
//     "title": "Open Source Onboarding Day",
//     "description": "A welcoming event for developers who want to make their first open-source contribution.",
//     "date": "2026-12-22",
//     "time": "09:30 AM - 02:30 PM",
//     "venue": "Community Code House",
//     "location": "Lagos, Nigeria",
//     "imageUrl": "/item-1.png",
//     "type": "Online",
//     "mode": "Guided virtual contribution sessions",
//     "audience": "New contributors, maintainers, and curious developers",
//     "overview": ["Find a project, understand its contribution workflow, and make a first contribution."],
//     "agenda": [{ "time": "10:00 AM", "title": "Finding a good first issue and getting started" }],
//     "about": [{ "name": "Open Source Neighbours", "description": "A community helping people learn and contribute together." }],
//     "tags": ["Open Source", "Community", "Git"]
//   }
// ]