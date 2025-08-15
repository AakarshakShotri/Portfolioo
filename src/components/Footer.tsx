export default function Footer() {
    return (
        <footer className="border-t border-[var(--border)] py-6">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 text-sm text-[var(--muted-text)]">
                <p>© {new Date().getFullYear()} All rights reserved.</p>
            </div>
        </footer>
    );
}




