module.exports = {
    conventions: {
        ignored: /.test./
    },
    overrides: {
        production: {
            sourceMaps: true
        }
    },
    files: {
        javascripts: {
            joinTo: {
                'app.js': /^app/,
                'vendor.js': /^(?!app)/
            }
        },
        stylesheets: {
            joinTo: 'app.css'
        },
        templates: {
            joinTo: 'app.js'
        },
    },
    modules: {
        autoRequire: {
            'app.js': ['app']
        }
    },
    plugins: {
        brunchTypescript: {
            "jsx": "react"
        },
        stylus: {
            includeCss: true, // copy @imported css directly
        },
    },
};
