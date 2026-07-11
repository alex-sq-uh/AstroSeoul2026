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

## Secciones (pestañas)
**Hoy** (estado del viaje: cuenta atrás / día N de 10 / terminado, + plan del día) ·
**Agenda** (se abre por defecto en el día de hoy; selector de día V18→D27 con la ciudad de cada día;
por momentos 🌅 Mañana / ☀️ Mediodía / 🌇 Tarde / 🌙 Noche; botón **Maps** y botón **ℹ️ Info** —modal
con historia y curiosidades— por sitio; reloj en vivo que **atenúa lo ya pasado** y **resalta lo que
está en marcha**) · **Chuseok** (aviso de la gran fiesta coreana que coincide con el viaje: qué abre
y qué cierra) · **Alojamiento** (Airbnb LUNA HAUS en Seúl + hotel de Abu Dhabi *pendiente*) ·
**Transporte** (metro/T-money/Kakao T en Seúl, taxi/Careem en Abu Dhabi; sin coche de alquiler) ·
**Apps** (Naver Map, KakaoMap, Papago, Kakao T, Subway Korea; Careem, Abu Dhabi Taxi, Louvre AD;
con enlaces de descarga) · **Reservas** (✈️ vuelos *por confirmar*, entradas con hora, comidas) ·
**Teléfonos** (emergencias de Corea y EAU, línea de turismo 1330, anfitrión, embajadas + WhatsApp).

## Datos editables (al principio del `<script>` de `index.html`)
- **`DIAS`** — array de días. Cada día: `id`, `d:[año,mes,día]`, `dow`, `dnum`, `loc` (ciudad),
  `titulo`, `items[]`. Cada item: `per` (`man|med|tar|noc`), `t`/`end` (hora, opcional), `name`,
  `place`, `maps` (texto → enlace `?q=`), `info` (texto del modal ℹ️; párrafos separados por `\n\n`),
  `tel`, `wa`, `url`, `ico`, `key` (Top), `tag` (`book` = Reserva).
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
- **Vuelos (PENDIENTE confirmar compañía/nº):** ida vie 18 BCN→AUH salida ~22:30; AUH→ICN dom 20
  salida ~21:30 (llega lun 21); vuelta ICN→BCN sáb 26 salida ~18:30 (llega dom 27). Horas tomadas
  del calendario del viaje ("Salimos"), a confirmar con las tarjetas de embarque.
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
- Vuelos: compañía, números y horas exactas (ida, AUH→ICN, vuelta) + traslados.
- Reservas concretas (restaurantes de barbacoa/Euljiro, entradas con hora).
- Confirmar horarios de galerías pequeñas de Seongsu por Chuseok.
