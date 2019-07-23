## Task

There is given a rectangular bitmap of size n\*m. Each pixel of the bitmap is
either white or black, but at least one is white. The pixel in i-th line and
j-th column is called the pixel (i,j). The distance between two pixels
p1=(i1,j1) and p2=(i2,j2) is defined as d(p1,p2)=|i1-i2|+|j1-j2|.
This program returns a map of distances from each pixel to nearest white pixel.

### Algorithm can be found here:

```
distance/BitmapDistances.js
```
it iterates through bitmap and then again iterates to compute distances, and then if distance wasn't saved in result map or is smaller than that in result map it saves computed distance in result map.

### Input

The number of test cases t (1≤t≤1000) is in the first line of input, then t test
cases follow separated by an empty line. In the first line of each test case
there is a pair of integer numbers n, m separated by a single space, 1<=n <=182,
1<=m<=182. In each of the following n lines of the test case exactly one
zero-one word of length m, the description of one line of the bitmap, is
written. On the j-th position in the line (i+1), 1 <= i <= n, 1 <= j <= m, is
'1' if, and only if the pixel (i,j) is white.

### Output

In the i-th line for each test case, 1<=i<=n, there should be written m integers
f(i,1),...,f(i,m) separated by single spaces, where f(i,j) is the distance from
the pixel (i,j) to the nearest white pixel.

### Example

#### Input:

```
1
3 4
0001
0011
0110
```

#### Output:

```
3 2 1 0
2 1 0 0
1 0 0 1
```  
