// app/components/ui/loading-screen.tsx
export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-dark-background flex items-center justify-center z-50">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-dark-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <h2 className="text-dark-text-primary text-xl font-semibold">
          QuantumResolve Technologies
        </h2>
        <p className="text-dark-text-secondary mt-2">
          Loading Innovation...
        </p>
      </div>
    </div>
  )
}