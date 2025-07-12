
import React from 'react';

const DiscordLogo: React.FC<{ className?: string }> = ({ className }) => (
    <svg
        className={className}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M20.222 0H3.778C2.111 0 0.778 1.39 0.778 3.111V18.11C0.778 19.822 2.111 21.222 3.778 21.222H17.39L23.222 24V3.11C23.222 1.39 21.889 0 20.222 0zM8.667 14.222c-.667 0-1.222-.556-1.222-1.222s.555-1.222 1.222-1.222c.667 0 1.222.556 1.222 1.222s-.555 1.222-1.222 1.222zm6.666 0c-.667 0-1.222-.556-1.222-1.222s.555-1.222 1.222-1.222c.667 0 1.222.556 1.222 1.222s-.555 1.222-1.222 1.222z" />
    </svg>
);

export default DiscordLogo;
