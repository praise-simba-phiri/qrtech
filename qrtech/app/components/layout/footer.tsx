// app/components/layout/footer.tsx
export default function Footer() {
  return (
    <footer className="bg-light-background dark:bg-dark-background border-t border-light-elevated dark:border-dark-elevated">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-light-text-primary dark:text-dark-text-primary">
              QR <span className="text-light-primary dark:text-dark-primary">TECH</span>
            </h3>
            <p className="mt-4 text-light-text-secondary dark:text-dark-text-secondary max-w-md">
              QuantumResolve Technologies - Empowering Malawi Through Smart Innovation That Matters. 
              Your trusted partner for comprehensive digital solutions.
            </p>
            <p className="mt-4 text-sm text-light-text-secondary dark:text-dark-text-secondary">
              © 2024 QuantumResolve Technologies. All rights reserved.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-light-text-primary dark:text-dark-text-primary mb-4">
              Services
            </h4>
            <ul className="space-y-2 text-light-text-secondary dark:text-dark-text-secondary">
              <li>Website Design</li>
              <li>Graphic Design</li>
              <li>3D Simulation</li>
              <li>PCB Design</li>
              <li>AI Development</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-light-text-primary dark:text-dark-text-primary mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-light-text-secondary dark:text-dark-text-secondary">
              <li>info@quantumresolve.mw</li>
              <li>+265 xxx xxx xxx</li>
              <li>Lilongwe, Malawi</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}