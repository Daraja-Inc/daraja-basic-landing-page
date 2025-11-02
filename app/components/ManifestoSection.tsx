export default function ManifestoSection() {
  return (
    <section className="relative py-24 px-8 md:px-24 overflow-hidden">
      {/* Fond avec particules */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container max-w-prose mx-auto relative z-10">
        {/* En-tête de section */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4">
            Notre <span className="text-primary font-bold">Manifeste</span>
          </h2>
          {/* Ligne décorative */}
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-blue-400 rounded-full" />
        </div>

        {/* Contenu principal */}
        <div className="space-y-8">
          {/* Paragraphe 1 */}
          <div className="relative pl-6 border-l-4 border-transparent bg-gradient-to-b from-primary via-blue-400 to-primary bg-clip-border" style={{ borderImage: 'linear-gradient(to bottom, hsl(var(--brand)), #60a5fa, hsl(var(--brand))) 1' }}>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Nous ne bâtissons pas pour aujourd&apos;hui. Nous forgeons l&apos;avenir avec chaque décision, 
              chaque ligne de code, chaque ambition concrétisée. DARAJA n&apos;est pas un projet — 
              c&apos;est un engagement envers l&apos;excellence.
            </p>
          </div>

          {/* Paragraphe 2 */}
          <div className="relative pl-6 border-l-4 border-transparent bg-gradient-to-b from-primary via-blue-400 to-primary bg-clip-border" style={{ borderImage: 'linear-gradient(to bottom, hsl(var(--brand)), #60a5fa, hsl(var(--brand))) 1' }}>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Dans un monde d&apos;approximations, nous choisissons la précision. 
              Là où d&apos;autres cherchent le compromis, nous exigeons la performance. 
              Chaque détail compte. Chaque effort forge notre légende.
            </p>
          </div>

          {/* Quote encadré */}
          <div className="relative my-16">
            <div className="relative bg-gradient-to-br from-primary/10 to-blue-400/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-primary/30 overflow-hidden">
              {/* Guillemets décoratifs */}
              <div className="absolute top-4 left-4 text-6xl md:text-8xl text-primary/20 font-serif leading-none select-none">
                &ldquo;
              </div>
              <div className="absolute bottom-4 right-4 text-6xl md:text-8xl text-primary/20 font-serif leading-none select-none rotate-180">
                &ldquo;
              </div>
              
              {/* Citation */}
              <blockquote className="relative z-10 text-center">
                <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
                  On ne suit pas le rythme —
                  <br />
                  <span className="text-primary">on l&apos;impose.</span>
                </p>
              </blockquote>

              {/* Ligne décorative sous la citation */}
              <div className="flex justify-center mt-6">
                <div className="h-1 w-32 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
              </div>
            </div>
          </div>

          {/* Paragraphe 3 */}
          <div className="relative pl-6 border-l-4 border-transparent bg-gradient-to-b from-primary via-blue-400 to-primary bg-clip-border" style={{ borderImage: 'linear-gradient(to bottom, hsl(var(--brand)), #60a5fa, hsl(var(--brand))) 1' }}>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Ensemble, nous ne sommes pas une équipe — nous sommes un mouvement. 
              Autonomie, responsabilité, progression : ces mots ne sont pas des promesses vides, 
              mais le socle sur lequel repose chaque victoire, chaque innovation, chaque dépassement.
            </p>
          </div>
        </div>

        {/* Signature symbolique */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
            <span className="text-primary/80 font-medium tracking-wider uppercase text-sm">
              DARAJA
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
          </div>
        </div>
      </div>
    </section>
  );
}
