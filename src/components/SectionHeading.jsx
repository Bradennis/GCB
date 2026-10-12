export default function SectionHeading({ eyebrow, title, children, center = false, light = false }) {
  return (
    <div className={center ? 'text-center' : ''}>
      {eyebrow && (
        <p className={`font-heading text-sm tracking-tight mb-1 ${light ? 'text-white/70' : 'text-ink'}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`text-2xl md:text-[2rem] font-semibold uppercase leading-snug ${light ? 'text-white' : 'text-wine'}`}>
        {title}
      </h2>
      <div className={`mt-4 h-1 w-24 bg-brand ${center ? 'mx-auto' : ''}`} />
      {children && (
        <p className={`mt-6 max-w-2xl leading-relaxed ${center ? 'mx-auto' : ''} ${light ? 'text-white/80' : ''}`}>
          {children}
        </p>
      )}
    </div>
  )
}
