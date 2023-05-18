# Insertion Sort
```
[22,27,16,2,18,6] 		
```		
## Yukarıda verilen dizinin sort türüne göre aşamalarını yazınız.
```
1. [2,27,16,22,18,6] -> En küçük (2) elemanı bulduk ve 1. sıradaki eleman (22) ile yer değiştirdik.
2. [2,6,16,22,18,27] -> 2. En küçük elemanı (6) bulduk ve 2. sıradaki eleman (27) ile yer değiştirdik.
3. [2,6,16,22,18,27] -> 16 halihazırda 3. en küçük eleman olduğundan hiçbir değişiklik yapmadık.
4. [2,6,16,18,22,27] -> 4. En küçük elemanı (18) bulduk ve 4.sıradaki eleman (22) ile yer değiştirdik.
5. [2,6,16,18,22,27] -> Son iki eleman (22, 27) kendiliğinden sırada olduğundan bir değişiklik yapmadık ve dizinin sıralanması bu şekilde tamamlandı.
```

## Big-O gösterimini yazınız.
```
n+(n-1)+...+(n-5) -> n*(n+1)/2 -> n²+n/2 -> O(n²)
```

## Time Complexity
### Dizi sıralandıktan sonra 18 sayısı aşağıdaki case'lerden hangisinin kapsamına girer? Yazınız
1.  Average case: Aradığımız sayının ortada olması
2.  Worst case: Aradığımız sayının sonda olması
3.  Best case: Aradığımız sayının dizinin en başında olması.

**Cevap:** _"Average case"_ kapsamına girer.

# İlk 4 adım
**[7,3,5,8,2,9,4,15,6]** dizisinin Selection Sort'a göre ilk 4 adımını yazınız.

```
1. [2,3,5,8,7,9,4,15,6]
2. [2,3,5,8,7,9,4,15,6]
3. [2,3,4,8,7,9,5,15,6]
4. [2,3,4,5,7,9,8,15,6]
```
