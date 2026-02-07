"use client";

export const Footer = () => {
    return (
        <footer className="bg-zinc-950 text-zinc-500 py-12 px-6 border-t border-white/5">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-sm font-mono">
                    &copy; 2026 ZAHH.DEV
                </div>
                
                <div className="flex gap-8 text-sm uppercase tracking-widest">
                    <a href="https://github.com/Zahh-id" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 transition-colors">Github</a>
                    <a href="https://t.me/ZahhOnly" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 transition-colors">Telegram</a>
                    <a href="https://discordapp.com/users/756448650179117096" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 transition-colors">Discord</a>
                    <a href="mailto:zahhkai@gmail.com" className="hover:text-emerald-500 transition-colors">Email</a>
                </div>

                <div className="text-sm font-mono">
                    LOCAL TIME: {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZoneName: 'short' })}
                </div>
            </div>
        </footer>
    );
};
