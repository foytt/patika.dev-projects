# Binary Search Tree
 ```
 [7, 5, 1, 8, 3, 6, 0, 9, 4, 2] 
 ```
- Dizisinin Binary-Search-Tree aşamalarını yazınız.					
- **Örnek:** root x'dir. root'un sağından y bulunur. Solunda z bulunur vb.			

## Aşamalar
```
1. İlk eleman 7 kök (root) olarak alınır.
2. İkinci eleman 7'den küçük, bu yüzden sol tarafına geçer.
3. Üçüncü eleman 1, 7'den küçük, sol tarafa, 5'ten de küçük 5'in de sol tarafına geçer.
4. Dördüncü eleman 8, 7'den büyük, sağ tarafına geçer.
5. Beşinci eleman 3, 7'den küçük, sol tarafa, 5'ten de küçük 5'in de sol tarafına geçer, ama 1 den büyük 1'in sağ tarafına geçer.
6. Altıncı eleman 6, 7'den küçük, sol tarafa, 5'ten büyük 5'in sağ tarafına geçer.
7. Yedinci eleman 0, 7'den küçük, sol tarafa, 5'ten de küçük 5'in de sol tarafına geçer. 1'den de küçük 1'in de sol tarafına geçer.
8. Sekizinci eleman 9, 7'den büyük, sağ tarafa, 8'den de büyük, 8'in de sağ tarafına.
9. Dokuzuncu eleman 4, 7'den küçük, sol tarafa, 5'ten küçük sol tarafa, 1'den büyük sağ tarafa, 3'ten de büyük, sağ tarafa.
10. Onuncu eleman 2, 7'den küçük, sol tarafa, 5'ten küçük sol tarafa, 1'den büyük sağ tarafa, 3'ten de küçük, sol tarafa.
```	

### Binary Search Tree 
```
							       7  
							      / \
							     5   8
							    / \   \
							   1   6   9 
							  / \   
							 0   3  
							    / \
							   2   4  
```
