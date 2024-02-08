# List methods

Listlar bilan ishlashni osonlashtirish uchun uning asosiy metodlari bilan
tanishamiz.

## `append` metodi

Listga oxiridan yangi element qo'shish uchun foydalaniladi.

```python {3}
a = [1, 2, 3, 4, 5, 6]

a.append(7)

print(a)
```

Natija

```text
[1, 2, 3, 4, 5, 6, 7]
```

## `insert` metodi

List ichiga element qo'shish uchun foydalaniladi.

```python {3}
a = [1, 2, 3, 4, 5, 6]

a.insert(2, 99)

print(a)
```

2-indeks sifatida `99` sonini list orasiga qo'shadi.

Natija

```text
[1, 2, 99, 3, 4, 5, 6]
```

## `remove` metodi

Listdan elementni o'chirish uchun ishlatiladi.

```python {3}
a = ['apple', 'banana', 'cherry', 'mango']

a.remove('cherry')

print(a)
```

Listdan 'cherry' elementini o'chirib tashlaydi. Natija

```text
['apple', 'banana', 'mango']
```

## `pop` metodi

Listdan elementni indeks bo'yicha o'chiradi.

```python {3}
a = ['apple', 'banana', 'cherry', 'mango']

a.pop(1)

print(a)
```

Listdan 1-indeksdagi elementni o'chirib tashlaydi. Natija

Natija

```text
['apple', 'cherry', 'mango']
```

## `sort` metodi

Listdagi elementlarni tartiblash uchun ishlatiladi.

```python {3}
a = [10, 8, 3, 9, 0, 1, 5]

a.sort()

print(a)
```

Natija

```text
[0, 1, 3, 5, 8, 9, 10]
```

## `count` metodi

Listdagi ma'lum bir elementni nechtaligini sanaydi.

```python {3}
a = [1, 2, 1, 4, 1, 6, 9, 2, 2, 3, 4]

x = a.count(2)

print(x)
```

Listda qiymati `2`ga teng bo'lgan elementlar nechtaligini sanaydi. Natija

```text
3
```

List metodlarining to'liq ro'yxati bilan [bu yerda](../../api-reference/list-methods/index.md) tanishib chiqishingiz
mumkin.
