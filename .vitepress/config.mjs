import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Python documentation",
    description: "Python documentation in Uzbek language",
    srcDir: "src/pages/",
    head: [
        ['link', {rel: 'icon', href: 'https://www.python.org/static/favicon.ico'}],
    ],
    themeConfig: {
        search: {
            provider: 'local'
        },
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Documentation', link: '/get-started/introduction'},
        ],

        sidebar: [
            {
                text: 'Get started',
                items: [
                    {text: 'Introduction', link: '/get-started/introduction'},
                    {text: 'Quick start', link: '/get-started/quick-start'}
                ]
            },
            {
                text: 'Essentials',
                items: [
                    {text: 'Syntax', link: '/essentials/syntax'},
                    {text: 'Print', link: '/essentials/print'},
                    {text: 'Comments', link: '/essentials/comments'},
                    {text: 'Arithmetic operators', link: '/essentials/arithmetic-operators'},
                    {text: 'Variables', link: '/essentials/variables'},
                    {text: 'Data types', link: '/essentials/data-types'},
                    {text: 'Change data type', link: '/essentials/change-data-type'},
                    {text: 'Input', link: '/essentials/input'},
                    {text: 'Logical operators', link: '/essentials/logical-operators'},
                    {text: 'Comparison operators', link: '/essentials/comparison-operators'},
                    {text: 'String', link: '/essentials/string'},
                    {text: 'String methods', link: '/essentials/string-methods'},
                    {text: 'List', link: '/essentials/list'},
                    {text: 'List methods', link: '/essentials/list-methods'},
                    {text: 'Tuple', link: '/essentials/tuple'},
                    {text: 'Set', link: '/essentials/set'},
                    {text: 'Dictionary', link: '/essentials/dictionary'},
                    {text: 'If statement', link: '/essentials/if-statement'},
                    {text: 'For loop', link: '/essentials/for-loop'},
                    {text: 'While loop', link: '/essentials/while-loop'},
                    {text: 'Function', link: '/essentials/function'},
                    {text: '*args and **kwargs', link: '/essentials/args-and-kwargs'},
                    {text: 'Lambda', link: '/essentials/lambda'},
                    {text: 'Decorator', link: '/essentials/decorator'},
                    {text: 'Introduction to OOP', link: '/essentials/oop/introduction-to-oop'},
                    {text: 'Class', link: '/essentials/oop/class.md'},
                    {text: 'Methods', link: '/essentials/oop/methods.md'},
                    {text: 'Inheritance', link: '/essentials/oop/inheritance.md'},
                    {text: 'super()', link: '/essentials/oop/super.md'},
                    {text: 'Magic methods', link: '/essentials/oop/magic-methods.md'},
                ]
            },
            {
                text: 'API Reference', link: '/api-reference/',
                items: [
                    {text: 'print', link: '/api-reference/print'},
                    {text: 'input', link: '/api-reference/input'},
                    {
                        text: 'Data types', link: '/api-reference/data-types/', collapsed: true,
                        items: [
                            {text: 'str', link: '/api-reference/data-types/str'},
                            {text: 'int', link: '/api-reference/data-types/int'},
                            {text: 'float', link: '/api-reference/data-types/float'},
                            {text: 'complex', link: '/api-reference/data-types/complex'},
                            {text: 'list', link: '/api-reference/data-types/list'},
                            {text: 'tuple', link: '/api-reference/data-types/tuple'},
                            {text: 'range', link: '/api-reference/data-types/range'},
                            {text: 'dict', link: '/api-reference/data-types/dict'},
                            {text: 'set', link: '/api-reference/data-types/set'},
                            {text: 'frozenset', link: '/api-reference/data-types/frozenset'},
                            {text: 'bool', link: '/api-reference/data-types/bool'},
                            {text: 'bytes', link: '/api-reference/data-types/bytes'},
                            {text: 'bytearray', link: '/api-reference/data-types/bytearray'},
                            {text: 'memoryview', link: '/api-reference/data-types/memoryview'},
                            {text: 'NoneType', link: '/api-reference/data-types/none-type'},
                        ]
                    },
                    {
                        text: 'String methods', link: '/api-reference/string-methods/', collapsed: true,
                        items: [
                            {text: 'capitalize', link: '/api-reference/string-methods/capitalize'},
                            {text: 'casefold', link: '/api-reference/string-methods/casefold'},
                            {text: 'casefold', link: '/api-reference/string-methods/casefold'},
                            {text: 'center', link: '/api-reference/string-methods/center'},
                            {text: 'count', link: '/api-reference/string-methods/count'},
                            {text: 'encode', link: '/api-reference/string-methods/encode'},
                            {text: 'endswith', link: '/api-reference/string-methods/endswith'},
                            {text: 'expandtabs', link: '/api-reference/string-methods/expandtabs'},
                            {text: 'find', link: '/api-reference/string-methods/find'},
                            {text: 'format', link: '/api-reference/string-methods/format'},
                            {text: 'format_map', link: '/api-reference/string-methods/format_map'},
                            {text: 'index', link: '/api-reference/string-methods/index'},
                            {text: 'isalnum', link: '/api-reference/string-methods/isalnum'},
                            {text: 'isalpha', link: '/api-reference/string-methods/isalpha'},
                            {text: 'isascii', link: '/api-reference/string-methods/isascii'},
                            {text: 'isdecimal', link: '/api-reference/string-methods/isdecimal'},
                            {text: 'isdigit', link: '/api-reference/string-methods/isdigit'},
                            {text: 'isidentifier', link: '/api-reference/string-methods/isidentifier'},
                            {text: 'islower', link: '/api-reference/string-methods/islower'},
                            {text: 'isnumeric', link: '/api-reference/string-methods/isnumeric'},
                            {text: 'isprintable', link: '/api-reference/string-methods/isprintable'},
                            {text: 'isspace', link: '/api-reference/string-methods/isspace'},
                            {text: 'istitle', link: '/api-reference/string-methods/istitle'},
                            {text: 'isupper', link: '/api-reference/string-methods/isupper'},
                            {text: 'join', link: '/api-reference/string-methods/join'},
                            {text: 'ljust', link: '/api-reference/string-methods/ljust'},
                            {text: 'lower', link: '/api-reference/string-methods/lower'},
                            {text: 'lstrip', link: '/api-reference/string-methods/lstrip'},
                            {text: 'maketrans', link: '/api-reference/string-methods/maketrans'},
                            {text: 'partition', link: '/api-reference/string-methods/partition'},
                            {text: 'removeprefix', link: '/api-reference/string-methods/removeprefix'},
                            {text: 'removesuffix', link: '/api-reference/string-methods/removesuffix'},
                            {text: 'replace', link: '/api-reference/string-methods/replace'},
                            {text: 'rfind', link: '/api-reference/string-methods/rfind'},
                            {text: 'rindex', link: '/api-reference/string-methods/rindex'},
                            {text: 'rjust', link: '/api-reference/string-methods/rjust'},
                            {text: 'rpartition', link: '/api-reference/string-methods/rpartition'},
                            {text: 'rsplit', link: '/api-reference/string-methods/rsplit'},
                            {text: 'rstrip', link: '/api-reference/string-methods/rstrip'},
                            {text: 'split', link: '/api-reference/string-methods/split'},
                            {text: 'splitlines', link: '/api-reference/string-methods/splitlines'},
                            {text: 'startswith', link: '/api-reference/string-methods/startswith'},
                            {text: 'strip', link: '/api-reference/string-methods/strip'},
                            {text: 'swapcase', link: '/api-reference/string-methods/swapcase'},
                            {text: 'title', link: '/api-reference/string-methods/title'},
                            {text: 'translate', link: '/api-reference/string-methods/translate'},
                            {text: 'upper', link: '/api-reference/string-methods/upper'},
                            {text: 'zfill', link: '/api-reference/string-methods/zfill'},
                        ]
                    }
                ]
            }
        ],

        socialLinks: [
            {icon: 'youtube', link: 'https://youtube.com/documentation-uz'},
            {icon: 'twitter', link: 'https://twitter.com/documentation-uz'},
            {icon: 'github', link: 'https://github.com/documentation-uz/python'}
        ]
    }
})
