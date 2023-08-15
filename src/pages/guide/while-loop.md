# While loop

`while` ham `for` operatoriga o'xshab takrorlanadigan yoki aylanadigan amallarni
bajarish uchun foydalaniladi. Farqi shundaki, `for` operatoridan 
foydalanganimizda biz amal(lar)ni qancha aylanishini belgilaymiz. `while`
bilan yozganimizda esa, qachongacha aylanishini belgilaymiz.

## Foydalanish

```python
a = input("a = ")

a = int(a)

while a != 3:
    print(a)
    a = a * 2
    a = a % 4
```

Yuqoridagi kodda `a` o'zgaruvchisining qiymati `3` ga teng bo'lguncha 
`while` ichidagi amallar bajariladigan dastur yozilgan.
