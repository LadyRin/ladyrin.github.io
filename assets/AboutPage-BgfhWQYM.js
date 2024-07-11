import {
  d as b,
  o as d,
  c as m,
  a as e,
  t as i,
  n as j,
  _ as g,
  r as u,
  b as w,
  F as y,
  e as S,
  f as x,
  g as L,
  p as P,
  h as C,
  i as v,
  j as M
} from './index-BtNCzuUo.js'
const A = { class: 'container' },
  B = { class: 'bar' },
  $ = b({
    __name: 'LanguageBar',
    props: { language: { type: Object, required: !0 } },
    setup(s) {
      return (p, r) => (
        d(),
        m('div', A, [
          e(
            'span',
            null,
            i(s.language.name) + ' - ' + i(s.language.text) + ' - ' + i(s.language.percent) + '% ',
            1
          ),
          e('div', B, [
            e(
              'div',
              {
                class: 'progress',
                style: j({ width: s.language.percent + '%', backgroundColor: s.language.color })
              },
              null,
              4
            )
          ])
        ])
      )
    }
  }),
  q = g($, [['__scopeId', 'data-v-57a9df90']]),
  l = (s) => (P('data-v-14a7fb74'), (s = s()), C(), s),
  I = { class: 'container', id: 'about-page' },
  D = l(() =>
    e(
      'li',
      null,
      [
        e('a', { href: 'https://github.com/LadyRin', target: '_blank' }, [
          e(
            'svg',
            {
              height: '32',
              'aria-hidden': 'true',
              viewBox: '0 0 16 16',
              version: '1.1',
              width: '32',
              'data-view-component': 'true',
              class: 'octicon octicon-mark-github v-align-middle color-fg-default'
            },
            [
              e('path', {
                fill: '#e0e1dd',
                d: 'M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z'
              })
            ]
          )
        ])
      ],
      -1
    )
  ),
  O = { class: 'wrapper' },
  J = L(
    '<h1 data-v-14a7fb74>À propos de moi</h1><div class="intro" data-v-14a7fb74><p data-v-14a7fb74> Bonjour, je m&#39;appelle Alexandre Letellier, j&#39;ai 21 ans et je suis actuellement étudiant en 3ème année de BUT informatique à l&#39;IUT de Montpellier-Sète. J&#39;ai commencé à apprendre la programmation à l&#39;âge de 12 ans, dans l&#39;objectif de créer des <em data-v-14a7fb74>mods</em> pour le jeu vidéo Minecraft. Depuis, je n&#39;ai pas arrêté de m&#39;intéresser à l&#39;informatique et à la programmation. J&#39;ai notamment appris à utiliser des moteurs de jeu comme Unity pour réaliser des prototypes de jeu. Grâce à mes études, j&#39;ai pu approfondir mes connaissances en informatique et en programmation, et ce dans des domaines variés comme le développement web, le développement logiciel, la gestion de bases de données, etc. </p></div><h2 data-v-14a7fb74>Mes compétences</h2><div class="skills" data-v-14a7fb74><div data-v-14a7fb74><h3 data-v-14a7fb74>Langages de programmation</h3><ul data-v-14a7fb74><li data-v-14a7fb74>Java</li><li data-v-14a7fb74>C#</li><li data-v-14a7fb74>C et C++</li><li data-v-14a7fb74>Python</li><li data-v-14a7fb74>HTML / CSS</li><li data-v-14a7fb74>JavaScript</li><li data-v-14a7fb74>PHP</li><li data-v-14a7fb74>SQL (PostgreSQL et Oracle)</li></ul></div><div data-v-14a7fb74><h3 data-v-14a7fb74>Frameworks et bibliothèques</h3><ul data-v-14a7fb74><li data-v-14a7fb74>Symfony</li><li data-v-14a7fb74>VueJS</li><li data-v-14a7fb74>API Platform</li><li data-v-14a7fb74>OpenGL</li></ul></div><div data-v-14a7fb74><h3 data-v-14a7fb74>Outils et autres compétences</h3><ul data-v-14a7fb74><li data-v-14a7fb74>Git</li><li data-v-14a7fb74>Linux</li><li data-v-14a7fb74>Unity</li><li data-v-14a7fb74>Docker</li><li data-v-14a7fb74>Anglais professionnel</li><li data-v-14a7fb74>Gestion de projet / Méthodes Agiles</li></ul></div></div>',
    4
  ),
  T = l(() =>
    e(
      'h2',
      null,
      [
        v(' Quelques stats (fournies par '),
        e('a', { href: 'https://wakatime.com/', target: '_blank' }, 'Wakatime'),
        v(') ')
      ],
      -1
    )
  ),
  G = l(() => e('img', { src: M, alt: '' }, null, -1)),
  H = [G],
  U = { class: 'languages' },
  V = l(() => e('h3', null, 'Activité', -1)),
  F = l(() =>
    e(
      'figure',
      { class: 'wakatime' },
      [
        e('embed', {
          class: 'wakatime-embed',
          src: 'https://wakatime.com/share/@b0186d72-d67e-4efc-b5bf-3e016c9b83d9/44c684ad-791d-4d1c-8dfb-dc78867276c6.svg'
        })
      ],
      -1
    )
  ),
  N = b({
    __name: 'AboutPage',
    emits: { openPage: (s) => !0 },
    setup(s, { emit: p }) {
      const r = u('Loading...'),
        h = u('Loading...'),
        _ = p,
        c = (a) => {
          _('openPage', a)
        },
        k = (a) => {
          const t = Math.floor(a / 3600),
            o = Math.floor((a % 3600) / 60)
          return `${t}hrs ${o}min`
        },
        n = u([]),
        f = () => {
          fetch(
            'https://wakatime.com/share/@b0186d72-d67e-4efc-b5bf-3e016c9b83d9/799796cc-7c0f-4814-832d-cec25324fcb9.json'
          )
            .then((a) => a.json())
            .then((a) => {
              ;(r.value = a.data.grand_total.human_readable_total),
                (h.value = a.data.grand_total.human_readable_daily_average)
            })
            .then(() => {
              fetch(
                'https://wakatime.com/share/@b0186d72-d67e-4efc-b5bf-3e016c9b83d9/1ff55c75-beed-49c4-9fe4-84a9f2a94aa2.json'
              )
                .then((a) => a.json())
                .then((a) => {
                  n.value = a.data.map((t) => ({
                    name: t.name,
                    text: t.text,
                    percent: t.percent,
                    seconds: t.total_seconds,
                    color: t.color
                  }))
                })
                .then(() => {
                  const a = {
                    name: 'Others',
                    text: 'Others',
                    percent: 0,
                    seconds: 0,
                    color: '#000000'
                  }
                  n.value.forEach((t) => {
                    t.percent < 2 && ((a.percent += t.percent), (a.seconds += t.seconds))
                  }),
                    (a.percent = Math.round(a.percent * 100) / 100),
                    (n.value = n.value.filter((t) => t.percent >= 2)),
                    (a.text = k(a.seconds)),
                    n.value.push(a)
                })
            })
        }
      return (
        w(() => {
          f()
        }),
        (a, t) => (
          d(),
          m('div', I, [
            e('nav', null, [
              e('ul', null, [
                e('li', null, [
                  e(
                    'span',
                    { onClick: t[0] || (t[0] = (o) => c('?path=/home/shark/Desktop/About.html')) },
                    ' À propos '
                  )
                ]),
                e('li', null, [
                  e(
                    'span',
                    {
                      onClick:
                        t[1] || (t[1] = (o) => c('?path=/home/shark/Documents/Projects.html'))
                    },
                    ' Projets '
                  )
                ]),
                e('li', null, [
                  e(
                    'span',
                    {
                      onClick: t[2] || (t[2] = (o) => c('?path=/home/shark/Documents/Contact.html'))
                    },
                    ' Contact '
                  )
                ]),
                D
              ])
            ]),
            e('main', null, [
              e('div', O, [
                J,
                e('div', { class: 'wakatime-header' }, [
                  T,
                  e('button', { onClick: f, id: 'refresh-button' }, H)
                ]),
                e('h4', null, "Heures de code (Septembre 2023 - Aujourd'hui) : " + i(r.value), 1),
                e('h4', null, 'Moyenne quotidienne : ' + i(h.value) + ' par jour', 1),
                e('div', U, [
                  (d(!0),
                  m(
                    y,
                    null,
                    S(
                      n.value,
                      (o) => (d(), x(q, { language: o, key: o.name }, null, 8, ['language']))
                    ),
                    128
                  ))
                ]),
                V,
                F
              ])
            ])
          ])
        )
      )
    }
  }),
  E = g(N, [['__scopeId', 'data-v-14a7fb74']])
export { E as default }
