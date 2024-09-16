# Standard Utility Functions
<!-- #SQUARK live!
| dest = desmos/dev/functions
| clean = braces
-->


<br>


## Ranges

### Step-Wise Range

$$
f_\text{srange} \left(
  s_\text{start},
  s_\text{stop},
  s_\text{step}
\right) =
\left[
  \left(\right)
  \space \text{for} \space
  i = \left[
    0 \text{...}
    \text{floor}\left(
      \frac{s_\text{stop}}{s_\text{step}}
    \right)
  \right]
\right]
$$

Generate a list of numbers from $s_\text{start}$ up to (and including) $s_\text{stop}$ with difference $s_\text{step}$.

### Step-Wise Exclusive Range
$$
f_\text{sxrange} \left(
\right)
$$

Generate a list of numbers from $s_\text{start}$ up to (but excluding) $s_\text{stop}$ with difference $s_\text{step}$.

### Linearly Spaced Ranged
$$
f_\text{nrange} \left(
  s_\text{start},
  s_\text{stop},
  n
\right) =
\left[
  \left(
    s_\text{start} + i \left(
      \frac
        {s_\text{stop} - s_\text{start}}
        {n}
    \right)
  \right)
  \space \text{for} \space
  i = \left[
    0 \text{...} n
  \right]
\right]
$$

### Linearly Spaced Exclusive Range
$$
f_\text{nxrange} \left(
  s_\text{start},
  s_\text{stop},
  n
\right) =
\left[
  \left(
    s_\text{start} + i \left(
      \frac
        {s_\text{stop} - s_\text{start}}
        {n}
    \right)
  \right)
  \space \text{for} \space
  i = \left[
    0 \text{...} n-1
  \right]
\right]
$$

Generate a list of $n$ numbers evenly spaced apart between $s_start$ and $s_stop$ (inclusive).

$$
f_\text{nrange}(1, 10, 10) = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] \space \text{(10 element list)}
$$

### List Range
$$
f_\text{lrange} \left(
  l
\right) =
\left[
  1 \text{...} \text{length}(l)
\right]
$$

Generate a list of integers corresponding to the indices of a list.

### Step-Wise List Range
$$
f_\text{lsrange} \left(
  l,
  s_\text{period},
  s_\text{offset}
\right) =
\left[
  \left(
    s_\text{offset} + (i-1) \cdot s_\text{period}
  \right)
  \space \text{for} \space
  i = \left[
    1 \text{...} \frac
      {\text{length}(l)}
      {s_\text{period}}
  \right]
\right]
$$

Generate a list of integers corresponding to chunks of a list.

For instance, to iterate over every 3 items:

$$
L = [1 \text{...} 9] \quad \text{(9 element list)}
$$

$$
I = f_\text{lsrange}(L, 3, 1) = [1, 4, 7] \quad \text{(3 element list)}
$$

$$
[L[i] \space \text{for} \space i = I] = [1, 4, 7] \quad \text{(3 element list)}
$$


<br>


## Rendering

### Line
$$
d_\text{line}
$$

### Circle
$$
d_\text{circle}
$$

### Rectangle
$$
d_\text{rect}
$$

### Regular Polygon
$$
d_\text{polygon} \left(
  n,
  p_c,
  r,
  d
\right) =
\left[
  \left(
    p_c\text{.}x + r \cos{\theta},
    p_c\text{.}y + r \sin{\theta}
  \right)
  \space \text{for} \space
  \theta = f_\text{nrange}\left(
    d,
    d + 2\pi,
    n
  \right)
\right]
$$

### Grid
$$
d_\text{grid}
$$

### Spike
$$
d_\text{spike}
$$


<br>
