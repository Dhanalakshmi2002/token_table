import { TokenTable } from "@/components/organisms/TokenTable";
import { ColumnTabs } from "@/components/organisms/ColumnTabs";
import { TokenModal } from "@/components/organisms/TokenModal";
import { ErrorBoundary } from "@/components/error/ErrorBoundary";

export default function PulsePage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6">Token Discovery</h1>

      <ColumnTabs />

      <ErrorBoundary>
        <TokenTable />
      </ErrorBoundary>

      <TokenModal />
    </main>
  );
}
