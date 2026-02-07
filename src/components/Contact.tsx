
import { IconBrandGithub, IconMail } from "@tabler/icons-react";

export function Contact() {
    return (
        <footer id="contact" className="py-20 w-full bg-black border-t border-neutral-800">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mb-8">
                    Let's Connect
                </h2>
                <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
                    If you’re interested in collaboration, research, or technical
                    discussion, feel free to reach out.
                </p>
                <div className="flex justify-center gap-6">
                    <a
                        href="https://github.com/zahh-id"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors"
                    >
                        <IconBrandGithub className="h-6 w-6" />
                        <span>github.com/zahh-id</span>
                    </a>
                    <a
                        href="mailto:zahhkai@gmail.com"
                        className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors"
                    >
                        <IconMail className="h-6 w-6" />
                        <span>zahhkai@gmail.com</span>
                    </a>
                </div>
                <div className="mt-16 text-neutral-600 text-sm">
                    © {new Date().getFullYear()} Zahh. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
