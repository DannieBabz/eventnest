import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { buttonVariants } from "@/components/ui/button";
import EventTable from "@/components/dashboard/event-table";
import { getEventsAction } from "@/app/actions/event-data";
import { cn } from "@/lib/utils";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const events = await getEventsAction();

  return (
    <section className="my-10 text-accent">
      <Container>
        <div>
          <div className="flex items-center justify-between">
            <div>
              <h2>Event Management</h2>
              <p className="text-sm text-gray-400">
                {events.length} {events.length === 1 ? "event" : "events"}
              </p>
            </div>
            <Link
              href="/create-event"
              className={cn(buttonVariants({ variant: "secondary" }))}
            >
              Add Event
            </Link>
          </div>
          <EventTable events={events} />
        </div>
      </Container>
    </section>
  );
}
