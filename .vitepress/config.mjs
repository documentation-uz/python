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
                    {text: 'Dictionary methods', link: '/essentials/dictionary-methods'},
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
                    },
                    {
                        text: 'List methods', link: '/api-reference/list-methods/', collapsed: true,
                        items: [
                            {text: 'append', link: '/api-reference/list-methods/append'},
                            {text: 'clear', link: '/api-reference/list-methods/clear'},
                            {text: 'copy', link: '/api-reference/list-methods/copy'},
                            {text: 'count', link: '/api-reference/list-methods/count'},
                            {text: 'extend', link: '/api-reference/list-methods/extend'},
                            {text: 'index', link: '/api-reference/list-methods/index'},
                            {text: 'insert', link: '/api-reference/list-methods/insert'},
                            {text: 'pop', link: '/api-reference/list-methods/pop'},
                            {text: 'remove', link: '/api-reference/list-methods/remove'},
                            {text: 'reverse', link: '/api-reference/list-methods/reverse'},
                            {text: 'sort', link: '/api-reference/list-methods/sort'},
                        ]
                    },
                    {
                        text: 'Tuple methods', link: '/api-reference/tuple-methods/', collapsed: true,
                        items: [
                            {text: 'count', link: '/api-reference/tuple-methods/count'},
                            {text: 'index', link: '/api-reference/tuple-methods/index'},
                        ]
                    },
                    {
                        text: 'Set methods', link: '/api-reference/set-methods/', collapsed: true,
                        items: [
                            {text: 'add', link: '/api-reference/set-methods/add'},
                            {text: 'clear', link: '/api-reference/set-methods/clear'},
                            {text: 'copy', link: '/api-reference/set-methods/copy'},
                            {text: 'difference', link: '/api-reference/set-methods/difference'},
                            {text: 'difference_update', link: '/api-reference/set-methods/difference-update'},
                            {text: 'discard', link: '/api-reference/set-methods/discard'},
                            {text: 'intersection', link: '/api-reference/set-methods/intersection'},
                            {text: 'intersection_update', link: '/api-reference/set-methods/intersection-update'},
                            {text: 'isdisjoint', link: '/api-reference/set-methods/isdisjoint'},
                            {text: 'issubset', link: '/api-reference/set-methods/issubset'},
                            {text: 'issuperset', link: '/api-reference/set-methods/issuperset'},
                            {text: 'pop', link: '/api-reference/set-methods/pop'},
                            {text: 'remove', link: '/api-reference/set-methods/remove'},
                            {text: 'symmetric_difference', link: '/api-reference/set-methods/symmetric-difference'},
                            {
                                text: 'symmetric_difference_update',
                                link: '/api-reference/set-methods/symmetric-difference-update'
                            },
                            {text: 'union', link: '/api-reference/set-methods/union'},
                            {text: 'update', link: '/api-reference/set-methods/update'},
                        ]
                    },
                    {
                        text: 'Dictionary methods', link: '/api-reference/dictionary-methods/', collapsed: true,
                        items: [
                            {text: 'clear', link: '/api-reference/dictionary-methods/clear'},
                            {text: 'copy', link: '/api-reference/dictionary-methods/copy'},
                            {text: 'fromkeys', link: '/api-reference/dictionary-methods/fromkeys'},
                            {text: 'get', link: '/api-reference/dictionary-methods/get'},
                            {text: 'items', link: '/api-reference/dictionary-methods/items'},
                            {text: 'keys', link: '/api-reference/dictionary-methods/keys'},
                            {text: 'pop', link: '/api-reference/dictionary-methods/pop'},
                            {text: 'popitem', link: '/api-reference/dictionary-methods/popitem'},
                            {text: 'setdefault', link: '/api-reference/dictionary-methods/setdefault'},
                            {text: 'update', link: '/api-reference/dictionary-methods/update'},
                            {text: 'values', link: '/api-reference/dictionary-methods/values'},
                        ]
                    },
                    {
                        text: 'Magic methods', link: '/api-reference/magic-methods/', collapsed: true,
                        items: [
                            {text: '__abs__', link: '/api-reference/magic-methods/abs'},
                            {text: '__add__', link: '/api-reference/magic-methods/add'},
                            {text: '__and__', link: '/api-reference/magic-methods/and'},
                            {text: '__bool__', link: '/api-reference/magic-methods/bool'},
                            {text: '__ceil__', link: '/api-reference/magic-methods/ceil'},
                            {text: '__class__', link: '/api-reference/magic-methods/class'},
                            {text: '__delattr__', link: '/api-reference/magic-methods/delattr'},
                            {text: '__dir__', link: '/api-reference/magic-methods/dir'},
                            {text: '__divmod__', link: '/api-reference/magic-methods/divmod'},
                            {text: '__doc__', link: '/api-reference/magic-methods/doc'},
                            {text: '__eq__', link: '/api-reference/magic-methods/eq'},
                            {text: '__float__', link: '/api-reference/magic-methods/float'},
                            {text: '__floor__', link: '/api-reference/magic-methods/floor'},
                            {text: '__floordiv__', link: '/api-reference/magic-methods/floordiv'},
                            {text: '__format__', link: '/api-reference/magic-methods/format'},
                            {text: '__ge__', link: '/api-reference/magic-methods/ge'},
                            {text: '__getattribute__', link: '/api-reference/magic-methods/getattribute'},
                            {text: '__getnewargs__', link: '/api-reference/magic-methods/getnewargs'},
                            {text: '__gt__', link: '/api-reference/magic-methods/gt'},
                            {text: '__hash__', link: '/api-reference/magic-methods/hash'},
                            {text: '__index__', link: '/api-reference/magic-methods/index'},
                            {text: '__init__', link: '/api-reference/magic-methods/init'},
                            {text: '__init_subclass__', link: '/api-reference/magic-methods/init-subclass'},
                            {text: '__int__', link: '/api-reference/magic-methods/int'},
                            {text: '__invert__', link: '/api-reference/magic-methods/invert'},
                            {text: '__le__', link: '/api-reference/magic-methods/le'},
                            {text: '__lshift__', link: '/api-reference/magic-methods/lshift'},
                            {text: '__lt__', link: '/api-reference/magic-methods/lt'},
                            {text: '__mod__', link: '/api-reference/magic-methods/mod'},
                            {text: '__mul__', link: '/api-reference/magic-methods/mul'},
                            {text: '__ne__', link: '/api-reference/magic-methods/ne'},
                            {text: '__neg__', link: '/api-reference/magic-methods/neg'},
                            {text: '__new__', link: '/api-reference/magic-methods/new'},
                            {text: '__or__', link: '/api-reference/magic-methods/or'},
                            {text: '__pos__', link: '/api-reference/magic-methods/pos'},
                            {text: '__pow__', link: '/api-reference/magic-methods/pow'},
                            {text: '__radd__', link: '/api-reference/magic-methods/radd'},
                            {text: '__rand__', link: '/api-reference/magic-methods/rand'},
                            {text: '__rdivmod__', link: '/api-reference/magic-methods/rdivmod'},
                            {text: '__reduce__', link: '/api-reference/magic-methods/reduce'},
                            {text: '__reduce_ex__', link: '/api-reference/magic-methods/reduce-ex'},
                            {text: '__repr__', link: '/api-reference/magic-methods/repr'},
                            {text: '__rfloordiv__', link: '/api-reference/magic-methods/rfloordiv'},
                            {text: '__rlshift__', link: '/api-reference/magic-methods/rlshift'},
                            {text: '__rmod__', link: '/api-reference/magic-methods/rmod'},
                            {text: '__rmul__', link: '/api-reference/magic-methods/rmul'},
                            {text: '__ror__', link: '/api-reference/magic-methods/ror'},
                            {text: '__round__', link: '/api-reference/magic-methods/round'},
                            {text: '__rpow__', link: '/api-reference/magic-methods/rpow'},
                            {text: '__rrshift__', link: '/api-reference/magic-methods/rrshift'},
                            {text: '__rshift__', link: '/api-reference/magic-methods/rshift'},
                            {text: '__rsub__', link: '/api-reference/magic-methods/rsub'},
                            {text: '__rtruediv__', link: '/api-reference/magic-methods/rtruediv'},
                            {text: '__rxor__', link: '/api-reference/magic-methods/rxor'},
                            {text: '__setattr__', link: '/api-reference/magic-methods/setattr'},
                            {text: '__sizeof__', link: '/api-reference/magic-methods/sizeof'},
                            {text: '__str__', link: '/api-reference/magic-methods/str'},
                            {text: '__sub__', link: '/api-reference/magic-methods/sub'},
                            {text: '__subclasshook__', link: '/api-reference/magic-methods/subclasshook'},
                            {text: '__truediv__', link: '/api-reference/magic-methods/truediv'},
                            {text: '__trunc__', link: '/api-reference/magic-methods/trunc'},
                            {text: '__xor__', link: '/api-reference/magic-methods/xor'},
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
