# AstroSeúl 2026 — guía del viaje a Abu Dhabi y Seúl de Laura, Maggie y Alex (18–27 sep)

App **pública e independiente**, en el estilo de la suite AstroTools (navy + dorado, planeta con
órbita y símbolo propio: un **tejado de palacio coreano**). Guía de bolsillo, solo visualización,
para movernos por **Abu Dhabi (2 días)** y **Seúl (6 días)** del **18 al 27 de septiembre de 2026**.

## Qué es / qué NO es
- **Standalone.** Vive aparte, **fuera** del repo de AstroTools. **No** está en `shared/brand.js`,
  ni en el hub, ni en el `sitemap.xml` de la suite. No carga `../shared/*`.
- **Reutiliza el look & feel** de la familia, con **cabecera propia** (sin conmutador de apps) y
  **sin** `<astro-feedback>`. **Single `index.html` autocontenido** (CSS y JS dentro). **Solo castellano**.
- Gemela de AstroLanzarote2026 / AstroSonar2026, con símbolo propio (tejado de palacio) y un aviso
  específico de **Chuseok**.

## Estructura
```
AstroSeoul2026/
├── index.html      ← toda la app (autocontenida)
├── og.jpg          ← preview 1200×630 (compartir por WhatsApp/redes)
├── robots.txt      ← indexable (es pública)
├── sitemap.xml     ← su propio sitemap
└── README.md       ← este archivo
```

## Navegación (2 grupos)
- **Barra de pestañas** (arriba) = *"En el viaje"*, lo de uso diario: **Hoy · Agenda · Moneda · Idioma ·
  Directorio (Teléfonos y direcciones) · Guía**.
- **Guía** = *hub/índice* (tarjetas) que agrupa lo de *"leer para entender/preparar"*: **Chuseok · Maleta ·
  Apps · Transporte · Alojamiento · Reservas**. Cada tarjeta abre su sub-página (que sigue existiendo).
- **Menú hamburguesa** (☰, junto a AstroSeúl, estilo suite AstroTools): *drawer* con **todas** las
  secciones, etiquetadas en los dos grupos ("En el viaje" / "La guía").
- `showPage()` resalta la pestaña **Guía** cuando estás en cualquiera de sus sub-páginas (`GUIA_SUB`).
- **Bienvenida diaria:** al abrir la app **la primera vez de cada día del viaje**, sale un modal con un
  **resumen gracioso** del día (título, ciudad y un texto con humor). Se muestra una vez al día
  (recordado en `localStorage` del propio dispositivo, clave `astroseoul_welcome`). Fuera de fechas no
  aparece. Para previsualizar cualquier día: `showWelcome(idx)` por consola.

## Secciones
**Hoy** (estado del viaje: cuenta atrás / día N de 10 / terminado, + plan del día) ·
**Agenda** (se abre por defecto en el día de hoy; selector de día V18→D27 con **código de 3 letras**
por día —BCN / ABU / SEU—; por momentos 🌅 Mañana / ☀️ Mediodía / 🌇 Tarde / 🌙 Noche; botón **Maps** y
botón **ℹ️ Info** —modal con historia y curiosidades— por sitio; reloj en vivo que **atenúa lo ya
pasado** y **resalta lo que está en marcha**) · **Chuseok** (solo desde el menú ☰ o enlaces: aviso de
la gran fiesta coreana que coincide con el viaje: qué abre y qué cierra) · **Alojamiento** (Airbnb LUNA
HAUS en Seúl + hotel de Abu Dhabi *pendiente*) · **Transporte** (metro/T-money/Kakao T en Seúl,
taxi/Careem en Abu Dhabi; sin coche de alquiler) · **Apps** (Naver Map, KakaoMap, Papago, Kakao T,
Subway Korea; Careem, Abu Dhabi Taxi, Louvre AD; con enlaces de descarga) · **Reservas** (✈️ vuelos
Etihad confirmados, entradas con hora, comidas) · **Teléfonos** (emergencias de Corea y EAU, línea de
turismo 1330, anfitrión, embajadas + WhatsApp). Ahora es **"Teléfonos y direcciones" (Directorio)**:
data-driven vía array `CONTACTOS` (emergencias / direcciones / contactos) que pinta filas homogéneas con
botones-pastilla **📞 Llamar · 📍 Maps · 💬 WhatsApp** según los datos de cada entrada. Incluye alojamiento,
embajadas (Seúl y Abu Dhabi), aeropuertos (ICN/AUH/BCN) y estación de Seúl, con su Google Maps.
Cada entrada tiene `loc` (`seul`/`abu`/`both`) y un **conmutador de ciudad** (Seúl / Abu Dhabi, estilo
Idioma) filtra las tres tarjetas; las que quedan vacías se ocultan. `defaultDirLoc()` abre en la ciudad
del **día actual** de la agenda (por `code`), y antes del viaje en **Abu Dhabi** (primer destino).

## Secciones nuevas (v3)
- **Maleta y clima:** clima típico de septiembre por ciudad, documentos (pasaporte, K-ETA Corea por
  confirmar, visado EAU no necesario), enchufes (Corea C/F = como España; EAU tipo G = adaptador),
  checklist de equipaje y **mapas guardados** (lista de Abu Dhabi de Maggie; Seúl pendiente).
- **Idioma:** chuleta ES→coreano y ES→árabe con romanización (pronunciación). Toggle entre idiomas.
- **Moneda:** conversor interactivo EUR ↔ KRW ↔ AED (escribe en cualquier casilla) + chuletas de
  importes. Rates base en el JS (`RATES`); si hay internet, se **actualizan solos** vía open.er-api.com
  (con respaldo offline). Incluye "truco mental".
- **Agenda:** ahora casi todos los items tienen **hora estimada** (según horarios de apertura) y hay
  bloques de **"Tiempo libre"**. Items con datos de los **aviones** (B787-9 y A350-1000) y notas de
  **arquitectura / Pritzker** (Nouvel en Louvre AD; Botta/Nouvel/Koolhaas en Leeum; Zaha Hadid en DDP;
  Foster y Gehry en Saadiyat; Kim Swoo-geun en SPACE, etc.).
- **⚠️ Conflicto resuelto (mié 23):** la hoja original ponía Bukchon 09:30–11:00 **y** MMCA 11:15–13:30,
  sin hueco para Gyeongbokgung. Se reordenó a **Gyeongbokgung 09:00–10:15 → Bukchon 10:20–11:15 → MMCA
  11:30–13:30**. Aun así la mañana va **muy justa** (3 visitas grandes): decidir si se acorta o se mueve algo.

## Offline / instalable (PWA)
`manifest.webmanifest` + `sw.js` (service worker) + `icon-192.png`/`icon-512.png` (generados con
`.claude/gen-icons-seoul.ps1`). El SW cachea `index.html`, `og.jpg`, iconos y manifest en la primera
visita **con conexión**; después la guía **funciona sin internet** (los enlaces externos —Maps, tiendas,
API de cambio— sí necesitan red). Se puede **"Añadir a pantalla de inicio"** y abrir como app a pantalla
completa. Al cambiar `index.html`, subir `CACHE` en `sw.js` (`astroseoul-vN`) para forzar actualización.

## Privacidad / buscadores
La guía es **privada de facto**: `noindex,nofollow,noarchive` en el `<head>` y `robots.txt` con
`Disallow: /` (sin `sitemap.xml`). Los buscadores serios no la indexarán. **Aviso:** GitHub Pages en
plan gratuito **sirve el repo en abierto**, así que cualquiera con la URL exacta puede verla; lo que
conseguimos es que **no salga en Google** ni se comparta el enlace por descuido. Para privacidad total
haría falta Pages de pago (repo privado) u otro hosting con contraseña.

## Datos editables (al principio del `<script>` de `index.html`)
- **`DIAS`** — array de días. Cada día: `id`, `d:[año,mes,día]`, `dow`, `dnum`, `code` (3 letras del
  selector: BCN/ABU/SEU), `loc` (ciudad), `titulo`, `resumen` (texto gracioso de la bienvenida diaria),
  `items[]`. Cada item: `per` (`man|med|tar|noc`), `t`/`end` (hora, opcional), `name`, `place`,
  `maps` (texto → enlace `?q=`), `info` (texto del modal ℹ️; párrafos separados por `\n\n`), `tel`,
  `wa`, `url`, `ico`, `key` (Top), `tag` (`book` = Reserva).
- **`PERIODOS`** — etiquetas e iconos de los momentos del día.
- **`GRUPO_WHATSAPP`** — vacío. Pon el número internacional sin signos (ej. `"34611223344"`) y
  aparece el botón directo al chat del grupo.

### Lógica de tiempo
- `itemWindow(day,it)` = ventana `[inicio,fin]` de cada item. Con hora `t`, usa `t`→`end` (o +90 min);
  sin hora, usa la franja de su momento (`PERWIN`: man 7–12, med 12–16, tar 16–20, noc 20–24).
- `tickAgenda()` (cada 30 s) marca **live** (verde) y **past** (atenuado). El indicador "🕒 Ahora…"
  solo aparece si HOY cae dentro del viaje.
- La agenda se abre por defecto en el día de hoy (`findToday()`); `updateStatus()` pinta el hero y
  `renderHoy()` el plan del día (o cuenta atrás / despedida). El modal ℹ️ lo gestiona `openInfo/closeInfo`.
- **Nota horaria:** el reloj usa la hora local del dispositivo. Abu Dhabi va +3 h respecto a España
  peninsular y Seúl +7 h; cuando estéis allí, poned el móvil en hora local y todo cuadra.

## Datos del viaje (confirmados / investigados jul 2026)
> **Privacidad (repo PÚBLICO):** NO se incluyen apellidos, nº de confirmación del Airbnb, ni datos
> de pago. Están solo en el email. El teléfono del anfitrión (Cannes) SÍ aparece por ser necesario
> para el check-in; si preferís quitarlo, se borra de `Alojamiento` y `Teléfonos`.

- **Alojamiento Seúl (Airbnb "LUNA HAUS"):** 404-4 Changsin-dong, Jongno-gu, Seúl · 76 m², hasta 6
  personas (vais 3) · a 2 min del metro **Dongmyo** · entrada lun 21 sep (después de 15:00), salida
  sáb 26 sep (antes de 11:00) · auto check-in con teclado · anfitrión Cannes.
- **Alojamiento Abu Dhabi:** **PENDIENTE** (noches del 19 y 20). Falta nombre y dirección.
- **Vuelos (Etihad, ref. 7J2XJV — confirmados):**
  - EY114 · vie 18 · BCN T1 22:30 → AUH TA 07:05 (+1) · B787-9 · 6 h 35.
  - EY822 · dom 20 · AUH TA 21:10 → ICN T1 10:50 (+1) · A350-1000 · 8 h 40.
  - EY823 · sáb 26 · ICN T1 18:20 → AUH TA 23:05 · A350-1000 · 9 h 45.
  - EY111 · dom 27 · AUH TA 02:30 → BCN T1 07:35 · B787-9 · 7 h 05.
  - Ida con **stopover de 2 días en Abu Dhabi**; vuelta con **escala nocturna en AUH** (~3 h 30).
  - Nota horaria: EAU va **+2 h** sobre España peninsular (verano) y Corea **+7 h**.
- **Sin coche de alquiler.**
- **Chuseok 2026:** día grande **vie 25**, festivo **jue 24–dom 27**. Coincide con Seúl → aviso en
  la pestaña. Palacios y grandes museos abren (a menudo gratis); tiendas/cafés pequeños y galerías
  pequeñas pueden cerrar (afecta sobre todo a Seongsu jue 24 y barrios el vie 25). Leeum cierra en
  Chuseok → se hace el mar 22, a salvo.
- **Abu Dhabi (investigado):** Louvre Abu Dhabi (Saadiyat) cierra **lunes**; sáb 10:00–20:30; mejor
  entrada online. Mezquita Sheikh Zayed sáb 09:00–21:00 (vie cerrada por la mañana), vestimenta
  estricta (mujeres, pañuelo). Corniche y Qasr Al Watan como opciones.
- **Seúl (investigado):** Leeum (Yongsan, con reserva, cierra lun/Chuseok) · Gyeongbokgung
  (09:00–18:00, cierra **martes**, gratis con hanbok) · MMCA Seúl (30 Samcheong-ro; mié y sáb hasta
  21:00) · Kukje Gallery (54 Samcheong-ro; lun–sáb 10–18) · Arario Museum in SPACE (Yulgok-ro; mar–dom
  10–19, ~15.000 ₩) · DDP (281 Eulji-ro, 10–21) · Lehmann Maupin (213 Itaewon-ro, mar–sáb 11–19) ·
  Yoonseul/Malli-dong (33 Toegye-ro, instalación al aire libre) · Seongsu / Daelim Changgo · Yeonnam +
  Gyeongui Line Forest Park · Hongdae.

> Horarios y aperturas **sujetos a cambios** (más con Chuseok): confirmar en Naver/KakaoMap o por
> teléfono. Las horas sin dato concreto se muestran solo por momento del día (no se inventaron).

## Desarrollo / verificación
- Servir en local: config **`astroseoul2026`** de `.claude/launch.json` → `.claude/serve-seoul.ps1`
  (**puerto 3007**, para no chocar con `astrotools` en el 3000). Abrir `http://localhost:3007/`.
- Verificado (jul 2026): sin errores de consola; 8 pestañas, selector de 10 días, reloj en vivo,
  estado del hero, modal ℹ️, enlaces `tel:`/Maps/WhatsApp OK; `og.jpg`/`robots.txt`/`sitemap.xml`
  sirven 200.

## OG image
Generador (no vive en esta carpeta): **`.claude/gen-og-seoul.ps1`** (GDI+ desde PowerShell,
1200×630, JPEG calidad 82). Mismo estilo que la suite, con el **tejado de palacio** como símbolo.
⚠️ Windows PowerShell 5.1 lee los `.ps1` como ANSI: los textos con tildes se construyen con códigos
`[char]` (p. ej. `ú`=0xFA). Ejecutar como `powershell -File ...` (no inline).

## Despliegue
Pensada para **GitHub Pages**, repo `alex-sq-uh/AstroSeoul2026`, rama `main` / raíz. La URL base del
SEO/OG es `https://alex-sq-uh.github.io/AstroSeoul2026/` (constante en el `<head>`, `robots.txt` y
`sitemap.xml`). El repo aún **no está creado ni desplegado**: hay que crear el repo público vacío en
github.com/new (nombre exacto = `AstroSeoul2026`, sin README) y activar Pages (main / raíz).
**No hacer `git push` sin confirmación del dueño.**

## Pendiente (según lleguen datos)
- Hotel de Abu Dhabi (nombre, dirección, Maps, check-in/out).
- Traslados aeropuerto↔hotel/Airbnb (AUH e ICN).
- Reservas concretas (restaurantes de barbacoa/Euljiro, entradas con hora de Louvre AD / Leeum).
- Confirmar horarios de galerías pequeñas de Seongsu por Chuseok.
- ~~Vuelos~~ ✅ hechos (Etihad 7J2XJV).
