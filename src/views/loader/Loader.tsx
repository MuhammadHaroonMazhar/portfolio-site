import { useEffect } from 'react'
import { LoaderProps } from './types'

export default function Loader({onLoadingComplete}: LoaderProps) {
  useEffect(() => {
    const spans = document.querySelectorAll('.loader-bar');
    const colors = ['bg-blue-800','bg-blue-600', 'bg-blue-400', 'bg-green-200'];
    const animationDelay = spans.length * 500;

    spans.forEach((span, index) => {
      setTimeout(() => {
        span.classList.remove('bg-gray-900');
        span.classList.add(colors[index]);
      }, index * 500);
    });

    setTimeout(() => {
      onLoadingComplete();
    }, animationDelay);
  },[])

  return (
    <div className="min-h-screen flex items-center justify-center flex-col bg-gray-950">
      <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-indigo-500" />
      <div className="mt-8 w-[500px] max-w-3xl rounded py-12 px-6 text-slate-200">
        <div className="flex gap-2">
          {[...Array(4)].map((_, index) => (
            <span
              key={index}
              className="loader-bar h-[15px] flex-1 rounded-xl bg-gray-900"
            />
          ))}
        </div>
      </div>
    </div>
  )
}