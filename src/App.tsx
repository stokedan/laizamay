import './App.css'
import { useMemo, useState } from 'react'
import { giftConfig, type BrandOption } from './giftConfig'

function App() {
  const [hasStarted, setHasStarted] = useState(false)
  const [selectedTopProductId, setSelectedTopProductId] = useState<string | null>(null)
  const [selectedBottomProductId, setSelectedBottomProductId] = useState<string | null>(null)
  const [selectedSocksProductId, setSelectedSocksProductId] = useState<string | null>(null)
  const [topDraftId, setTopDraftId] = useState<string | null>(null)
  const [bottomDraftId, setBottomDraftId] = useState<string | null>(null)
  const [socksDraftId, setSocksDraftId] = useState<string | null>(null)
  const [topBrandId, setTopBrandId] = useState<string | null>(null)
  const [bottomBrandId, setBottomBrandId] = useState<string | null>(null)
  const [socksBrandId, setSocksBrandId] = useState<string | null>(null)
  const [isGymsharkTopModalOpen, setIsGymsharkTopModalOpen] = useState(false)
  const [gymsharkTopImageStatus, setGymsharkTopImageStatus] = useState<'loading' | 'loaded' | 'error'>(
    'loading'
  )
  const [isGymsharkBottomModalOpen, setIsGymsharkBottomModalOpen] = useState(false)
  const [gymsharkBottomImageStatus, setGymsharkBottomImageStatus] = useState<'loading' | 'loaded' | 'error'>(
    'loading'
  )
  const [isGymsharkSocksModalOpen, setIsGymsharkSocksModalOpen] = useState(false)
  const [gymsharkSocksImageStatus, setGymsharkSocksImageStatus] = useState<'loading' | 'loaded' | 'error'>(
    'loading'
  )

  const step: 'intro' | 'tops' | 'bottoms' | 'socks' | 'reveal' = useMemo(() => {
    if (!hasStarted) return 'intro'
    if (!topBrandId) return 'tops'

    const topHasProducts = (giftConfig.topsProductsByBrandId[topBrandId] ?? []).length > 0
    if (topHasProducts && !selectedTopProductId) return 'tops'

    if (!bottomBrandId) return 'bottoms'

    const bottomHasProducts = (giftConfig.bottomsProductsByBrandId[bottomBrandId] ?? []).length > 0
    if (bottomHasProducts && !selectedBottomProductId) return 'bottoms'

    if (!socksBrandId) return 'socks'

    const socksHasProducts = (giftConfig.socksProductsByBrandId[socksBrandId] ?? []).length > 0
    if (socksHasProducts && !selectedSocksProductId) return 'socks'

    return 'reveal'
  }, [
    hasStarted,
    topBrandId,
    selectedTopProductId,
    bottomBrandId,
    selectedBottomProductId,
    socksBrandId,
    selectedSocksProductId,
  ])

  const tops = giftConfig.brandsByCategory.tops
  const bottoms = giftConfig.brandsByCategory.bottoms
  const socks = giftConfig.brandsByCategory.socks

  const effectiveTopId = topDraftId ?? topBrandId
  const effectiveBottomId = bottomDraftId ?? bottomBrandId
  const effectiveSocksId = socksDraftId ?? socksBrandId

  const topProducts = useMemo(() => {
    if (!effectiveTopId) return []
    return giftConfig.topsProductsByBrandId[effectiveTopId] ?? []
  }, [effectiveTopId])

  const selectedTopProduct = useMemo(
    () => topProducts.find((p) => p.id === selectedTopProductId) ?? null,
    [topProducts, selectedTopProductId],
  )

  const bottomProducts = useMemo(() => {
    if (!effectiveBottomId) return []
    return giftConfig.bottomsProductsByBrandId[effectiveBottomId] ?? []
  }, [effectiveBottomId])

  const socksProducts = useMemo(() => {
    if (!effectiveSocksId) return []
    return giftConfig.socksProductsByBrandId[effectiveSocksId] ?? []
  }, [effectiveSocksId])

  const selectedBottomProduct = useMemo(
    () => bottomProducts.find((p) => p.id === selectedBottomProductId) ?? null,
    [bottomProducts, selectedBottomProductId],
  )

  const selectedSocksProduct = useMemo(
    () => socksProducts.find((p) => p.id === selectedSocksProductId) ?? null,
    [socksProducts, selectedSocksProductId],
  )

  const selectedTop = useMemo(
    () => tops.find((b) => b.id === effectiveTopId) ?? null,
    [effectiveTopId, tops],
  )
  const selectedBottom = useMemo(
    () => bottoms.find((b) => b.id === effectiveBottomId) ?? null,
    [effectiveBottomId, bottoms],
  )
  const selectedSocks = useMemo(
    () => socks.find((b) => b.id === socksBrandId) ?? null,
    [socksBrandId, socks],
  )

  const bottomDisplayName = useMemo(() => {
    if (selectedBottomProduct) return selectedBottomProduct.name
    return selectedBottom?.name ?? '—'
  }, [selectedBottom, selectedBottomProduct])

  const socksDisplayName = useMemo(() => {
    if (selectedSocksProduct) return selectedSocksProduct.name
    return selectedSocks?.name ?? '—'
  }, [selectedSocks, selectedSocksProduct])

  const topRevealImageSrc = useMemo(() => {
    if (selectedTopProduct) return selectedTopProduct.imageSrc
    if (selectedTop?.logo?.type === 'image') return selectedTop.logo.src
    return null
  }, [selectedTop, selectedTopProduct])

  const bottomRevealImageSrc = useMemo(() => {
    if (selectedBottomProduct) return selectedBottomProduct.imageSrc
    if (selectedBottom?.logo?.type === 'image') return selectedBottom.logo.src
    return null
  }, [selectedBottom, selectedBottomProduct])

  const socksRevealImageSrc = useMemo(() => {
    if (selectedSocksProduct) return selectedSocksProduct.imageSrc
    if (selectedSocks?.logo?.type === 'image') return selectedSocks.logo.src
    return null
  }, [selectedSocks, selectedSocksProduct])

  const topDisplayName = useMemo(() => {
    if (selectedTopProduct) return selectedTopProduct.name
    return selectedTop?.name ?? '—'
  }, [selectedTop, selectedTopProduct])

  function resetAll() {
    setHasStarted(false)
    setSelectedTopProductId(null)
    setSelectedBottomProductId(null)
    setSelectedSocksProductId(null)
    setTopDraftId(null)
    setBottomDraftId(null)
    setSocksDraftId(null)
    setTopBrandId(null)
    setBottomBrandId(null)
    setSocksBrandId(null)
  }

  function goBack() {
    if (step === 'tops') {
      setHasStarted(false)
      setTopDraftId(null)
      setSelectedTopProductId(null)
      setSelectedBottomProductId(null)
      setSelectedSocksProductId(null)
      return
    }
    if (step === 'bottoms') {
      setTopBrandId(null)
      setTopDraftId(null)
      setSelectedTopProductId(null)
      setSelectedBottomProductId(null)
      setSelectedSocksProductId(null)
      return
    }
    if (step === 'socks') {
      setBottomBrandId(null)
      setBottomDraftId(null)
      setSelectedBottomProductId(null)
      setSelectedSocksProductId(null)
      return
    }
    if (step === 'reveal') {
      setSocksBrandId(null)
      setSocksDraftId(null)
    }
  }

  function openGymsharkTopModal() {
    setGymsharkTopImageStatus('loading')
    setIsGymsharkTopModalOpen(true)
  }

  function openGymsharkBottomModal() {
    setGymsharkBottomImageStatus('loading')
    setIsGymsharkBottomModalOpen(true)
  }

  function openGymsharkSocksModal() {
    setGymsharkSocksImageStatus('loading')
    setIsGymsharkSocksModalOpen(true)
  }

  return (
    <div className="page">
      <header className="top">
        <div className="badge">{giftConfig.appBadge}</div>
        <h1 className="title">{giftConfig.title}</h1>
        <p className="subtitle">{giftConfig.subtitle}</p>
      </header>

      <main className="card">
        <div className="progress">
          <div className={`dot ${step === 'intro' ? 'active' : 'done'}`} />
          <div className={`dot ${step === 'tops' ? 'active' : step === 'intro' ? '' : 'done'}`} />
          <div className={`dot ${step === 'bottoms' ? 'active' : ['intro', 'tops'].includes(step) ? '' : 'done'}`} />
          <div className={`dot ${step === 'socks' ? 'active' : step === 'reveal' ? 'done' : ''}`} />
          <div className={`dot ${step === 'reveal' ? 'active' : ''}`} />
        </div>

        {step !== 'intro' && (
          <div className="crumbs" aria-label="Current selections">
            <span className="crumb">Top: {topDisplayName}</span>
            <span className="sep">/</span>
            <span className="crumb">Bottom: {bottomDisplayName}</span>
            <span className="sep">/</span>
            <span className="crumb">Socks: {socksDisplayName}</span>
          </div>
        )}

        {step === 'intro' && (
          <section className="section">
            {giftConfig.intro.heading && <h2 className="h2">{giftConfig.intro.heading}</h2>}
            {giftConfig.intro.subheading && <p className="hint">{giftConfig.intro.subheading}</p>}
            <div className="prose">
              {giftConfig.intro.paragraphs.map((p, idx) => (
                <p className="p" key={idx}>
                  {p}
                </p>
              ))}
            </div>
            <div className="actions solo">
              <button className="btn primary" onClick={() => setHasStarted(true)}>
                {giftConfig.intro.cta} →
              </button>
            </div>
            <div className="introPhotoBlock">
              <img
                className="introPhoto"
                src="/workout.png"
                alt="You and Laiza May in the gym together"
              />
              <p className="hint small introPhotoNote">
                Next time it's not just us with our fit pics on our phones but working out together again!
              </p>
            </div>
          </section>
        )}

        {step === 'tops' && (
          <>
            <BrandStep
              stepLabel="Step 1 of 4"
              title={giftConfig.steps.tops.title}
              subtitle={giftConfig.steps.tops.subtitle}
              options={tops}
              selectedId={topDraftId ?? topBrandId}
              onSelect={(id) => {
                if (id === 'gymshark') {
                  openGymsharkTopModal()
                  return
                }
                setTopDraftId(id)
                setSelectedTopProductId(null)
              }}
            />
          </>
        )}

        {step === 'tops' && effectiveTopId && topProducts.length > 0 && (
          <section className="section sectionSub">
            <h3 className="h3">{selectedTop?.name ?? 'Brand'} tops you can pick from</h3>
            <p className="hint small">
              Tap one to lock in the exact top you like.
            </p>
            {selectedTopProduct && (
              <div className="selectionNote" aria-live="polite">
                <span className="selectionNoteLabel">Chosen top:</span>
                <span className="selectionNoteValue">{selectedTopProduct.name}</span>
              </div>
            )}
            <p className="hint tiny">
              Note: final color will be picked based on what’s available online when ordering.
            </p>
            <div className="grid productGrid">
              {topProducts.map((p) => (
                <button
                  key={p.id}
                  className={`productCard ${selectedTopProductId === p.id ? 'selected' : ''}`}
                  onClick={() => setSelectedTopProductId(p.id)}
                >
                  <div className="productImgWrap">
                    <img className="productImg" src={p.imageSrc} alt={p.name} loading="lazy" />
                  </div>
                  <div className="productName">{p.name}</div>
                </button>
              ))}
            </div>
            <div className="actions solo">
              <button
                className="btn primary"
                disabled={!topDraftId || (topProducts.length > 0 && !selectedTopProductId)}
                onClick={() => {
                  if (!topDraftId) return
                  setTopBrandId(topDraftId)
                }}
              >
                Confirm
              </button>
            </div>
          </section>
        )}

        {step === 'bottoms' && (
          <>
            <BrandStep
              stepLabel="Step 2 of 4"
              title={giftConfig.steps.bottoms.title}
              subtitle={giftConfig.steps.bottoms.subtitle}
              options={bottoms}
              selectedId={bottomDraftId ?? bottomBrandId}
              onSelect={(id) => {
                if (id === 'gymshark') {
                  openGymsharkBottomModal()
                  return
                }
                setBottomDraftId(id)
                setSelectedBottomProductId(null)
              }}
            />
            {step === 'bottoms' && effectiveBottomId && bottomProducts.length > 0 && (
              <section className="section sectionSub">
                <h3 className="h3">{selectedBottom?.name ?? 'Brand'} bottoms you can pick from</h3>
                <p className="hint small">
                  Tap one to lock in the exact bottom you like.
                </p>
                {selectedBottomProduct && (
                  <div className="selectionNote" aria-live="polite">
                    <span className="selectionNoteLabel">Chosen bottom:</span>
                    <span className="selectionNoteValue">{selectedBottomProduct.name}</span>
                  </div>
                )}
                <p className="hint tiny">
                  Note: final color will be picked based on what’s available online when ordering.
                </p>
                <div className="grid productGrid">
                  {bottomProducts.map((p) => (
                    <button
                      key={p.id}
                      className={`productCard ${selectedBottomProductId === p.id ? 'selected' : ''}`}
                      onClick={() => setSelectedBottomProductId(p.id)}
                    >
                      <div className="productImgWrap">
                        <img className="productImg" src={p.imageSrc} alt={p.name} loading="lazy" />
                      </div>
                      <div className="productName">{p.name}</div>
                    </button>
                  ))}
                </div>
              </section>
            )}
            <div className="actions solo">
              <button
                className="btn primary"
                disabled={!bottomDraftId || (bottomProducts.length > 0 && !selectedBottomProductId)}
                onClick={() => {
                  if (!bottomDraftId) return
                  setBottomBrandId(bottomDraftId)
                }}
              >
                Confirm
              </button>
            </div>
          </>
        )}

        {step === 'socks' && (
          <>
            <BrandStep
              stepLabel="Step 3 of 4"
              title={giftConfig.steps.socks.title}
              subtitle={giftConfig.steps.socks.subtitle}
              options={socks}
              selectedId={socksDraftId ?? socksBrandId}
              onSelect={(id) => {
                if (id === 'gymshark') {
                  openGymsharkSocksModal()
                  return
                }
                setSocksDraftId(id)
                setSelectedSocksProductId(null)
              }}
            />
            {step === 'socks' && effectiveSocksId && socksProducts.length > 0 && (
              <section className="section sectionSub">
                <h3 className="h3">{(socks.find((b) => b.id === effectiveSocksId)?.name ?? 'Brand')} socks you can pick from</h3>
                <p className="hint small">
                  Tap one to lock in the exact socks you like.
                </p>
                {selectedSocksProduct && (
                  <div className="selectionNote" aria-live="polite">
                    <span className="selectionNoteLabel">Chosen socks:</span>
                    <span className="selectionNoteValue">{selectedSocksProduct.name}</span>
                  </div>
                )}
                <p className="hint tiny">
                  Note: final color will be picked based on what’s available online when ordering.
                </p>
                <div className="grid productGrid productGrid--socks">
                  {socksProducts.map((p) => (
                    <button
                      key={p.id}
                      className={`productCard ${selectedSocksProductId === p.id ? 'selected' : ''}`}
                      onClick={() => setSelectedSocksProductId(p.id)}
                    >
                      <div className="productImgWrap">
                        <img className="productImg" src={p.imageSrc} alt={p.name} loading="lazy" />
                      </div>
                      <div className="productName">{p.name}</div>
                    </button>
                  ))}
                </div>
              </section>
            )}
            <div className="actions solo">
              <button
                className="btn primary"
                disabled={!socksDraftId || (socksProducts.length > 0 && !selectedSocksProductId)}
                onClick={() => {
                  if (!socksDraftId) return
                  setSocksBrandId(socksDraftId)
                }}
              >
                Confirm
              </button>
            </div>
          </>
        )}

        {step === 'reveal' && (
          <section className="section">
            <div className="badge small">Step 4 of 4</div>
            <h2 className="h2">{giftConfig.steps.reveal.title}</h2>
            <p className="hint">{giftConfig.steps.reveal.subtitle}</p>

            <p className="hint small">
              Colors and exact styles may vary slightly based on what’s in stock online when we order.
            </p>

            <div className="reveal">
              <div className="revealLabel">Your picks</div>
              <div className="revealGrid">
                <div className="revealItem">
                  <div className="revealKey">Top</div>
                  <div className="revealVal revealPick">
                    {topRevealImageSrc ? (
                      <img className="revealThumb" src={topRevealImageSrc} alt={topDisplayName} loading="lazy" />
                    ) : (
                      <div className="revealThumbPlaceholder" aria-hidden="true" />
                    )}
                    <div className="revealPickText">{topDisplayName}</div>
                  </div>
                </div>
                <div className="revealItem">
                  <div className="revealKey">Bottom</div>
                  <div className="revealVal revealPick">
                    {bottomRevealImageSrc ? (
                      <img
                        className="revealThumb"
                        src={bottomRevealImageSrc}
                        alt={bottomDisplayName}
                        loading="lazy"
                      />
                    ) : (
                      <div className="revealThumbPlaceholder" aria-hidden="true" />
                    )}
                    <div className="revealPickText">{bottomDisplayName}</div>
                  </div>
                </div>
                <div className="revealItem">
                  <div className="revealKey">Socks</div>
                  <div className="revealVal revealPick">
                    {socksRevealImageSrc ? (
                      <img
                        className="revealThumb revealThumb--contain"
                        src={socksRevealImageSrc}
                        alt={socksDisplayName}
                        loading="lazy"
                      />
                    ) : (
                      <div className="revealThumbPlaceholder" aria-hidden="true" />
                    )}
                    <div className="revealPickText">{socksDisplayName}</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        <div className="actions">
          {step !== 'intro' ? (
            <button className="btn" onClick={goBack}>
              Back
            </button>
          ) : (
            <div />
          )}

          {step !== 'intro' && (
            <button className="btn ghost" onClick={resetAll}>
              Start over
            </button>
          )}
        </div>
      </main>

      {isGymsharkTopModalOpen && (
        <div
          className="modalOverlay"
          role="dialog"
          aria-modal="true"
          aria-label="Gymshark top notice"
          onClick={() => setIsGymsharkTopModalOpen(false)}
        >
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modalMedia">
              <img
                className="modalImg"
                src={giftConfig.gymsharkTopBlock.imageSrc}
                alt={giftConfig.gymsharkTopBlock.imageAlt}
                loading="eager"
                referrerPolicy="no-referrer"
                onLoad={() => setGymsharkTopImageStatus('loaded')}
                onError={() => setGymsharkTopImageStatus('error')}
              />
            </div>

            <div className="modalText">{giftConfig.gymsharkTopBlock.message}</div>
            {gymsharkTopImageStatus === 'loading' && <div className="modalText subtle">Loading image…</div>}
            {gymsharkTopImageStatus === 'error' && (
              <div className="modalText subtle">
                Image didn’t load (some hosts block embeds). You can still open it directly below.
              </div>
            )}

            <div className="modalActions">
              {gymsharkTopImageStatus === 'error' && (
                <a
                  className="btn"
                  href={giftConfig.gymsharkTopBlock.imageSrc}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open image
                </a>
              )}
              <button className="btn primary" onClick={() => setIsGymsharkTopModalOpen(false)}>
                OK
              </button>
            </div>
          </div>
        </div>
      )}

      {isGymsharkBottomModalOpen && (
        <div
          className="modalOverlay"
          role="dialog"
          aria-modal="true"
          aria-label="Gymshark bottoms notice"
          onClick={() => setIsGymsharkBottomModalOpen(false)}
        >
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modalMedia">
              <img
                className="modalImg"
                src={giftConfig.gymsharkBottomBlock.imageSrc}
                alt={giftConfig.gymsharkBottomBlock.imageAlt}
                loading="eager"
                referrerPolicy="no-referrer"
                onLoad={() => setGymsharkBottomImageStatus('loaded')}
                onError={() => setGymsharkBottomImageStatus('error')}
              />
            </div>

            <div className="modalText">{giftConfig.gymsharkBottomBlock.message}</div>
            {gymsharkBottomImageStatus === 'loading' && <div className="modalText subtle">Loading image…</div>}
            {gymsharkBottomImageStatus === 'error' && (
              <div className="modalText subtle">
                Image didn’t load (some hosts block embeds). You can still open it directly below.
              </div>
            )}

            <div className="modalActions">
              {gymsharkBottomImageStatus === 'error' && (
                <a
                  className="btn"
                  href={giftConfig.gymsharkBottomBlock.imageSrc}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open image
                </a>
              )}
              <button className="btn primary" onClick={() => setIsGymsharkBottomModalOpen(false)}>
                OK
              </button>
            </div>
          </div>
        </div>
      )}

      {isGymsharkSocksModalOpen && (
        <div
          className="modalOverlay"
          role="dialog"
          aria-modal="true"
          aria-label="Gymshark socks notice"
          onClick={() => setIsGymsharkSocksModalOpen(false)}
        >
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modalMedia">
              <img
                className="modalImg"
                src={giftConfig.gymsharkSocksBlock.imageSrc}
                alt={giftConfig.gymsharkSocksBlock.imageAlt}
                loading="eager"
                referrerPolicy="no-referrer"
                onLoad={() => setGymsharkSocksImageStatus('loaded')}
                onError={() => setGymsharkSocksImageStatus('error')}
              />
            </div>

            <div className="modalText modalText--small">{giftConfig.gymsharkSocksBlock.message}</div>
            {gymsharkSocksImageStatus === 'loading' && <div className="modalText subtle">Loading image…</div>}
            {gymsharkSocksImageStatus === 'error' && (
              <div className="modalText subtle">
                Image didn’t load (some hosts block embeds). You can still open it directly below.
              </div>
            )}

            <div className="modalActions">
              {gymsharkSocksImageStatus === 'error' && (
                <a
                  className="btn"
                  href={giftConfig.gymsharkSocksBlock.imageSrc}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open image
                </a>
              )}
              <button className="btn primary" onClick={() => setIsGymsharkSocksModalOpen(false)}>
                OK
              </button>
            </div>
          </div>
        </div>
      )}

      <footer className="footer">
        <span className="fine">
          Edit options in <code>src/giftConfig.ts</code>.
        </span>
      </footer>
    </div>
  )
}

export default App

function BrandStep(props: {
  stepLabel: string
  title: string
  subtitle: string
  options: BrandOption[]
  selectedId: string | null
  onSelect: (id: string) => void
}) {
  return (
    <section className="section">
      <div className="badge small">{props.stepLabel}</div>
      <h2 className="h2">{props.title}</h2>
      <p className="hint">{props.subtitle}</p>
      <p className="hint tiny">
        Note: colors and exact styles may be picked based on what’s available online when ordering.
      </p>

      <div className="grid cards">
        {props.options.map((o) => (
          <button
            key={o.id}
            className={`brandCard ${props.selectedId === o.id ? 'selected' : ''}`}
            onClick={() => props.onSelect(o.id)}
          >
            <div
              className={`brandLogo ${
                o.logo?.type === 'image' && o.logo.fit === 'contain' ? 'contain' : ''
              }`}
            >
              {o.logo?.type === 'image' ? (
                <img className="brandImg" src={o.logo.src} alt={o.logo.alt} loading="lazy" />
              ) : o.logo?.type === 'text' ? (
                <div className="brandTextLogo">{o.logo.text}</div>
              ) : (
                <div className="brandTextLogo">{o.name}</div>
              )}
            </div>
            <div className="brandName">{o.name}</div>
            <div className="brandDesc">{o.description}</div>
          </button>
        ))}
      </div>
    </section>
  )
}
