export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm text-[hsl(120,5%,55%)]">
          &copy; {new Date().getFullYear()} Rahmad Setiawan Mukminullah. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}
