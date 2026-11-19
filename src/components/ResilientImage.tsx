import { useState } from 'react';
import { BookOpen } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  title?: string;
  className?: string;
  containerClassName?: string;
}

export function ResilientImage({
  src,
  alt,
  title,
  className = 'w-full h-full object-cover',
  containerClassName = '',
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-slate-100 via-blue-50 to-slate-200 text-slate-700 p-6 text-center ${containerClassName}`}
        role="img"
        aria-label={alt}
      >
        <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-3 text-blue-700 shadow-xs">
          <BookOpen className="w-6 h-6" aria-hidden="true" />
        </div>
        <p className="font-display font-semibold text-sm text-slate-800">{title || alt}</p>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-slate-100 ${containerClassName}`}>
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        onError={() => setHasError(true)}
        className={className}
      />
    </div>
  );
}
