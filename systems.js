const yaml = require('js-yaml')
const fs = require("fs")

const licensemap = {
    'Apache 2.0': 'https://tldrlegal.com/license/apache-license-2.0-(apache-2.0)',
    'MIT': 'https://tldrlegal.com/license/mit-license',
    'MPL 2.0': 'https://tldrlegal.com/license/mozilla-public-license-2.0-(mpl-2)'
}

const dedentStart = s => s.replace(/^\n/, '')
const dedentEnd = s => s.replace(/\n$/, '')
const dedent = s => dedentEnd(dedentStart(s))
const s = (strings, ...vals) => {
    const rendered = vals.map(v => v && v.join ? v.map(s => dedent(s)).join('\n') : v)
    return strings.reduce((acc, string, i) => `${acc}${i == 0 ? dedentStart(string) : (i == strings.length ? dedentEnd(string) : string)}${rendered[i] || ''}`, '')
}
const Row = (row) => s`
* ${row.hot && ':fire: '}[${row.name}](${row.url}) - ${row.company} ([${row.license && row.license.name}](${row.license && row.license.url || licensemap[row.license && row.license.name] || '#'})). ${row.react && `<img src="react.svg" width="24" style="margin-bottom:-2px"/>[React](${row.react.url})`} ${row.sketch && ` | <img src="sketch.png" width="16" style="margin-bottom:-2px"/> [Sketch](${row.sketch.url})`} ${row.guideline && ` | :book: [Guideline](${row.guideline.url})`} ${row.blog && ` | [Blog](${row.blog.url})`}
`

const Systems = ({ systems }) => s`
<!-- systems-start -->
${systems.map(s => Row(s))}
<!-- systems-end -->
`

const Body = ({ start, systems, end }) => s`
${start}${Systems({ systems })}${end}
`



const loadSystems = file => ({ systems: yaml.safeLoad(fs.readFileSync(file)) })
const parse = readme => {
    const [start, systems, end] = fs.readFileSync(readme).toString().split(/<!-- systems-.* -->\n/g)
    return { start, systems, end }
}

console.log(Body({ ...parse('README.md'), ...loadSystems('systems.yaml') }))