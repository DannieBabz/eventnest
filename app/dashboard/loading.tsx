import { Container } from "@/components/shared/Container";

export default function DashboardLoading() {
  return (
    <section className="my-10 text-accent" aria-busy="true">
      <Container>
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <div className="h-7 w-44 animate-pulse rounded bg-[#182830]" />
            <div className="h-4 w-20 animate-pulse rounded bg-[#182830]" />
          </div>
          <div className="h-9 w-28 animate-pulse rounded-lg bg-[#182830]" />
        </div>
        <p className="my-8 text-center text-gray-400" role="status">
          Loading events...
        </p>
      </Container>
    </section>
  );
}
